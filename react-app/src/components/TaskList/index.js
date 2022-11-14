
import React from 'react'
import { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session.js';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom';



import { fetchTasks } from '../../store/tasks';




export default function AllTasks(){

    const dispatch = useDispatch();
    const reduxstate = useSelector((state) => state.tasks);


    const thisUser = useSelector(state => state.session.user);
    console.log("user",thisUser)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        dispatch(fetchTasks())
            .then(() => setIsLoaded(true))
    }, [dispatch])

    
    const taskList = Object.values(reduxstate)
    console.log(taskList)

    return isLoaded && (
        <div className='main'>
        

                        <h1>Tasks</h1>

                        {taskList.map(task => (
                            <NavLink className="detail-navlink" key={task.id} to={`/all/${task.id}`}> <h3>{task.body}</h3></NavLink>
                        ))}
                    </div>
    
    
        )
        
    }
    