import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { createTaskThunk } from "../../store/tasks";
import { useHistory } from "react-router-dom";
function TaskForm() {
  const dispatch = useDispatch();
  const [body, setBody] = useState('')
  const [validationErrors, setValidationErrors] = useState([])
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const history = useHistory()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload={
      body
    }

    let taskCreated = await dispatch(createTaskThunk(payload))
    if(taskCreated){
      history.push(`/all/${taskCreated.id}`)
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="Task">
      <label>
        <input
          placeholder="Write Task here"
          type="text"
          value={body}
          // required pattern="(?!\s+$)[a-zA-Z,'. ! ? -]+"
          onChange={(e) => setBody(e.target.value)}
        />
      </label>
      <button className="ListButton" type="submit">Create da Task</button>
      </div>
    </form>
  );
}

export default TaskForm;