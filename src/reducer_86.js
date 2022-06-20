import { ADD_ITEM } from './action_86';

// reducer function
const reducer_86 = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload];
    return {
      people: newPeople,
      isModalOpen: true,
      modalContent: 'item added'
    }
  }
};

export default reducer_86;
