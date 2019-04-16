import React, {Component} from 'react';
import { View,Text} from 'react-native';
import TopNav from '../Components/TopNav';
import { Card,Button,Icon} from 'react-native-elements';



export default class Product extends Component{
    static navigationOptions = ({ navigation}) => {
        navigation.title="Products"
        return {
            header:<TopNav navigation={navigation} />
        }
    }
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Card
            title='HELLO WORLD'
            image={require('../../assets/images/images.jpeg')}>
            <Text style={{marginBottom: 10}}>
              The idea with React Native Elements is more about component structure than actual design.
            </Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW' />
          </Card> 
        )    
    }
}