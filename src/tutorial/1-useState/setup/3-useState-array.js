import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id != id);
    setPeople(newPeople);
  }
  return (
    <React.Fragment>
      { people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button onClick={() => removeItem(person.id)} className='btn'>Remove Person</button>
          </div>
        );
      })};
      <button className='btn' onClick={() => setPeople([])}>
        Clear items
    </button>
    </React.Fragment>
  );
};

export default UseStateArray;
