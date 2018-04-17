import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardSwiper from './screens/CardSwiper';
import Loading from './screens/Loading';
import { StackNavigator } from 'react-navigation';

const AppStackNavigator = StackNavigator({
  LoadingScreen: { screen: Loading }, 
  CardSwiperScreen: { screen: CardSwiper, 
                      navigationOptions: {
                        header: false,
                    }}
});

console.disableYellowBox = true;

export default class App extends React.Component {

  render() {
    return (
      <View style={{flex: 1}}>
       <AppStackNavigator />
      </View>
    );
  }
}

