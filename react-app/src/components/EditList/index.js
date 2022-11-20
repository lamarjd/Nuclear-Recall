import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import { createListThunk, editListThunk } from "../../store/lists"
import "./EditList.css"


function EditList({list}) {
    // const {id,name} = list
  const dispatch = useDispatch();
  const [name, setListName] = useState(list.name)
  const [showOptions, setShowOptions] = useState(false)
  const history = useHistory()
    // useEffect(()=>{
    // setListName(list.name)
    // },[list])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name

    }
    
    let listUpdated = await dispatch(editListThunk(payload,list.id))
    if (listUpdated) {
      history.push(`/all`)
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="welcome"></div>
      <div className="List">
      <label>
        <input
          className="placeholder"
          onClick={() => setShowOptions(true)}
          type="text"
          required
          onChange={(e) => setListName(e.target.value)}
          maxLength={30}
          value={name}
        />
      </label>

    {showOptions &&
      <span className="button-options">

      <button className="ListButton" type="submit">Edit</button>

      <button className="ListButton" onClick={() => setShowOptions(false)}>Cancel</button>
      </span>
    }
  
      </div>
    </form>
  );
}

export default EditList;
