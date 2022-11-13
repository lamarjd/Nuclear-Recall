// solely made to test thunk



import React from 'react'
import { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session.js';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';



import { fetchLists } from '../../store/lists';




export default function AllLists(){

    const dispatch = useDispatch();
    const reduxstate = useSelector((state) => state.lists);


    const thisUser = useSelector(state => state.session.user);


    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        dispatch(fetchLists())
            .then(() => setIsLoaded(true))
    }, [dispatch])

    
    const taskList = Object.values(reduxstate)
    

    return isLoaded && (
        <div className='main'>
           
               
                        <h1>lists</h1>

                        {taskList.map(list => (
                            <h3>{list.name}</h3>
                        ))}
                    </div>
    
      

        )
        
    }
    
   

