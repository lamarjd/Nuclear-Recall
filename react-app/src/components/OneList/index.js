import React from 'react'
import { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session.js';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchOneList } from '../../store/lists.js';
import TaskForm from '../TaskForm/index.js';
import TaskListForm from '../TaskListForm/index.js';

import { NavLink } from 'react-router-dom';
import { deleteTaskThunk } from '../../store/tasks.js';
import "./OneList.css"



export default function OneList(){
  const dispatch = useDispatch();
  const {id} = useParams()
  const reduxstate = useSelector((state) => state.lists);
  const taskState = useSelector((state) => state.tasks)
  const thisUser = useSelector(state => state.session.user);
  const [isLoaded, setIsLoaded] = useState(false)


  useEffect(() => {
    dispatch(fetchOneList(id))
        .then(() => setIsLoaded(true))
}, [dispatch,taskState])

  const list = Object.values(reduxstate)
  const filtered = list.filter(list => list.id === +id)[0]


  const tasks = filtered?.tasks



  return isLoaded && (

    <div>
        <h1>Tasks</h1>

        

        <TaskListForm list={id}/>
        {tasks?.map(task => (

          <div key={task.id}>
           <NavLink to={`/all/${task.id}`}> {task?.body} </NavLink>
           <button onClick={() => (dispatch(deleteTaskThunk(task.id)),dispatch(fetchOneList(filtered.id)))}>
                {" "}
                DELETE
              </button>
          </div>
        ))}
    </div>
  )


}
