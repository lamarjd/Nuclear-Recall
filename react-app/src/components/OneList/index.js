import React from 'react'
import { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session.js';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchOneList } from '../../store/lists.js';
import TaskForm from '../TaskForm/index.js';
import TaskListForm from '../TaskListForm/index.js';




export default function OneList(){
  const dispatch = useDispatch();
  const {id} = useParams()
  const reduxstate = useSelector((state) => state.lists);
  const thisUser = useSelector(state => state.session.user);
  const [isLoaded, setIsLoaded] = useState(false)


  useEffect(() => {
    dispatch(fetchOneList(id))
        .then(() => setIsLoaded(true))
}, [dispatch])

  const list = Object.values(reduxstate)
  const filtered = list.filter(list => list.id === +id)[0]

  // console.log("FILTERED",filtered)
  const tasks = filtered?.tasks
  // console.log("TASKS-----",tasks)


  return isLoaded && (

    <div>
        <h1>Tasks</h1>

        <TaskListForm list={id}/>
        {tasks?.map(task => (

          <div>
            <p>{task?.body}</p>
          </div>
        ))}
    </div>
  )


}
