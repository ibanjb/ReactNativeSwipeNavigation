import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Animated, PanResponder } from 'react-native';

const ARTICLES = [
{id: '1', uri: require('../assets/1.png')},
{id: '2', uri: require('../assets/2.png')}, 
{id: '3', uri: require('../assets/3.png')}, 
{id: '4', uri: require('../assets/4.png')}, 
{id: '5', uri: require('../assets/5.png')} 
];

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class DeckSwiper extends React.Component {

  constructor(props) {
    super(props);
    this.position = new Animated.ValueXY();
    this.swipedCardPosition = new Animated.ValueXY({ x: 0, y: -SCREEN_HEIGHT});
    this.state = {
      currentIndex: 0
    };
  }

  componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dy > 0 && (this.state.currentIndex > 0)) {
          this.swipedCardPosition.setValue({ x:0, y: -SCREEN_HEIGHT + gestureState.dy});
        } else {
          this.position.setValue({ y: gestureState.dy});
        }        
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (this.state.currentIndex > 0 && gestureState.dy > 50 && gestureState.vy > 0.7) {
          Animated.timing(this.swipedCardPosition, {
            toValue: ({ x: 0, y: 0 }),
            duration: 400
          }).start( () => {
            this.setState({ currentIndex: this.state.currentIndex - 1});
            this.swipedCardPosition.setValue({ x: 0, y: -SCREEN_HEIGHT });
          });
        } else if (-gestureState.dy > 50 && -gestureState.vy > 0.7) {
          Animated.timing(this.position, {
            toValue: ({ x: 0, y: -SCREEN_HEIGHT }),
            duration: 400
          }).start( () => {
            this.setState({ currentIndex: this.state.currentIndex + 1});
            this.position.setValue({ x: 0, y: 0 });
          });
        } else {
          Animated.parallel([
            Animated.spring(this.position, {
              toValue: ({ x: 0, y: 0 })
            }),
            Animated.spring(this.swipedCardPosition, {
              toValue: ({ x: 0, y: -SCREEN_HEIGHT })
            })
          ]).start();
        }
      }
    });
  }

  renderPreviousCardWithPanResponder = (item, i) => {
    let imageBackground = 'tomato';    
    return(        
      <Animated.View key={item.id} style={this.swipedCardPosition.getLayout()} {...this.PanResponder.panHandlers} >
        <View key={item.id} style={{ flex: 1, position: 'absolute', height: SCREEN_HEIGHT, width: SCREEN_WIDTH, backgroundColor: 'white' }}>
          <View style={{flex: 2}}>
            <Image source={ARTICLES[i].uri} style={{ flex: 1, height: null, width: null, resizeMode: 'center', backgroundColor: imageBackground}}>              
            </Image>
          </View>
          <View style={{flex: 3}}>
            <Text>slide id: {item.id}</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae enim feugiat, fermentum dolor a, lobortis lorem. Sed sed bibendum ligula. Praesent eu pellentesque leo. Curabitur fermentum dolor non tellus mollis, nec tristique nisl mattis. Proin euismod at tortor sit amet fringilla. Donec massa metus, euismod eu vulputate at, vulputate sit amet purus. Phasellus ipsum felis, luctus convallis tempus at, euismod sed quam. Mauris sodales sed turpis fermentum ultricies. Vivamus tempus vel velit ut luctus. Sed velit diam, pretium eget neque id, fermentum feugiat nibh. Pellentesque lobortis purus a est condimentum sagittis.
            </Text>
          </View>
          </View>
      </Animated.View>
    );
  }

  renderCardWithPanResponder = (item, i) => {
    let imageBackground = 'pink';
    return(        
      <Animated.View key={item.id} style={this.position.getLayout()} {...this.PanResponder.panHandlers} >
        <View key={item.id} style={{ flex: 1, position: 'absolute', height: SCREEN_HEIGHT, width: SCREEN_WIDTH, backgroundColor: 'white' }}>
          <View style={{flex: 2}}>
            <Image source={ARTICLES[i].uri} style={{ flex: 1, height: null, width: null, resizeMode: 'center', backgroundColor: imageBackground}}>              
            </Image>
          </View>
          <View style={{flex: 3}}>
            <Text>slide id: {item.id}</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae enim feugiat, fermentum dolor a, lobortis lorem. Sed sed bibendum ligula. Praesent eu pellentesque leo. Curabitur fermentum dolor non tellus mollis, nec tristique nisl mattis. Proin euismod at tortor sit amet fringilla. Donec massa metus, euismod eu vulputate at, vulputate sit amet purus. Phasellus ipsum felis, luctus convallis tempus at, euismod sed quam. Mauris sodales sed turpis fermentum ultricies. Vivamus tempus vel velit ut luctus. Sed velit diam, pretium eget neque id, fermentum feugiat nibh. Pellentesque lobortis purus a est condimentum sagittis.
            </Text>
          </View>
          </View>
      </Animated.View>
    );
  }

  renderCardWithoutPanResponder = (item, i) => {
    return(        
      <Animated.View key={item.id} >
        <View key={item.id} style={{ flex: 1, position: 'absolute', height: SCREEN_HEIGHT, width: SCREEN_WIDTH, backgroundColor: 'white' }}>
          <View style={{flex: 2}}>
            <Image source={ARTICLES[i].uri} style={{ flex: 1, height: null, width: null, resizeMode: 'center'}}>              
            </Image>
          </View>
          <View style={{flex: 3}}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae enim feugiat, fermentum dolor a, lobortis lorem. Sed sed bibendum ligula. Praesent eu pellentesque leo. Curabitur fermentum dolor non tellus mollis, nec tristique nisl mattis. Proin euismod at tortor sit amet fringilla. Donec massa metus, euismod eu vulputate at, vulputate sit amet purus. Phasellus ipsum felis, luctus convallis tempus at, euismod sed quam. Mauris sodales sed turpis fermentum ultricies. Vivamus tempus vel velit ut luctus. Sed velit diam, pretium eget neque id, fermentum feugiat nibh. Pellentesque lobortis purus a est condimentum sagittis.
            </Text>
          </View>
          </View>
      </Animated.View>
    );
  }
  renderArticles = () => {
    return ARTICLES.map((item, i) => {            
        if (i == this.state.currentIndex -1) {
          return this.renderPreviousCardWithPanResponder(item, i);
        } else if (i < this.state.currentIndex) {
          return null;
        } else if (i == this.state.currentIndex) {
          return this.renderCardWithPanResponder(item, i);
        } else {
          return this.renderCardWithoutPanResponder(item, i);
        }
      }).reverse()
  }

  render() {
    return (
      <View style={{flex: 1}}>
      {this.renderArticles()}
      </View>
    );
  }
}

