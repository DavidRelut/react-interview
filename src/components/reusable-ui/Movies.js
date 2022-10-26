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

  return (
    <div>
      {movies.map((movie) => (
        <Movie movieData={movie} />
      ))}
    </div>
  );
}
