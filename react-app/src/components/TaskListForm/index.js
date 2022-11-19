import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { createTaskListThunk, createTaskThunk } from "../../store/tasks";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchOneList } from "../../store/lists";
function TaskListForm() {
  const {id} = useParams()
  const dispatch = useDispatch();
  const [body, setBody] = useState('')
  const [validationErrors, setValidationErrors] = useState([])
  
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload={
      body,
      id
    }

    let taskCreated = await dispatch(createTaskListThunk(payload,id))
    if(taskCreated){
      // history.push(`/all/${taskCreated.id}`)
      setBody("")
      dispatch(fetchOneList(payload.id))
      history.push(`/all/lists/${payload.id}`)
    }    
  };
  

  return (
    <form className="container" onSubmit={handleSubmit} >
      <div className="Task">
      <label>
        <input
          id='stupidDetailStyling'
          placeholder="Write TaskList here"
          type="text"
          value={body}
          maxLength={200}
          required
          onChange={(e) => setBody(e.target.value)}
        />
      </label>
 
      <button className="ListButton" type="submit"  >Add a task to the list</button>
    
      
      </div>
    </form>
  );
}

export default TaskListForm;
