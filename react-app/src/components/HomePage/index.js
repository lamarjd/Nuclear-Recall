import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import ListModal from '../ListModal';
import ListForm from '../ListModal/ListForm';
import { useState,useEffect } from 'react';

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
        <div>{modalList}</div>
  );
}

export default HomePage;