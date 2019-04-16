import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TopNav from '../Components/TopNav';


export default class Cart extends Component {
    static navigationOptions = ({ navigation }) => {
        navigation.title = "Cart"
        return {
            header: <TopNav navigation={navigation} />
        }
    }
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View >
                <Text> Iam Cart</Text>
            </View>

        )
    }
}