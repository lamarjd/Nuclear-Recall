import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { createNoteThunk } from "../../store/notes";
import { useHistory, useParams } from "react-router-dom";
import { getOneNote } from "../../store/notes";

function NoteForm() {
    const dispatch = useDispatch()
    const history = useHistory()
    // const { taskId } = useParams()
    // console.log("task ID", taskId);

    const notes = useSelector((state) => Object.values(state.notes))
    console.log("Note SELECTOR", notes)

    const [noteBody, setNoteBody] = useState('');

    useEffect(() => {
        dispatch(getOneNote)
    }, [dispatch, noteBody])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            // taskId, // may want to remove
            noteBody
        }

        let noteCreated = await dispatch(createNoteThunk(payload))
        if (noteCreated) {
            history.push(`/all`)
        }
    }




    return (
        <form className="container" onSubmit={handleSubmit}>
        <div className="Note">
        <label>
          <input
            placeholder="Write Note here"
            type="text"
            value={noteBody}
            // required pattern="(?!\s+$)[a-zA-Z,'. ! ? -]+"
            onChange={(e) => setNoteBody(e.target.value)}
          />
        </label>
        <button className="NoteButton" type="submit">Create da Note</button>
        </div>
      </form>
    )
}

export default NoteForm;