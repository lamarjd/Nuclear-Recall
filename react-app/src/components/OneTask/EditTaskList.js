import React from 'react'
import { useEffect, useState} from 'react';
import * as sessionActions from '../../store/session.js';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import {editTaskAddListThunk} from '../../store/tasks';
import { fetchLists } from '../../store/lists.js';

// css import
import './oneTaskcss.css'


export default function EditTaskListForm({filtered}){

    console.log("filtereed",filtered)
    let task_id = filtered?.id
    const reduxstate = useSelector((state) => state.tasks);
    const reduxList = useSelector((state)=> state.lists)
    const listObj = Object.values(reduxList)
    const history = useHistory()
    const [name,setName]= useState(listObj[0]?.name)
 
    
    //   const [name,setName]= useState(placeholder.name)
    //    setName(placeholder.name)
    
    const [list_id,setList_id] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(fetchLists())
      }, [dispatch]);


      const handleSubmit = async (e) => {
        e.preventDefault();
        let theList = listObj.filter(list =>{
            return list.name == name
        })[0]
        let id = theList?.id
        const payload = {
            list_id:id
        }

        let taskEdited = await dispatch(editTaskAddListThunk(payload,task_id))
        if (taskEdited) {
            history.push(`/all/lists/${payload.list_id}`)
        }
    }

return (
    <div>
        <form id='addToListForm' onSubmit={handleSubmit}>
        <select
        id='dropDownForAddToList'
        value={name}
        onChange={e => setName(e.target.value)}

        >
        {listObj?.map(list => (
            <option key={list.id}>
              {list.name}
            </option>
          ))}
          </select>
          <button id='buttonForAddToList' type="submit"> Add to a list</button>
          </form>
    </div>

)

}
