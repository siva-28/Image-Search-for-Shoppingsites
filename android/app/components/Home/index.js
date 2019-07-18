import React,{ Component } from 'react'
import {View,Text} from 'react-native'
import {Icon,SearchBar}from 'react-native-elements'
//import Camera from 'react-native-camera'
//import styles from './styles'
//import Icon from 'react-native-vector-icons/FontAwesome'

class Home extends Component {
 // takePicture() { 
   // this.camera.capture().then((data) => console.log(data)) .catch(err => console.error(err)); }

    render() {
    return(
       
    <View style={{flex:1,backgroundColor:'#D5F2F9'}}>
      <SearchBar
          Icon={<Icon name='camera'/>}
          clearIcon={{ color: 'red' }}
          round
          searchIcon={{ color:'red',size: 10 }}
          placeholder='Search...' />
        
    </View>
    )
  }
}
//<Camera ref={cam => { this.camera = cam; }} style={styles.preview} aspect={Camera.constants.Aspect.fill}> <Text style={styles.capture} onPress={this.takePicture.bind(this)}> [CAPTURE] </Text></Camera>
        
export default Home