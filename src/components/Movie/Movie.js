import React from 'react';
import { Title ,Card,List, CardContainer, CheckboxContainer, CheckboxLabel, Checkbox, Image, Para } from './Movie.style';




const Movie = ({ searchInput, submitValue, movie }) => (
  <div className="home">
    <Title >Description du film</Title>
    <List>    
      <Card>
      <Image src={movie.Poster} alt="Posters"></Image><br></br>
      
      <CardContainer> 
            <Para key={movie.imdbID}>{movie.Title}</Para>
            <Para>Type : {movie.Type}</Para>
            <Para>Date de sortie : {movie.Year}</Para>
        </CardContainer>
    </Card>
    </List>

    
  

  </div>
);








export default Movie; 
