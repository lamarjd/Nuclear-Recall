import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { createTaskListThunk, createTaskThunk } from "../../store/tasks";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchOneList } from "../../store/lists";
import './taskListform.css'


function TaskListForm() {
  const {id} = useParams()
  const dispatch = useDispatch();
  const [body, setBody] = useState('')
  const [validationErrors, setValidationErrors] = useState([])
  const [showButton, setShowButton] = useState(false)

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
    <form className="container" onClick={() => setShowButton(true)} onSubmit={handleSubmit} >
      <div className="someTask">
      <label>
        <input
          className="someInputFieldAetius"
          placeholder="Write a task for the list here"
          type="text"
          value={body}
          maxLength={60}
          required
          onChange={(e) => setBody(e.target.value)}
        />
      </label>

    {showButton &&
      <button className="ListButton" type="submit"  
      style={{visibility: showButton ? "visible" : "hidden"}}
      >Add task</button>
    }


      </div>
    </form>
  );
}

export default TaskListForm;
