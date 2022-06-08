import React from 'react';
import {ActivityIndicator, Dimensions, ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import MoviePoster from '../components/MoviePoster';
import useMovies from '../hooks/useMovies';
import HorizontalSlider from '../components/HorizontalSlider';

const {width: windowWidth} = Dimensions.get('window');

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
    <ScrollView>
      <View style={{marginTop: top}}>
        {/* Carousel principal */}
        <View style={{height: 440}}>
          <Carousel
            data={moviesEmission}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>

        {/* Peliculas populares */}
        <HorizontalSlider title="En cine" movies={moviesEmission} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
