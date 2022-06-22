import React from 'react';
import {ActivityIndicator, Dimensions, ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import MoviePoster from '../components/MoviePoster';
import useMovies from '../hooks/useMovies';
import HorizontalSlider from '../components/HorizontalSlider';
import {StyleSheet} from 'react-native';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={styles.loadingIndicator}>
        <ActivityIndicator color="red" size={40} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top}}>
        {/* Carousel principal */}
        <View style={styles.containerCarousel}>
          <Carousel
            data={nowPlaying}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>

        {/* Peliculas populares */}
        <HorizontalSlider title="Now Playing" movies={nowPlaying} />
        <HorizontalSlider title="Popular" movies={popular} />
        <HorizontalSlider title="Top Rated" movies={topRated} />
        <HorizontalSlider title="Up Coming" movies={upcoming} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  containerCarousel: {
    height: 440,
  },
});

export default HomeScreen;
