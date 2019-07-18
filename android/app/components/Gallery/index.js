import React,{ Component } from 'react'
import {View,Button,ScrollView} from 'react-native'
import {CameraRoll} from 'react-native'
import CameraRollPicker from 'react-native-camera-roll-picker';
import imagepicker from 'react-native-image-picker'

class Gallery extends Component 
{ state ={file:""}
  
  getselectedimages(image){
     if(image[0]){
       console.log("");
       file=image[0];
        const data = new FormData();

        data.append(
          "file",
          JSON.stringify({
            type: file.type,
            name: file.fileName,
            size: file.fileSize,
            data: file
          })
        );
      
        return fetch("http://192.168.43.62:8000/api/photo", {
          method: "POST",
          headers: {
            Accept: "application/json"
          },
          body: data
        });
      }
    
    }
    
 render() {
  return (
    <CameraRollPicker callback={this.getselectedimages}
    assetType='All'/>
  )
 }
  
}
export default Gallery

