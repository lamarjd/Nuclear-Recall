import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import { createListThunk, fetchLists } from "../../store/lists"
import './List.css';
import { Modal } from "../../context/Modal";

function ListForm({ setList }) {
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
    <form className="blahListModal" onSubmit={handleSubmit}>
      <h3 className="containerListModalOuter">Enter list name here</h3>
      <div className="ListflexdivOne">
        <label>
          <input
            id="styledListModalInputBox"
            placeholder="Write list here"
            type="text"
            maxLength={30}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button className="ListButtonModalGood" type="submit">Create list</button>
      </div>
    </form>
  );
}

export default ListForm;