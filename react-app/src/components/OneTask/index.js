// solely made to test thunk


// group details react template

import React from 'react'
import { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session.js';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';



import { fetchOneTask } from '../../store/tasks';




export default function OneTask(){

    const dispatch = useDispatch();
    const {id} = useParams()
    const reduxstate = useSelector((state) => state.tasks);


    const thisUser = useSelector(state => state.session.user);


    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        dispatch(fetchOneTask(id))
            .then(() => setIsLoaded(true))
    }, [dispatch])

    
    const taskList = Object.values(reduxstate)
    console.log(taskList)

    return isLoaded && (
        <div className='main'>
           
               
                        <h1>Tasks</h1>
                    </div>
    
      

        )
        
    }
    
   

