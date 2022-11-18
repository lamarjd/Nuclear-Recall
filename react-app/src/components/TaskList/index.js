import React from "react";
import { useEffect, useState } from "react";
import * as sessionActions from "../../store/session.js";

import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";

import { deleteTaskThunk, fetchTasks } from "../../store/tasks";

import TaskForm from "../TaskForm/index.js";
import "./TaskList.css";

export default function AllTasks() {
  const dispatch = useDispatch();
  const reduxstate = useSelector((state) => state.tasks);
  const listsState = useSelector((state) => state.lists);

    const thisUser = useSelector(state => state.session.user);

    const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    dispatch(fetchTasks()).then(() => setIsLoaded(true));
  }, [dispatch, listsState]);

  const taskList = Object.values(reduxstate);
  console.log(taskList);

  return (
    isLoaded && (

        <div className="all-tasks-container">
          <h1>Tasksss</h1>
          <TaskForm />
          <hr />
          
          {taskList.map((task) => (
            <div>
              {thisUser.id == task.user_id &&
            <div className="one-task">
              <input type="checkbox" />
              <NavLink
                className="detail-navlink"
                key={task.id}
                to={`/all/${task.id}`}
              >
                {" "}
                <h3>{task.body}</h3>
              <hr />
              </NavLink>
              <button onClick={() => dispatch(deleteTaskThunk(task.id))}>
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
