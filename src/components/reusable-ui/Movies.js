import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Movie from './Movie';
import { movies$ } from '../../movies'

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [activeBtn, setActiveBtn] = useState("none");

  useEffect(() => {
    movies$.then((data) => setMovies(data));
  });

  const handleDelete = (id) => {
    const moviesCopy = [...movies];

    const moviesCopyUpdated = moviesCopy.filter((movie) => movie.id !== id);

    setMovies(moviesCopyUpdated);
  };

const handleLike = (id) => {
  const moviesCopy = [...movies];
  const moviesLikesCopy = moviesCopy
    .filter((movie) => movie.id === id)
    .map(movie => {

      if (activeBtn === 'none') {
        movie.likes += 1;
        setActiveBtn('like');
        // return; 
      }
      
      if (activeBtn === 'like') {
        movie.likes += -1;
        setActiveBtn('none');
        // return;
      }
      
      if (activeBtn === 'dislike') {
      movie.likes += 1;
      movie.dislikes += - 1;
      setActiveBtn('like');
    }
    return moviesLikesCopy
  })
  setMovies(moviesLikesCopy)
};

const handleDislike = (id) => {
  const moviesCopy = [...movies];
  const moviesDislikesCopy = moviesCopy
    .filter((movie) => movie.id === id)
    .map((movie) => {
        if (activeBtn === 'none') {
          movie.dislikes += 1;
          setActiveBtn('dislike');
        }

        if (activeBtn === 'dislike') {
          movie.dislikes += -1;
          setActiveBtn('none');
        }

        if (activeBtn === 'like') {
          movie.dislikes += 1;
          movie.likes += -1;
          setActiveBtn('dislike');
        }

      return moviesDislikesCopy;

    });
setMovies(moviesDislikesCopy)
};;

  return (
    <MoviesStyled>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          movieData={movie}
          handleDelete={handleDelete}
          handleLike={handleLike}
          handleDislike={handleDislike}
          activeBtn={activeBtn}
        />
      ))}
    </MoviesStyled>
  );
}

const MoviesStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`;