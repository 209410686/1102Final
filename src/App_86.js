import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home_86 from './pages/Home_86';
import About_86 from './pages/About_86';
import Final_86 from './pages/Final_86';
import Error_86 from './pages/Error_86';
import Navbar_86 from './components/Navbar_86';

function App_86() {
  return (
    <Router>
      <Navbar_86 />
      <Switch>
        <Route exact path='/'>
          <Home_86 />
        </Route>
        <Route path='/about'>
          <About_86 />
        </Route>
        <Route path='/final'>
          <Final_86 />
        </Route>
        <Route path='/123'>
          <Error_86 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App_86;
