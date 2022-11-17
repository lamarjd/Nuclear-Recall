import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import bert from "../../../assets/bert.PNG"
import LoginForm from './LoginForm';
import "./loginForm.css"

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="sign-in" onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
