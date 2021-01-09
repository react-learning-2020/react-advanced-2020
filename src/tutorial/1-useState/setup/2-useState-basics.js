import React, { useState } from 'react';

const UseStateBasics = () => {
  console.log(useState);

  const [text, setText] = useState('Random title');
  const handleClick = () => {
    if (text === 'Random title') {
      setText('Hello World!')
    } else {
      setText('Random title')
    }

  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick} >
        Handle click
        </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
