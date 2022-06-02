import React from 'react';
import {Image, View} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {StyleSheet} from 'react-native';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

const MoviePoster = ({movie, height = 420, width = 300}: Props) => {
  const uri = `http://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View style={{width, height, marginHorizontal: 8}}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
