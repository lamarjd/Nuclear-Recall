import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { createTaskThunk, editTaskThunk, fetchOneTask } from "../../store/tasks";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../OneTask/oneTaskcss.css"
function EditForm({filtered}) {
  const {id} = useParams()
  const dispatch = useDispatch();
  const [body, setBody] = useState("")
  const [validationErrors, setValidationErrors] = useState([])
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const history = useHistory()

  // useEffect(()=>{
  //   dispatch(fetchOneTask(filtered.id))
  // },[dispatch,filtered.id])


  useEffect(() => {
    setBody(filtered && filtered.body);
  }, [filtered]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload={
      body
    }

    let taskEdit = await dispatch(editTaskThunk(payload,filtered.id))
    if(taskEdit){
      history.push(`/all/${filtered.id}`)
    }
  };
// fff
  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="someTaskdiv">
        <label>
          <input
            id='InputBoxEditTaskName'
            type="text"
            value={body}
            maxLength={60}
            required
            onChange={(e) => setBody(e.target.value)}
          />
        </label>
        <button className="EditTaskButtonTaskDetails" type="submit">Edit Task Name</button>
      </div>
    </form>
  );
}

export default EditForm;
