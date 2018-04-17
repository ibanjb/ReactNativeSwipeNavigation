    import React from 'react';
    import { StyleSheet, Text, View } from 'react-native';

    export default class Home extends React.Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
                    <Text>Home screen </Text>
                </View>
            </View>
        );
    }
}