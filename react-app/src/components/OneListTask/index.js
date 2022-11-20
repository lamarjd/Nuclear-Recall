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
import EditTaskListFormList from "../NoteListStuff/EditTaskListFormList.js";
import EditFormList from "../EditTask/EditTaskList.js";
import NoteFormList from "../NoteForm/NoteListform.js";
import './One.css'
// css


export default function OneListTask() {
  const dispatch = useDispatch();
  const { aiya } = useParams();
  const reduxstate = useSelector((state) => state.tasks);
  const listState = useSelector((state) => state.lists)
  const thisUser = useSelector((state) => state.session.user);
  const notesState = useSelector((state) => state.notes)
  const notesObj = Object.values(notesState)
  console.log("THIS IS THE LIST STATE",listState)
  const filteredNotes = notesObj.filter(note => note.task_id == aiya && note.user_id == thisUser.id)

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
         <div className="someDiv">
        <h2 id='h1taskdetails'>Task Options</h2>
        <EditTaskListFormList filtered={filtered} />
        <EditFormList filtered={filtered} />
        </div>

        <div className="noteOuterDivTaskDetails">
        <div className>
         <h2 className="task-detail-title">{filtered?.body}</h2>
            <div className="someOtherDiv">
            <NoteFormList id='noteFormTaskDetails' filtered={filtered} />
              {filteredNotes.length ==0 && 
              <h3>No Notes Yet</h3>}
              {filteredNotes.length >0 && 
               <h3>Notes:</h3>}
              {filteredNotes.map((note) => (
                <div className="noteDivContainerTaskDetails">
                  <p className="note-contenet" key={note.id}>{note.body}</p>
                  {thisUser.id == note.user_id &&
                  <button className='noteDeleteButtonTaskDetails' onClick={() => dispatch(deleteNoteThunk(note.id))}>Destroy This Note</button>}
                </div>
              ))}
</div>
          </div>
        </div>
        </div>


    )
  );
}
