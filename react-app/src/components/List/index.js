import React from 'react'
import { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session.js';
import { deleteListThunk, editListThunk } from "../../store/lists.js"

import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom';

import { fetchLists } from "../../store/lists"

import ListForm from '../ListModal/ListForm.js';
import EditList from '../EditList/index.js';


export default function AllLists(){

    const dispatch = useDispatch()
    const listState = useSelector((state) => state.lists);

    const thisUser = useSelector((state) => state.session.user);

    const [isLoaded, setIsLoaded] = useState(false)
    const history = useHistory()
    const lists = Object.values(listState)
    useEffect(() => {
        dispatch(fetchLists())
            .then(() => setIsLoaded(true))
    }, [dispatch])

    
    console.log("lists", lists)

   

    
    return isLoaded && (
        <div className='lists'>
        

            <h1>Lists</h1>
            {/* <ListForm/> */}
            {lists.map(list => (
                <div key={list.id}>

                <NavLink className="detail-navlink" key={list.id} to={`/all/${list.id}`}> <h3>{list.name}</h3></NavLink>
                <button onClick={(e)=> {dispatch(deleteListThunk(list.id), history.push('/all'))}}> DELETE</button> 
               

                <button onClick={()=>dispatch(editListThunk(list.id))}>Edit</button>
                <EditList list={list}/>
                </div>
            ))}

        </div>
        
        )        
    }