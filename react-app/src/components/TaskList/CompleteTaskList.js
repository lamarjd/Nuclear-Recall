import React from "react";
import { useEffect, useState } from "react";
import * as sessionActions from "../../store/session.js";

import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link, useHistory, useParams } from "react-router-dom";

import { deleteTaskThunk, editTaskThunk, fetchTasks } from "../../store/tasks";

import TaskForm from "../TaskForm/index.js";
import "./TaskList.css";

export default function CompletedAllTasks() {
  const dispatch = useDispatch();
  const reduxstate = useSelector((state) => state.tasks);
  const listsState = useSelector((state) => state.lists);
  const thisUser = useSelector(state => state.session.user);
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    dispatch(fetchTasks()).then(() => setIsLoaded(true));
  }, [dispatch, listsState]);

  const taskList = Object.values(reduxstate);
  const completedList = taskList.filter(task => task.complete == true && task.user_id == thisUser.id)
  console.log(completedList)

  return (
    isLoaded && (

        <div className="all-tasks-container">
          <h1>Completed Tasks</h1>
          <p>Congrats you actually did something </p>
          <div className="BackToTasks">
          <NavLink to="/all">Back to All Tasks</NavLink>
          </div>
          <hr />
          {!completedList.length &&
          <h1>You haven't completed anything yet,
            GET TO WORK</h1>}
          {completedList.map((task) => (
            <div>
              {thisUser.id == task.user_id &&
            <div className="one-task-complete" >
                {" "}
                <h3>{task.body}</h3>
              <hr />
              <button id='completeTaskButtonDelete' onClick={() => dispatch(deleteTaskThunk(task.id))}>
                {" "}
                DELETE
              </button>
              {/* <hr /> */}
            </div>}
            </div>
          ))}
        </div>
    )
  );
}
