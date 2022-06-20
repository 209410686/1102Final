import React, { useState, useContext, useEffect, useReducer } from 'react';
import reducer_86 from './reducer_86';
import { data } from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>;
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
