import React from "react";
import { useEffect, useState } from "react";
import * as sessionActions from "../../store/session.js";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { fetchOneTask } from "../../store/tasks";
import EditForm from "../EditTask/index.js";
import NoteForm from "../NoteForm/index.js";
import { getAllNotes, deleteNoteThunk } from "../../store/notes.js";
import EditTaskListForm from "./EditTaskList.js";

export default function OneTask() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const reduxstate = useSelector((state) => state.tasks);
  const thisUser = useSelector((state) => state.session.user);
  const notesState = useSelector((state) => state.notes)
  const notesObj = Object.values(notesState)

  const filteredNotes = notesObj.filter(note => note.task_id == id)




  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(fetchOneTask(id)).then(() => setIsLoaded(true));
    dispatch(getAllNotes())
  }, [dispatch]);

  const taskList = Object.values(reduxstate);
  const filtered = taskList.filter((task) => task.id === +id)[0];
  console.log("FILTERED_--",filtered)
  return (
    isLoaded && (
      <div className="main">
        <h1>Tasks</h1>
        <EditTaskListForm filtered = {filtered}/>
        <NoteForm filtered={filtered}/>
        <EditForm filtered={filtered} />
        <div>{filtered?.body}</div>
        <div> ---</div>
        <div>Notes:</div>
        <div>
          {filteredNotes.map((note) => (
            <div>
            <p key={note.id}>{note.body}</p>
            <button onClick={()=> dispatch(deleteNoteThunk(note.id))}>DELETE DAT SHIT</button>
            </div>
          ))}
        </div>
      </div>
    )
  );
}
