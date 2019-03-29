import React from 'react';
import { Title , CheckboxContainer,Card ,CardContainer, CheckboxLabel, Button, Checkbox, Image, StyledLink, List, Para} from './Home.styles';
import PropTypes from 'prop-types';


const Home = ({ searchInput, submitValue, movies }) => (
  <div className="home">
    <Title> Bienvenue sur votre nouveau plateforme de film !</Title>
      <CheckboxContainer  color="red">

    <form onSubmit={submitValue}>
    <CheckboxContainer>
      <Checkbox ref={searchInput} placeholder="Rechercher"></Checkbox> 
      </CheckboxContainer> <br></br>
      
      <CheckboxContainer><Button type="submit">Search</Button></CheckboxContainer>
      
    </form>
      </CheckboxContainer>

      <CheckboxContainer className= "checkbox-container" color="red" reversed >
   { movies.length > 0 && (
      <List>
        {movies.map(movie => (
          <Card>  
            <a href={movie.imdbID}><Image src={movie.Poster} alt="Posters"></Image></a><br></br>
            
            <StyledLink to={`/movie/${movie.imdbID}`}>{movie.Title}</StyledLink>
            <CardContainer> 
            <Para>Type : {movie.Type}</Para>
            
            <Para>Date de sortie : {movie.Year}</Para>
            </CardContainer>
            <StyledLink to={`/movie/${movie.imdbID}`}>En savoir plus</StyledLink>
          </Card>
        ))}
      </List>
    )}
      </CheckboxContainer>


 

  </div>
);


Home.propTypes = {
  searchInput : PropTypes.object.isRequired,
  submitValue : PropTypes.func.isRequired,
}

export default Home;
