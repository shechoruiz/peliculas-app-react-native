import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBMoviesResponse} from '../interfaces/movieInterface';

const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesEmission, setMoviesEmission] = useState<Movie[]>([]);
  const [moviesPopular, setMoviesPopular] = useState<Movie[]>([]);

  const getMovies = async () => {
    const respNowPlaying = await movieDB.get<MovieDBMoviesResponse>(
      '/now_playing',
    );
    const respPopular = await movieDB.get<MovieDBMoviesResponse>('/popular');
    const peliculas = respNowPlaying.data.results;
    const populares = respPopular.data.results;
    setMoviesEmission(peliculas);
    setMoviesPopular(populares);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    moviesEmission,
    moviesPopular,
    isLoading,
  };
};

export default useMovies;
