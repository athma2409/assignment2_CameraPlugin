import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions, Button } from 'react-native';
import TopNav from '../Components/TopNav';
import Camera from 'react-native-camera';


export default class Home extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = ({ navigation }) => {
        navigation.title = "Home"

        return {
            header: <TopNav navigation={navigation} />

        }
    }
    
    takePicture() {
        this.camera
          .capture()
          .then((data) => console.log(data))
          .catch(err => console.error(err));
      }

    render() {
        return (
            <View >
                <Camera
                    ref={cam => { this.camera = cam }}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}
                >
                    <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
                        [CAPTURE]
                     </Text>
                </Camera>

            </View>

        )
    }
}
const styles = StyleSheet.create({

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    

});
