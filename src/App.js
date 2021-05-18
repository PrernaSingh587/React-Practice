import React, { useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie'
function App() {
  const [isLoading , setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMoviesHandler();

  },[]);

  function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);
    fetch('https://react-https-c3fe9-default-rtdb.firebaseio.com/movies.json').then(
      response => {
        if(!response.ok) throw new Error('There is some Error')
        return response.json();
      }
    ).then(data => {
      const loadedMovies = [];
      for(const key in data ) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        })
      }
   
     /* const transformedMovies = data.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        }
      }) */
      setMovies(loadedMovies);
      setIsLoading(false);
    }).catch(error => {
      setIsLoading(false);
      setError(error.message)
    })
  }


 /*  const dummyMovies = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      openingText: 'This is the second opening text of the movie',
      releaseDate: '2021-05-19',
    },
  ]; */

  function addMovieHandler(movie) {
   fetch('https://react-https-c3fe9-default-rtdb.firebaseio.com/movies.json', {
     method : 'POST',
     body : JSON.stringify(movie),
     headers: {
       'Content-Type' : 'application/json'
     }
   }).then(response => {
     return response.json();
   }).then(data => console.log(data))
    
  }

  return (
    <React.Fragment>
      <section>
      <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick = {fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
      {!isLoading &&  <MoviesList movies={movies} />}
      {!isLoading && movies.length === 0 && !error && <p>Found No Movies..</p>}
      {!isLoading && error && <p>{error}</p>}
      {isLoading && <p>Loading ...</p>}
     
      </section>
    </React.Fragment>
  );
}

export default App;
