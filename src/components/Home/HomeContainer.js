import React, { Component, createRef } from 'react';
import Home from './Home';
import {apiUrl} from '../../constants/config';



class HomeContainer extends Component {
  state = {
    movies : [], 
  };


  searchInput = createRef();
  submitForm = (event) => {
    event.preventDefault();
    console.info(this.searchInput.current.value);
    const query = this.searchInput.current.value;
    console.info(query);

    // Add query to apiUrl
    // fetch data then console log response
    // catch si jamais y'a une erreur 

fetch(apiUrl(`s=${query}`)).then(resp => {
  resp.json().then(r => this.setState({movies : r.Search})
  );
}).catch(err => console.error(err))
}


  render() {
    console.log(this.state.movies)
    return <Home  searchInput= {this.searchInput} submitValue={this.submitForm} movies={this.state.movies}/>;

  }
}

export default HomeContainer;
