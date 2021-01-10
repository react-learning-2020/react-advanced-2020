export const reducer = (state, action) => {
 if (action.type === 'ADD_ITEM') {
  const newPeople = [...state.people, action.payLoad];
  console.log(newPeople);
  return {
   ...state,
   people: newPeople,
   isModelOpen: true,
   modelContent: 'Item added'
  }
 } else if (action.type === 'NO_VALUE') {
  return {
   ...state,
   isModelOpen: true,
   modelContent: 'Please add a value'
  }
 } else if (action.type === 'CLOSE_MODEL') {
  return {
   ...state,
   isModelOpen: false,
   modelContent: ''
  }
 } else if (action.type === 'REMOVE_ITEM') {
  const newPeople = state.people.filter((person) => person.id != action.payLoad);
  return {
   ...state,
   people: newPeople,
   isModelOpen: false,
   modelContent: ''
  }
 }

 throw new Error('no matching type');
};