import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      console.log(firstName);
      console.log(email);
      const person = { id: new Date().getTime().toString(), firstName: firstName, email: email };
      setPeople((persons) => {
        return [...persons, person]
      });
      setFirstName('');
      setEmail('');
    } else {
      console.log('hello world');
    }


  };
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className="form-contoll">
            <label htmlFor='firstName'>Name : </label>
            <input
              type='tet'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="form-contoll">
            <label htmlFor='email'>Email : </label>
            <input
              type='tet'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <button type='submit'>Save</button>
        </form>
        {
          people.map((person) => {
            const { id, firstName, email } = person;
            return <div key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>;
          })
        }
      </article>
    </>
  );
};

export default ControlledInputs;
