import React,{ Component } from 'react'
import {AsyncStorage,View,TextInput,Text,TouchableOpacity} from 'react-native'
import styles from './styles'
class Signup extends Component {
    state = {_id:"",passwd:"",email:""}
    Signupfun = async () =>
    {  
        fetch('http://192.168.43.35:3000/api/usermodels', {
        
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "_id":   this.state._id,
                "passwd": this.state.passwd,
                "email": this.state.email
            }),
        }).then((response) => response.json())
        .then((responseJson) => {
       console.log('success!')
        })
        .catch((error) => {
          console.log(error);
        });
    }
    render() {

    const {container,input,Buttoncontainer,Buttontext}=styles;
    return(        
      <View style={container}>
                    <Text style={{textAlign:'center',fontSize:30,marginBottom:10}}>Sign Up</Text>
                    
                    <TextInput underlineColorAndroid="transparent" style={input} placeholder = "E-mail" onChangeText={text => this.setState({email:text})}/>                   
                    <TextInput underlineColorAndroid="transparent" style={input} placeholder = "Username" onChangeText={text => this.setState({_id:text})}/>
                    <TextInput underlineColorAndroid="transparent" style={input} placeholder = "Password" secureTextEntry={true} onChangeText={text => this.setState({passwd:text})}/>  
                    
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                        <TouchableOpacity style={Buttoncontainer} onPress={_=> this.Signupfun()}>
                            <Text style={Buttontext}>SignUp</Text>
                        </TouchableOpacity>
                    </View>
      </View>
    )
  }
}

export default Signup