import React from 'react'
import { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session.js';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchOneList, fetchLists } from '../../store/lists.js';
import TaskForm from '../TaskForm/index.js';
import TaskListForm from '../TaskListForm/index.js';

import { NavLink } from 'react-router-dom';
import { deleteTaskThunk, editTaskThunk } from '../../store/tasks.js';
import "./OneList.css"



export default function OneList(){
  const arr = []
  const dispatch = useDispatch();

  const {id} = useParams()

  const reduxstate = useSelector((state) => state.lists);
  const taskState = useSelector((state) => state.tasks)
  const thisUser = useSelector(state => state.session.user);
  const [isLoaded, setIsLoaded] = useState(false)
  const history = useHistory();
  const listsState = useSelector((state) => state.lists);

  useEffect(() => {
    console.log("banana")
    dispatch(fetchOneList(id))
    .then(() => setIsLoaded(true))
}, [dispatch,taskState])


  const list = Object.values(reduxstate)
  const filtered = list.filter(list => list.id === +id)[0]

  const tasks = filtered?.tasks
 let falseTasks = tasks?.filter(task =>task.complete == false && task.user_id == thisUser.id)

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

  return  (isLoaded && (

    <div className="all-tasks-container">
        <h1 className="task-header">{filtered?.name}</h1>

        <div className="task-button-container">
              <div className="add-task-buttons">
                <NavLink className="completed-button" to={`/all/completed`}>Completed</NavLink>
                <button className="checkButton"onClick={() => executor(arr)}> ✔️ </button>
              </div>
              <TaskListForm list={id}/>
            </div>
          <hr />
        {!falseTasks?.length &&
        <h2>Add a task to this list, stop forgetting stuff</h2>}

        {falseTasks?.map(task => (
  <div className="one-task-container">
  {thisUser.id == task.user_id &&
  <div className="one-task">
    <input type="checkbox" onChange={() => cb(arr, task.id)}/>
    <NavLink
      className="detail-navlink"
      key={task.id}
      to={`/all/lists/${filtered.id}/${task.id}`}

    >
      {" "}
      <h3 className="task-text">{task.body}</h3>
    <hr />
    </NavLink>
    <button id='uglyDeleteButtonZwei' onClick={() => [dispatch(deleteTaskThunk(task.id)), history.push(`/all/lists/${filtered.id}`)]}>
      {" "}
      Delete
    </button>
    {/* <hr /> */}
  </div>}
          </div>
        ))}
    </div>
  ))


}
