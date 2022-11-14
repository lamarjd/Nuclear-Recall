import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
function TaskForm() {
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="Task">
      <label>
        <input
          placeholder="Write Task here"
          type="text"
          required
        />
      </label>
      <button className="ListButton" type="submit">Create da Task</button>
      </div>
    </form>
  );
}

export default TaskForm;