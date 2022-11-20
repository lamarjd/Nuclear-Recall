import React from "react";
import { useEffect, useState } from "react";
import * as sessionActions from "../../store/session.js";

import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";

import { deleteTaskThunk, editTaskThunk, fetchTasks } from "../../store/tasks";

import TaskForm from "../TaskForm/index.js";
import "./TaskList.css";

export default function AllTasks() {
  const arr = []
  const dispatch = useDispatch();
  const history = useHistory();
  const reduxstate = useSelector((state) => state.tasks);
  const listsState = useSelector((state) => state.lists);

    const thisUser = useSelector(state => state.session.user);

    const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    dispatch(fetchTasks()).then(() => setIsLoaded(true));
  }, [dispatch, listsState]);

  const taskList = Object.values(reduxstate);
  console.log("TASSKKLIIIISTT", taskList)
  const filteredTaskList = taskList.filter(task => task.complete == false)
console.log("filtereedd",filteredTaskList)

// const tasks = useSelector(state => state.tasks)
// console.log("all the tasks", tasks)


  const cb = (checkList, num) => {

    if(!checkList.length) {
      checkList.push(num)
      console.log(checkList)
      return checkList
    }
    for(let i = 0; i < checkList.length; i++){
      if(num == checkList[i]){
        checkList.splice(i, 1)
        return console.log(checkList)
      }
  }
    checkList.push(num)
    return console.log(checkList)
  }

  const executor = (arr) => {
    console.log("print")
    let payload = {
      complete: true
    }

    for(let i = 0; i < arr.length; i++){
      console.log("flugazi")
      dispatch(editTaskThunk(payload, arr[i]))
    }
    history.push(`/all/completed`)
  }

  // const completeStyle = (arr) => {
  //   let style;

  //   if (!arr.length) {
  //     style = {
  //       hover: { 
  //         boxShadow: '0px 0px 5px 0px gold',
  //         borderLeft: '2px solid black',
  //         borderTop: '2px solid black'
  //       }
  //     }
  //   }
  //   return style
  // }

  // const styles = {
  //   hover: { 
  //     boxShadow: '0px 0px 5px 0px gold',
  //     borderLeft: '2px solid black',
  //     borderTop: '2px solid black'
  //   }
  // };



  return (
    isLoaded && (

        <div className="all-tasks-container">
          <h1 className="task-header">Tasksss</h1>
            <div className="task-button-container">
              <div className="add-task-buttons">
             
                <NavLink className="completed-button" 
                // style={{completeStyle}}
                to={`/all/completed`}>Completed</NavLink>
                <button className="checkButton"onClick={() => executor(arr)}> ✔️ </button>
              </div>
            <TaskForm />
            </div>
          <hr />
          {filteredTaskList.map((task) => (
            <div className="one-task-container">
            {thisUser.id == task.user_id &&

            <div className="one-task">


                <input type="checkbox"
                onChange={() => cb(arr, task.id)}/>                            

              <NavLink
                className="detail-navlink"
                key={task.id}
                to={`/all/${task.id}`}
              >
                {" "}
                <h3 className="task-text">{task.body}</h3>
              <hr />
              </NavLink>
              <button id='uglyDeleteButtonZwei' onClick={() => (dispatch(deleteTaskThunk(task.id)),history.push('/all'))}>
                {" "}
                Delete
              </button>
              {/* <hr /> */}
            </div>}
            </div>
          ))}
        </div>
    )
  );
}
