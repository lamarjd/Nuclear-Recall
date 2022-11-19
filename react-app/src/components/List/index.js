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
import "./List.css"




export default function AllLists(){

    const dispatch = useDispatch()
    const history = useHistory()
    const listState = useSelector((state) => state.lists);

    const thisUser = useSelector((state) => state.session.user);

    const [isLoaded, setIsLoaded] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    // const [style, setStyle] = useState(false)

    const lists = Object.values(listState)
    useEffect(() => {
        dispatch(fetchLists())
            .then(() => setIsLoaded(true))
            dispatch(fetchTasks())
    }, [dispatch])  


    let styler =() => {
        setShowEditForm(!showEditForm)
    }

    return isLoaded && (
        <div className='lists'>

            <div className="list-name">
                <h1>Lists</h1> {"  "}
                
                <i onClick={() => styler()}class="fa-solid fa-plus"></i>
            
            </div>
        
            {/* <ListForm/> */}
            {lists?.map(list => (
                <div key={list.id}>

                 {thisUser.id == list.user_id &&
                 <>
                <div className="list-name-div">
                <NavLink className="detail-navlink" key={list.id} to={`/all/lists/${list.id}`}> 
                {/* List Name */}
                <h3>{list.name}</h3>
                </NavLink>

 
                
                </div>
                {showEditForm && 

                <>
                <div className="edit-options" >

                    <EditList                  
                    style={{visibility: showEditForm ? "visible" : "hidden"}}
                    list={list}/>
            
                
                
                    <button id="delete-button" onClick={(e)=> {dispatch(deleteListThunk(list.id), history.push('/all'))}} > Delete</button>      
                </div>
                </>
                }               
                    
                </>
                }

                </div>
            ))}

        </div>

        )
    }
