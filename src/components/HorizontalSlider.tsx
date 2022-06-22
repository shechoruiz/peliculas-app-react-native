import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import MoviePoster from './MoviePoster';
import {StyleSheet} from 'react-native';
interface Props {
  title?: string;
  movies: Movie[];
}

const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View style={title ? styles.heightSlider1 : styles.heightSlider2}>
      {title && <Text style={styles.titleSlider}>{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} height={200} width={140} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleSlider: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  heightSlider1: {
    height: 260,
  },
  heightSlider2: {
    height: 220,
  },
});

export default HorizontalSlider;
