import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { createNoteThunk } from "../../store/notes";
import { useHistory, useParams } from "react-router-dom";
import { getOneNote } from "../../store/notes";

function NoteForm({ filtered }) {
    const dispatch = useDispatch()
    const history = useHistory()
    console.log("Filtered task ID", filtered)
    const { id } = filtered
    let task_id = id
    // const { taskId } = useParams();
    // console.log("task ID", taskId);

    const notes = useSelector((state) => Object.values(state.notes))
    const [body, setBody] = useState('');

    // useEffect(() => {
    //     dispatch(getOneNote)
    // }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            body,
            task_id
        }
        console.log("PAYLOAD------------------",payload)
        let noteCreated = await dispatch(createNoteThunk(payload, id))
        console.log(noteCreated)
        if (noteCreated) {
            history.push(`/all/${id}`)
        }
    }




    return (
        <form className="container" onSubmit={handleSubmit}>
        <div className="Note">
        <label>
          <input
            placeholder="Write Note here"
            type="text"
            value={body}

            onChange={(e) => setBody(e.target.value)}
          />
        </label>
        <button className="NoteButton" type="submit">Create da Note</button>
        </div>
      </form>
    )
}

export default NoteForm;
