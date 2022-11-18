import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import ListForm from '../ListModal/ListForm';
import { useState,useEffect } from 'react';
import TaskForm from '../TaskForm';
import AllTasks from '../TaskList';
import AllLists from '../List';
import NoteForm from '../NoteForm';
import "./HomePage.css"

function HomePage(){
//   const sessionUser = useSelector(state => state.session.user);

const [lis, setList] = useState(false);
let modalList = (
<div>
  <button onClick={() => (setList(true))}>Add a List</button>  
{lis && (
   <Modal onClose={() => setList(false)}>
   <ListForm />
 </Modal>
)}
</div>)
  return (
    <>
    <div className="home-body">

    <div className="home-page-left">
      Logo and options Div
    </div>
    
    <div className="all-tasks">
      <AllTasks/>
    </div>

      <AllLists/>

        <div>{modalList}</div>
    </div>
    </>
  );
}

export default HomePage;