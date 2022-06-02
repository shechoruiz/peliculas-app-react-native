import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBNowPlaying} from '../interfaces/movieInterface';

const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesEmission, setMoviesEmission] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    const peliculas = resp.data.results;
    setMoviesEmission(peliculas);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    moviesEmission,
    isLoading,
  };
};

export default useMovies;
