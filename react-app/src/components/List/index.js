import React from 'react'
import { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session.js';
import { deleteListThunk, editListThunk } from "../../store/lists.js"

import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom';

import { fetchLists } from "../../store/lists"

import ListForm from '../ListModal/ListForm.js';

import EditList from '../EditList/index.js';
import { fetchTasks } from '../../store/tasks.js';




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
            dispatch(fetchTasks())
    }, [dispatch])


    // console.log("lists", lists)




    return isLoaded && (
        <div className='lists'>


            <h1>Lists</h1>
            {/* <ListForm/> */}
            {lists?.map(list => (
                <div key={list.id}>
                 {thisUser.id == list.user_id &&
                <NavLink className="detail-navlink" key={list.id} to={`/all/lists/${list.id}`}> <h3>{list.name}</h3></NavLink>}
                 {thisUser.id == list.user_id &&
                <button onClick={(e)=> {dispatch(deleteListThunk(list.id), history.push('/all'))}}> DELETE</button>}
                 {thisUser.id == list.user_id &&
                <EditList list={list}/>}

                </div>
            ))}

        </div>

        )
    }
