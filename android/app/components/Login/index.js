import React,{ Component } from 'react'
import {KeyboardAvoidingView,AsyncStorage,View,TextInput,Text,Alert,TouchableOpacity} from 'react-native'
import styles from './styles'
class Login extends Component
{ constructor(props){
    super(props);
    this.state={
        username:'',
        password:'',
    }

   // state = {_id:"",passwd:"",email:""}
    state = {username:"",password:""}
   // static navigationOptions={header:null
   //Signup()
    //{
      //  fetch()
//this.props.navigation.navigate('Signup')
   // }
   /* checklogin = async () => {
            fetch('http://192.168.43.35:3000/api/usermodels',{
                  method: 'post',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    "provider": "username",
                    "data": {
                        "_id":   this.state._id,
                        "passwd": this.state.passwd,
                        "email": this.state.email
                    },
                  
                }).then((response) => response.json())
                .then((res) => {
              if(typeof(res.message) != "undefined"){
               Alert.alert("Error", "Error: "+ res.message);
              }
              else{
                //this.setState({ auth_token: res.auth_token });
                Alert.alert("Welcome", " You have succesfully logged in");
                }
             }).catch((error) => {
                 console.error(error);
                });*/
    }
    render()
    {
        const {Buttoncontainer,container,heading,input,parent,Buttontext}=styles
        return(
                <View style={container}>
                    <Text style={{textAlign:'center',fontSize:30,marginBottom:10}}>LOGIN</Text>
                    <TextInput underlineColorAndroid="transparent" style={input} placeholder = "Username/E-mail" onChangeText={text => this.setState({username:text})}/>
                    <TextInput underlineColorAndroid="transparent" style={input} placeholder = "Password" secureTextEntry={true} onChangeText={text => this.setState({password:text})}/>  
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                    <TouchableOpacity style={Buttoncontainer} >
                    <Text style={Buttontext}>LOGIN</Text>
                        </TouchableOpacity>
                    <TouchableOpacity style={Buttoncontainer} ><Text style={Buttontext}>SIGNUP</Text>
                        </TouchableOpacity>
                </View></View>
            )
    }

}
export default Login
/*<TouchableOpacity style={Buttoncontainer} onPress={_=> this.checklogin()}>
                    <Text style={Buttontext}>LOGIN</Text>onPress={_=> this.props.navigation.navigate('Signup')}
                        </TouchableOpacity>onPress={_=> this.checklogin()
                    <TouchableOpacity style={Buttoncontainer}><Text style={Buttontext}>SIGNUP</Text>
                        </TouchableOpacity>props.navigation.navigate('Signup')*/