import React from 'react';
import {Image, View} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {StyleSheet} from 'react-native';

interface Props {
  movie: Movie;
}

const MoviePoster = ({movie}: Props) => {
  const uri = `http://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 420,
  },
  imageContainer: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});

export default MoviePoster;
