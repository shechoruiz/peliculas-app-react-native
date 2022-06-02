import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import useMovies from '../hooks/useMovies';

const HomeScreen = () => {
  const {moviesEmission, isLoading} = useMovies();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={40} />
      </View>
    );
  }
  console.log(moviesEmission[1]?.title);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
