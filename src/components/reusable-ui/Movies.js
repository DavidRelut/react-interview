import { useState } from 'react';
import Movie from './Movie';

const moviesStatic = [
  {
    id: '1',
    title: 'Oceans 8',
    category: 'Comedy',
    likes: 4,
    dislikes: 1,
  },
  {
    id: '2',
    title: 'Midnight Sun',
    category: 'Comedy',
    likes: 2,
    dislikes: 0,
  },
];

export default function Movies() {

  const [movies, setMovies] = useState(moviesStatic);

  const handleDelete = (id) => {
    const moviesCopy = [...movies];

    const moviesCopyUpdated = moviesCopy.filter(
      (movie) => movie.id !== id,
    );

    setMovies(moviesCopyUpdated);
  };

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Movie movieData={movie} handleDelete={handleDelete}/>
        </div>
      ))}
    </div>
  );
}
