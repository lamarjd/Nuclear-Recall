import React from "react";
import { useEffect, useState } from "react";
import * as sessionActions from "../../store/session.js";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { fetchOneTask } from "../../store/tasks";
import EditForm from "../EditTask/index.js";
import NoteForm from "../NoteForm/index.js";

export default function OneTask() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const reduxstate = useSelector((state) => state.tasks);
  const thisUser = useSelector((state) => state.session.user);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(fetchOneTask(id)).then(() => setIsLoaded(true));
  }, [dispatch]);

  const taskList = Object.values(reduxstate);
  const filtered = taskList.filter((task) => task.id === +id)[0];

  return (
    isLoaded && (
      <div className="main">
        <h1>Tasks</h1>
        <NoteForm filtered={filtered}/>
        <EditForm filtered={filtered} />
        <div>{filtered.body}</div>
        <div> ---</div>
        <div>Notes:</div>
        <div>
          {filtered?.notes?.map((note) => (
            <p key={note.id}>{note.body}</p>
          ))}
        </div>
      </div>
    )
  );
}
