import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import MoviePoster from '../components/MoviePoster';
import useMovies from '../hooks/useMovies';

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
        <View style={{backgroundColor: 'red', height: 260}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Populares</Text>
          <FlatList
            data={moviesEmission}
            renderItem={({item}: any) => (
              <MoviePoster movie={item} height={200} width={140} />
            )}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
