import React, { useState } from "react";
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchOneTask } from "../store/tasks";
import "./searchBar.css"
 
  

const SearchBar = () => {
  const matchingTask = (searchInput,tasks) =>{
    if(!searchInput) return null
    return tasks.filter(task => task.body.toLowerCase().includes(searchInput.toLowerCase()))

  }
  
    const [searchInput, setSearchInput] = useState("")
    const taskState = useSelector(state => state.tasks)
    const dispatch= useDispatch()
    const tasks = Object.values(taskState)
    console.log(tasks)

    const tasksFound = matchingTask(searchInput,tasks)

  return (

    <div SEARCH BAR>
      <input
    id="search"
   type="text"
   placeholder="Search here"
   onChange={e => setSearchInput(e.target.value)}
  //  value={searchInput} 
   />
   <div>
    {tasksFound?.map((oneTask) =>(
      <NavLink onClick={()=> (setSearchInput(""))} to={`/all/${oneTask.id}`}> 
      <div key={oneTask.id}>{oneTask.body}</div>
      </NavLink>
    ))}
   </div>

    </div>
  );
};
export default SearchBar;
