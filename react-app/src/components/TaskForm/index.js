import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { createTaskThunk } from "../../store/tasks";
import { useHistory } from "react-router-dom";
import "./TaskForm.css"

function TaskForm() {
  const dispatch = useDispatch();
  const [body, setBody] = useState('')
  const [validationErrors, setValidationErrors] = useState([])
  const [showButton, setShowButton] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const history = useHistory()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload={
      body
    }

    let taskCreated = await dispatch(createTaskThunk(payload))
    if(taskCreated){
      setBody("")
    }
  };

  return (
    <div className="task-form-container">
      <form className="add-task-form" onSubmit={handleSubmit}
      onClick={() => setShowButton(true)}>

        <label>
          <input
            className="task-form-input-field"
            placeholder="Write Task here"
            type="text"
            maxLength={60}
            value={body}
            required
            // required pattern="[a-zA-Z, 0-9,'. ! ? + -]+" title="Please use valid chars,invalid chars: @#$%^&*()"
            onChange={(e) => setBody(e.target.value)}
          />
        </label>

      {showButton &&
        <button className="ListButton" type="submit"
        style={{visibility: showButton ? "visible" : "hidden"}}
        >Add task to the list</button>
      }

      </form>
    </div>
  );
}

export default TaskForm;
