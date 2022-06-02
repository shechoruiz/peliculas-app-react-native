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
    width: 200,
    height: 400,
  },
  imageContainer: {
    flex: 1,
    sshadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});

export default MoviePoster;
