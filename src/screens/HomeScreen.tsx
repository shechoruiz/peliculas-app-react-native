import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import movieDB from '../api/movieDB';

const HomeScreen = () => {
  useEffect(() => {
    movieDB
      .get('/now_playing')
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
