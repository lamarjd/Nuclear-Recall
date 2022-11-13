// solely made to test thunk


// group details react template

import React from 'react'
import { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session.js';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';



import { fetchTasks } from '../../store/tasks';




export default function AllTasks(){

    const dispatch = useDispatch();
    const reduxstate = useSelector((state) => state.tasks);


    const thisUser = useSelector(state => state.session.user);


    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        dispatch(fetchTasks())
            .then(() => setIsLoaded(true))
    }, [dispatch])

    return isLoaded && (
        <div className='main'>
           
               
                        <h1>Tasks</h1>
                    </div>
    
      

        )
        
    }
    
   

