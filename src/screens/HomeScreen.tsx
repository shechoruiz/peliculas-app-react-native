import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MoviePoster from '../components/MoviePoster';
import useMovies from '../hooks/useMovies';

const HomeScreen = () => {
  const {moviesEmission, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={40} />
      </View>
    );
  }

  return (
    <View style={{marginTop: top}}>
      <MoviePoster movie={moviesEmission[0]} />
    </View>
  );
};

export default HomeScreen;
