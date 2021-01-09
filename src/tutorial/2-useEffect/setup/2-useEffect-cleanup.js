import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);
  const setSizeL = () => {
    setSize(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', setSizeL);
    return () => {
      window.removeEventListener
    }
  });
  return (
    <>
      <h1> Window</h1>
      <h2>{size}</h2>
    </>
  );
};

export default UseEffectCleanup;
