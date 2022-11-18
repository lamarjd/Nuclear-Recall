import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createTaskThunk, editTaskThunk, fetchOneTask } from "../../store/tasks";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function TaskCalendar({ filtered }) {

    const history = useHistory();
    const dispatch = useDispatch();

    const currTask = useSelector(state => Object.values(state.tasks))
    console.log("Current Task", currTask[0].due_date)


    const [dueDate, setDueDate] = useState(new Date())
    // console.log("DUE DATE useState", dueDate)
    const [showCalendar, setShowCalendar] = useState(false)
    const [body, setBody] = useState("")

    useEffect(() => {
        // setBody(filtered && filtered.body);
        setDueDate(filtered && dueDate)
    }, [filtered, dueDate, currTask])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            // body,
            due_date: dueDate
        }

        let taskDue = await dispatch(editTaskThunk(payload, filtered.id))
        if (taskDue) {
            history.push(`/all/${filtered.id}`)
        }
    }

  return (
    <>
      <button onClick={() => setShowCalendar(!showCalendar)}>
        Select Due Date
      </button>

    <form className="container" onSubmit={handleSubmit}>
    <div>

      {showCalendar && (
          <div>
          <Calendar onChange={setDueDate} value={dueDate} />
          <span>Due Date</span>
        </div>
      )}

      {currTask[0].due_date.slice(0, 10)}

      <button type="submit">Submit due date</button>
    </div>
    </form>
    </>
  );
}
