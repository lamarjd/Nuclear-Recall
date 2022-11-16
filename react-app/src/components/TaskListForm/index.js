import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { createTaskListThunk, createTaskThunk } from "../../store/tasks";
import { useHistory } from "react-router-dom";
function TaskListForm({id}) {
  const dispatch = useDispatch();
  const [body, setBody] = useState('')
  const [validationErrors, setValidationErrors] = useState([])
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const history = useHistory()
  let list_id = id
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload={
      body,
      list_id
    }
    
    let taskCreated = await dispatch(createTaskListThunk(payload,id))
    if(taskCreated){
      history.push(`/all/${taskCreated.id}`)
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="Task">
      <label>
        <input
          placeholder="Write TaskList here"
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

export default TaskListForm;