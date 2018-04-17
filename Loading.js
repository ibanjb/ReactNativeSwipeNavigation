import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

const imgBackground = require('../assets/background.gif');
const imgMove = require('../assets/4.png');

export default class Loading extends React.Component {

    constructor(props) {        
        super(props);        
        this.state = {
            isLoading: true
        };        
    }

    static navigationOptions = {
        header: null,
    };

    changeStatus = () => {
        const loading = !this.state.isLoading;
        const { navigate } = this.props.navigation;
        this.setState({ isLoading: loading});
        navigate('CardSwiperScreen');
    }

    render() {
        //const isLoading = this.state.isLoading ? true : false;  // meanwhile the back button on Android can go back to loading screen from cardswiper screen, disable the fadeOut
        const isLoading = true;
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground source={imgBackground} style={{ flex: 1}}>
                    {/* loading center text */}
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
                    </View>
                    {/* footer */}
                    <TouchableOpacity onPress={this.changeStatus}>
                        <Animatable.View 
                        animation={isLoading ? 'slideInUp' : 'fadeOutDown' } iterationCount={1}
                        style={{height: 70, backgroundColor: 'white', justifyContent: 'center', alignItems: 'flex-start', borderTopColor: 'tomato', borderWidth: 1, paddingHorizontal: 25 }}>
                        
                            <Text style={{ color: 'tomato', fontWeight: 'bold'}}>
                                Retrieving data from server ...
                            </Text>                        
                        </Animatable.View>
                    </TouchableOpacity>
                </ImageBackground>       
            </View>
        );
    }
}

