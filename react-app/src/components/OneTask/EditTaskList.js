import React from 'react'
import { useEffect, useState,dispatch } from 'react';
import * as sessionActions from '../../store/session.js';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import {editTaskAddListThunk} from '../../store/tasks';

export default function EditTaskListForm({filtered}){
    // const {id} = useParams()
    console.log("filtereed",filtered)
    let task_id = filtered?.id
    const reduxstate = useSelector((state) => state.tasks);
    const reduxList = useSelector((state)=> state.lists)
    const listObj = Object.values(reduxList)
    const history = useHistory()
    const [name,setName]= useState("")
    const [list_id,setList_id] = useState("")
    const dispatch = useDispatch()
  
    useEffect(() => {
        
      }, [dispatch,reduxList]);


      const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("list obj",listObj)
        let theList = listObj.filter(list=>list.name == name)[0]
        console.log("the list",theList)
        console.log("name--",name)
        let id = theList.id
        const payload = {
            list_id:id
         
        }
        console.log("task ID----",task_id)
        
        let taskEdited = await dispatch(editTaskAddListThunk(payload,task_id))
        if (taskEdited) {
            // history.push(`/all`)
        }
    }

return (
    <div>
        <form onSubmit={handleSubmit}>
        <select
        value={name}
        onChange={e => setName(e.target.value)}
        
        >
        {listObj?.map(list => (
            <option key={list.id}>
              {list.name}
            </option>
          ))}
          </select>
          <button type="submit"> click this</button>
          </form>
    </div>
   
)
 
}