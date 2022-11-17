import React, {useState} from "react";
import { useSelector } from "react-redux";

 const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("")
  const taskState = useSelector(state => state.tasks)

  const tasks = Object.values(taskState)
  console.log(tasks)



  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
      tasks.filter((task) => {
      return task.body.match(searchInput);
  });
  }

  return (
    <div>
      <input
   type="text"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput} />
    </div>
  )

}
export default SearchBar
