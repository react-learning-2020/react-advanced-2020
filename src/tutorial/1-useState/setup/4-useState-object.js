import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({ name: 'Chandra', age: 24, message: 'Hello World!' });
  const changeMessage = () => {
    setPerson({ ...person, message: 'Well Done' });
  }
  return <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className='btn' onClick={changeMessage}>Change Person</button>
  </>;
};

export default UseStateObject;
