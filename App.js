import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckSwiper from './screens/DeckSwiper';

export default class App extends React.Component {

  render() {
    return (
      <View style={{flex: 1}}>
       <DeckSwiper />
      </View>
    );
  }
}

