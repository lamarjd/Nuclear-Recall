import React from "react";
import { useEffect, useState } from "react";
import * as sessionActions from "../../store/session.js";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { fetchOneTask } from "../../store/tasks";
import EditForm from "../EditTask/index.js";
import NoteForm from "../NoteForm/index.js";
import { getAllNotes, deleteNoteThunk } from "../../store/notes.js";
import EditTaskListForm from "../OneTask/EditTaskList.js";

// css


export default function OneListTask() {
  const dispatch = useDispatch();
  const { aiya } = useParams();
  const reduxstate = useSelector((state) => state.tasks);
  const thisUser = useSelector((state) => state.session.user);
  const notesState = useSelector((state) => state.notes)
  const notesObj = Object.values(notesState)

  const filteredNotes = notesObj.filter(note => note.task_id == aiya)

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(fetchOneTask(aiya)).then(() => setIsLoaded(true));
    dispatch(getAllNotes())
  }, [dispatch]);

  const taskList = Object.values(reduxstate);
  const filtered = taskList.filter((task) => task.id === +aiya)[0];

  return (
    isLoaded && (
      <div className="mainTaskDetailsOutDiv">
        <div className="outerTaskDetailsLeftDiv">
        <h1 id='h1taskdetails'>Task Options</h1>
        <EditTaskListForm filtered={filtered} />

        <EditForm filtered={filtered} />


        </div>
        <div className="noteOuterDivTaskDetails">
          <div id='labelDivTaskDetailsNotes'>Notes for {filtered?.body}</div>
          <div>
            {filteredNotes.map((note) => (
              <div className="noteDivContainerTaskDetails">
                <p key={note.id}>{note.body}</p>
                {thisUser.id == note.user_id &&
                <button className='noteDeleteButtonTaskDetails' onClick={() => dispatch(deleteNoteThunk(note.id))}>Destroy This Note</button>}
              </div>
            ))}
            <NoteForm id='noteFormTaskDetails' filtered={filtered} />
          </div>

        </div>
      </div>
    )
  );
}
