import React from "react";
import { useEffect, useState } from "react";
import * as sessionActions from "../../store/session.js";
import { deleteListThunk, editListThunk } from "../../store/lists.js";

import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";

import { fetchLists } from "../../store/lists";

import ListForm from "../ListModal/ListForm.js";

import EditList from "../EditList/index.js";
import { fetchTasks } from "../../store/tasks.js";
import "./List.css";
import { fetchOneList } from '../../store/lists.js';
export default function AllLists({ modalList }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const listState = useSelector((state) => state.lists);
  const taskState = useSelector((state) => state.tasks)
  const thisUser = useSelector((state) => state.session.user);

  const [isLoaded, setIsLoaded] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  // const [style, setStyle] = useState(false)

  const lists = Object.values(listState);
  const filteredList = lists.filter(list => list.user_id == thisUser.id)
  // console.log("THESE ARE THE LISTS", filteredList)
  useEffect(() => {
    dispatch(fetchLists()).then(() => setIsLoaded(true))
    dispatch(fetchTasks());
  }, [dispatch]);

  let styler = () => {
    setShowModal(!showModal) // edit list name
  };
  
  let showListOptions = () => {
    setShowEditForm(!showEditForm);
    // setShowModal(!showModal)
  }


  return (
    isLoaded && (
      <div className="lists">
        <div className="list-options">
          <div className="list-name">
            <h1>Lists</h1> {"  "}


            {showEditForm ? (
                <i
                onClick={() => styler()}
                class="fa-regular fa-square-minus"
                ></i> // Minus sign to hide list actions
                ) : (
                    <i onClick={() => styler()} class="fa-regular fa-square-plus"></i> // Plus sign to show list actions
                    )}
          </div>
          {showModal &&
            <div className="modal">
                {modalList}
            </div>
          }
        </div>


        {/* <ListForm/> */}
        {!filteredList.length &&
         <h2>No lists yet</h2>
        }
        {lists?.map((list) => (
          <div key={list.id}>
            {thisUser.id == list.user_id && (
              <>
                <div className="list-name-div">
                <NavLink className="detail-navlink" onClick={()=> dispatch(fetchOneList(list.id))} key={list.id} to={`/all/lists/${list.id}`}>
                {/* List Name */}
                <h3 
                onClick={() => showListOptions()}
                >
                {list.name}</h3>
                </NavLink>

                </div>
                {showEditForm && (
                  <>
                    <div className="edit-options">
                      <EditList
                      onClick={() => setShowOptions(!showOptions)}
                        style={{
                          visibility: showEditForm ? "visible" : "hidden",
                        }}
                        list={list}
                      />
                      <br />

                      <button
                        id="delete-button"
                        onClick={(e) => {
                          dispatch(
                            deleteListThunk(list.id),
                            history.push("/all")
                          );
                        }}
                      >
                        {" "}
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    )
  );
}
