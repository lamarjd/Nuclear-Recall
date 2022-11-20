import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { createNoteThunk } from "../../store/notes";
import { useHistory, useParams } from "react-router-dom";
import './note.css'

function NoteFormList({ filtered }) {
    const dispatch = useDispatch()
    const history = useHistory()
    
    const { id,list_id } = filtered
    let task_id = id

    const [body, setBody] = useState('');

    useEffect(() => {
    }, [dispatch, body])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            body,
            task_id
        }
        setBody("")
        let noteCreated = await dispatch(createNoteThunk(payload, id))
        if (noteCreated) {
            history.push(`/all/lists/${list_id}/${task_id}`)
        }
    }


    return (
        <form className="containerNoteCreationTaskDetails" onSubmit={handleSubmit}>
        <div className="Note">
        <label>
          <input
            placeholder="Add a Note here . . . "
            id="inputBoxnoteTaskDetails"
            type="text"
            value={body}
            maxLength={200}
            required
            onChange={(e) => setBody(e.target.value)}
          />
        </label>
        <button className="NoteButtonTaskDetails" type="submit">Add a note</button>
        </div>
      </form>
    )
}

export default NoteFormList;