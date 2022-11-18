import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { createTaskThunk, editTaskThunk, fetchOneTask } from "../../store/tasks";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function EditForm({filtered}) {
  const {id} = useParams()
  const dispatch = useDispatch();
  const [body, setBody] = useState("")
  const [validationErrors, setValidationErrors] = useState([])
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [dueDate, setDueDate] = useState(new Date())
  console.log("DUE DATE useState", dueDate)
  const [showCalendar, setShowCalendar] = useState(false)
  const history = useHistory()

  // useEffect(()=>{
  //   dispatch(fetchOneTask(filtered.id))
  // },[dispatch,filtered.id])

  console.log("FILTERED", filtered)

  useEffect(() => {
    setBody(filtered && filtered.body);
    setDueDate(dueDate)
  }, [filtered, dueDate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload={
      body,
      // due_date: dueDate
    }
    
    let taskEdit = await dispatch(editTaskThunk(payload,filtered.id))
    if(taskEdit){
      history.push(`/all/${filtered.id}`)
    }
  };

  // const changeDate = async (e) => {
  //   e.preventDefault();

  //   const payload = {
  //     due_date: dueDate
  //   }
  //   console.log("PAYLOAD", payload)

  //   setDueDate(dueDate)

  //   let date = await dispatch(editTaskThunk(payload, filtered.id))


  //   if (date){
  //     history.push(`/all/${filtered.id}`)
  //   }
  // }

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="Task">
      <label>
        <input
          id='InputBoxEditTaskName'
          type="text"
          value={body}
          maxLength={200}
          required
          onChange={(e) => setBody(e.target.value)}
        />
      </label>
      <button className="EditTaskButtonTaskDetails" type="submit">Edit Task Name</button>
      </div>

    <button type="submit" onClick={() => setShowCalendar(!showCalendar)}>Select Due Date</button>

    {showCalendar &&

      <div>
        <Calendar onChange={setDueDate} value={dueDate} />
        <span>Due Date</span>
      </div>
      }

      {dueDate.toDateString()}

    </form>
  );
}

export default EditForm;
