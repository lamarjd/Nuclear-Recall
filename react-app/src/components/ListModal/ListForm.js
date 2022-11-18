import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import { createListThunk, fetchLists } from "../../store/lists"
import './List.css';
import { Modal } from "../../context/Modal";

function ListForm({setList}) {
  const dispatch = useDispatch();
  const [name, setName] = useState('')
  const history = useHistory()
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name
    }

    let listCreated = await dispatch(createListThunk(payload))
    if (listCreated) {
      history.push(`/all`)
      setList(false)
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="welcome">( ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°)</div>
      <div className="List">
      <label>
        <input
          placeholder="Write list here"
          type="text"
          maxLength={30}
          required
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button className="ListButton" type="submit">Create da list</button>
      </div>
    </form>
  );
}

export default ListForm;