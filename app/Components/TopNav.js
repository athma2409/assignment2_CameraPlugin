import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon, Header } from 'react-native-elements';

export default class TopNav extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: this.props.navigation.title, style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff', }}
            />

        )
    }
}