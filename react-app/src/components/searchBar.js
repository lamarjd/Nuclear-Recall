import React, { useState } from "react";
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchOneTask } from "../store/tasks";
import "./searchBar.css"



const SearchBar = () => {
  const matchingTask = (searchInput,tasks) =>{
    if(!searchInput) return null

   return tasks.filter(task => task.body.toLowerCase().includes(searchInput.toLowerCase()) && task.complete ==false)

  }

    const [searchInput, setSearchInput] = useState("")
    const taskState = useSelector(state => state.tasks)
    const dispatch= useDispatch()
    const tasks = Object.values(taskState)


    const tasksFound = matchingTask(searchInput,tasks)

  return (

    <div className="searchbar">
      <input className="searchField"
      id="search"
      type="text"
      placeholder="Search Tasks Here"
      onChange={e => setSearchInput(e.target.value)}
      />
      <div>
        {tasksFound &&
          <div className="searchResults">
            {tasksFound?.map((oneTask) =>(
              <NavLink onClick={()=> (setSearchInput(""))} to={`/all/${oneTask.id}`}>
              <div className="individual-result" key={oneTask.id}>{oneTask.body}</div>
              </NavLink>
            ))}
          </div>
          }
        </div>
    </div>
  );
};
export default SearchBar;
