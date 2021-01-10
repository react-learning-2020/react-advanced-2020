import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };
  console.log(refContainer);
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className="form-element">
            <input type='text' name='firstname' ref={refContainer} />
            <button type='submit' value="Save">Save </button>
          </div>
        </form>
      </article>
    </>
  );
};

export default UseRefBasics;
