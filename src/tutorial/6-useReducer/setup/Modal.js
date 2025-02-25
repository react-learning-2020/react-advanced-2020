import React, { useEffect } from 'react';

const Modal = ({ modelContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);

  }, [])
  return <div className='model'>
    <p>{modelContent}</p>
  </div>;
};

export default Modal;
