import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomeContainer from '../Home/HomeContainer';
import MovieContainer from '../Movie/MovieContainer';

import { Title , CheckboxContainer, CheckboxLabel, Button, Checkbox, Image, StyledLink, List, Para} from './App.styles';


const App = () => (
  <Router>
    <div className="container">
      <nav>
        <List>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
        </List>
      </nav>
      <div className="App">
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/movie/:id" component={MovieContainer} />
      </div>
    </div>
  </Router>
);

export default App;
