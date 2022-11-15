import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { createTaskThunk, editTaskThunk } from "../../store/tasks";
import { useHistory } from "react-router-dom";
function EditForm({filtered}) {
  const dispatch = useDispatch();
  const [body, setBody] = useState(filtered.body)
  const [validationErrors, setValidationErrors] = useState([])
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const history = useHistory()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload={
      body
    }
    console.log("payload",payload)
    let taskEdit = await dispatch(editTaskThunk(payload,filtered.id))
    if(taskEdit){
      history.push(`/all/${filtered.id}`)
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="Task">
      <label>
        <input
          
          type="text"
          value={body}
          required pattern="(?!\s+$)[a-zA-Z,'. ! ? -]+"
          onChange={(e) => setBody(e.target.value)}
        />
      </label>
      <button className="ListButton" type="submit">Edit this Task</button>
      </div>
    </form>
  );
}

export default EditForm;