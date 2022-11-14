import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './List.css';
function ListForm() {
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="welcome">PRAYGE</div>
      <div className="List">
      <label>
        <input
          placeholder="Write list here"
          type="text"
          required
        />
      </label>
      <button className="ListButton" type="submit">Create da list</button>
      </div>
    </form>
  );
}

export default ListForm;