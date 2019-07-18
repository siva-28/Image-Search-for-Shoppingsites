import React,{ Component } from 'react'
import {View,TextInput,Text,Image,Button} from 'react-native'
import  ImagePicker from 'react-native-image-picker';
import { FlatList } from 'react-native-gesture-handler';

class pickimage extends Component {
    constructor(){
        super()
        this.state={
            imageSource:null,
            dataSource:[]
        }
    }
    renderItem =({item})=>{
        return (<View style ={{flex:1,flexDirection:'row'}}>
            <Image style={{width: 100,height:100}}
                source={{ uri: item.url }}
            />
           
        </View>)
         
    }
    choose =()=>{
        console.log("test");
        const options = {noData:true};
        ImagePicker.launchImageLibrary(options,response =>{
            console.log("response",response);
            if(response.didCancel){
                console.log("cancelled");
            }
            else if(response.error){
                console.log("error",response.error);               
            }
            else{
                const data = new FormData();
                data.append('fileData', {
                    uri : response.uri,
                    type: response.type,
                    name: response.fileName
                });
                const config = {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'multipart/form-data',
                    },
                    body:data,
                };
                fetch("http://192.168.43.62:8000/api/photo", config).then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        dataSource :responseJson
                    })
                })
                .catch((err)=>{console.log(err)});
            }
        });
    };
    render() {
    return(
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}> 
        <Button
            title="choose photo"
            onPress={this.choose}
        />
        <FlatList
      data={this.state.dataSource}
      renderItem={this.renderItem}
      />
    </View>
    )}
}
        /*.then((checkStatusAndGetJSONResponse)=>{       
            console.log(checkStatusAndGetJSONResponse);
        })*/
export default pickimage 
