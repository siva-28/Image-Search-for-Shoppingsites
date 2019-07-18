import React, { Component } from 'react';
import {  StyleSheet, Text, View, Button, TouchableOpacity, TextInput ,FlatList,ActivityIndicator, ListView,Platform} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import DateTimePicker from 'react-native-modal-datetime-picker';
//import { AppRegistry, StyleSheet, ActivityIndicator, ListView, Text, View, Alert, Platform, TouchableOpacity} from 'react-native';

//import styles from './android/app/components/styles'
import moment from 'moment'
class App extends Component {

  static navigationOptions = {
    title: 'Welcome',
  };
  onpress = () => {
    this.props.navigation.navigate('next')
  }

  render() {
    const { Buttoncontainer, container, heading, input, parent, Buttontext,T } = styles

    return (
      <View style={{ backgroundColor: '#e6f7ff', flex: 1, alignItems: "center", justifyContent: 'center' }}>
        <TouchableOpacity style={Touch}
          onPress={this.onpress}
        >
          <Text style={Buttontext}>GROUNDS</Text>
        </TouchableOpacity>
      </View>

    );
  }
}


class next extends Component {
  static navigationOptions = {
    title: 'Grounds',
  };
  onpress1 = () => {
    this.props.navigation.navigate('cricket')
  }
  onpress2 = () => {
    this.props.navigation.navigate('football')
  }
  onpress3 = () => {
    this.props.navigation.navigate('tennis')
  }
  onpress4 = () => {
    this.props.navigation.navigate('basketball')
  }
  onpress5 = () => {
    this.props.navigation.navigate('volley')
  }
  onpress6 = () => {
    this.props.navigation.navigate('hockey')
  }
  render() {
    const { Buttoncontainer, container, heading, input, parent, Buttontext ,Touch} = styles

    return (
      <View style={{ flex: 1, backgroundColor: '#e6f7ff', alignItems: "center" }}>
        <TouchableOpacity style={Touch}
          onPress={this.onpress1}
        >
          <Text style={Buttontext}>cricket</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Touch}
          onPress={this.onpress2}
        >
          <Text style={Buttontext}>football</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Touch}
          onPress={this.onpress3}
        >
          <Text style={Buttontext}>Tennis</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Touch}
          onPress={this.onpress4}
        >
          <Text style={Buttontext}>BasketBall</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Touch}
          onPress={this.onpress5}
        >
          <Text style={Buttontext}>VolleyBall</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Touch}
          onPress={this.onpress6}
        >
          <Text style={Buttontext}>Hockey</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class cricket extends Component {
  constructor() {
    super()
    this.state = {
      isVisible: false,
      chosen: '',
      roll: '',
      hours: ''
    }
  }

  showpick = () => {
    this.setState({
      isVisible: true
    })
  }

  handlePicker = (datetime) => {
    this.setState({
      isVisible: false,
      chosen: moment(datetime).format('MMMM, Do YYYY HH:mm')
    })
  }

  hidePicker = () => {
    this.setState({
      isVisible: false,

    })
  }
  onpress = () => {
     this.props.navigation.navigate('Flat');
  }
book =()=>{
  console.log("booking..");
 /* var data = {
    "game":"cricket",
    "roll": this.state.roll,
    "time": this.state.chosen,
    "hour": this.state.hours,   
  }*/
 // console.log(data);
  
  fetch("http://172.20.10.5:3000/api/grounds", {
    method: "POST",  
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
  },   
    body: JSON.stringify({"game":"Cricket",
    "roll": this.state.roll,
    "time": this.state.chosen,
    "hour": this.state.hours  })
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
    });
}


  static navigationOptions = {
    title: 'Cricket',
  };

  render() {
    const { Buttoncontainer, container, heading, input, parent, Buttontext ,Touch} = styles

    return (
      <View style={{ backgroundColor: '#e6f7ff', flex: 1, alignItems: "center", justifyContent: 'center' }}>
        <Text style={{ color: 'red', fontSize: 20 }}>{this.state.chosen}</Text>
        <Text style={{ color: 'red', fontSize: 20 }}>{this.state.roll}</Text>
        <Text style={{ color: 'red', fontSize: 20 }}>{this.state.hours}</Text>

        <TextInput underlineColorAndroid="transparent" style={input}
          placeholder="Rollnumber"
          onChangeText={text => this.setState({ roll: text })} />
        <TextInput underlineColorAndroid="transparent" style={input}
          placeholder="Hoursofplay"
          onChangeText={text => this.setState({ hours: text })} />
        
        <TouchableOpacity style={Touch}
          onPress={this.showpick}
        >
          <Text style={Buttontext}>playtime</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Touch}
          onPress={this.book}
        >
          <Text style={Buttontext}>BOOK</Text>
        </TouchableOpacity>


        <TouchableOpacity style={Touch}
          onPress={this.onpress}
        >
          <Text style={Buttontext}>Status</Text>
        </TouchableOpacity>

        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          mode={'datetime'}
        />

      </View>

    );
  }
}
//-------------------------------------------------
class Flat extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }
   
  /*GetItem (student_name) {
   
  Alert.alert(student_name);
   
  }*/
   
   
  componentDidMount() {
   
    return fetch('http://172.20.10.5:3000/api/grounds')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
   
  ListViewItemSeparator = () => {
    return (
      <View
        style={{
   
          height: .5,
          width: "100%",
          backgroundColor: "#000",
   
        }}
      />
    );
  }
   
   
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
   //<TouchableOpacity onPress={this.GetItem.bind(this, rowData.student_name)} > </TouchableOpacity>
         
    return (
   
      <View style={styles.MainContainer}>
   
        <ListView
   
          dataSource={this.state.dataSource}
   
          renderSeparator= {this.ListViewItemSeparator}
   
          renderRow={(rowData) =>{if(rowData.game=="Cricket"){
   
         <View style={{flex:1, flexDirection: 'column'}} >              
           <Text style={styles.textViewContainer} >{'Roll Number : ' + rowData.roll}</Text>
   
           <Text style={styles.textViewContainer} >{'Time : ' + rowData.time}</Text>
   
           <Text style={styles.textViewContainer} >{'Hours of play : ' + rowData.hour}</Text>   
         </View>
   
          }}}
        />
   
      </View>
    );
  }
  }





class football extends Component {
  constructor() {
    super()
    this.state = {
      isVisible: false,
      chosen: ''
    }
  }

  showpick = () => {
    this.setState({
      isVisible: true
    })
  }

  handlePicker = (datetime) => {
    this.setState({
      isVisible: false,
      chosen: moment(datetime).format('MMMM, Do YYYY HH:mm')
    })
  }

  hidePicker = () => {
    this.setState({
      isVisible: false,

    })
  }
  static navigationOptions = {
    title: 'Football',
  };
  onpress = () => {
    //this.props.navigation.navigate('next')
  }

  render() {
    const { Buttoncontainer, container, heading, input, parent, Buttontext } = styles

    return (
      <View style={{ backgroundColor: '#e6f7ff', flex: 1, alignItems: "center", justifyContent: 'center' }}>
        <TouchableOpacity style={{
          backgroundColor: '#2980b9',
          width: '40%',
          marginHorizontal: 100,
          marginVertical: 20,
          borderRadius: 25,
          padding: 10,
        }}
          onPress={this.showpick}
        >
          <Text style={Buttontext}>Book</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor: '#2980b9',
          width: '40%',
          marginHorizontal: 100,
          marginVertical: 20,
          borderRadius: 25,
          padding: 10,
        }}
          onPress={this.onpress}
        >
          <Text style={Buttontext}>Status</Text>
        </TouchableOpacity>
        <Text style={{ color: 'red', fontSize: 20 }}>{this.state.chosen}</Text>
        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          mode={'datetime'}

        />
      </View>

    );
  }
}

class tennis extends Component {
  constructor() {
    super()
    this.state = {
      isVisible: false,
      chosen: ''
    }
  }

  showpick = () => {
    this.setState({
      isVisible: true
    })
  }

  handlePicker = (datetime) => {
    this.setState({
      isVisible: false,
      chosen: moment(datetime).format('MMMM, Do YYYY HH:mm')
    })
  }

  hidePicker = () => {
    this.setState({
      isVisible: false,

    })
  }
  static navigationOptions = {
    title: 'Tennis',
  };
  onpress = () => {
    //this.props.navigation.navigate('next')
  }

  render() {
    const { Buttoncontainer, container, heading, input, parent, Buttontext } = styles

    return (
      <View style={{ backgroundColor: '#e6f7ff', flex: 1, alignItems: "center", justifyContent: 'center' }}>
        <TouchableOpacity style={{
          backgroundColor: '#2980b9',
          width: '40%',
          marginHorizontal: 100,
          marginVertical: 20,
          borderRadius: 25,
          padding: 10,

        }}
          onPress={this.showpick}
        >
          <Text style={Buttontext}>Book</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor: '#2980b9',
          width: '40%',
          marginHorizontal: 100,
          marginVertical: 20,
          borderRadius: 25,
          padding: 10,
        }}
          onPress={this.onpress}
        >
          <Text style={Buttontext}>Status</Text>
        </TouchableOpacity>
        <Text style={{ color: 'red', fontSize: 20 }}>{this.state.chosen}</Text>
        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          mode={'datetime'}

        />
      </View>

    );
  }
}

class basketball extends Component {
  constructor() {
    super()
    this.state = {
      isVisible: false,
      chosen: ''
    }
  }

  showpick = () => {
    this.setState({
      isVisible: true
    })
  }

  handlePicker = (datetime) => {
    this.setState({
      isVisible: false,
      chosen: moment(datetime).format('MMMM, Do YYYY HH:mm')
    })
  }

  hidePicker = () => {
    this.setState({
      isVisible: false,

    })
  }
  static navigationOptions = {
    title: 'Basketball',
  };
  onpress = () => {
    //this.props.navigation.navigate('next')
  }
  render() {
    const { Buttoncontainer, container, heading, input, parent, Buttontext } = styles

    return (
      <View style={{ backgroundColor: '#e6f7ff', flex: 1, alignItems: "center", justifyContent: 'center' }}>
        <TouchableOpacity style={{
          backgroundColor: '#2980b9',
          width: '40%',
          marginHorizontal: 100,
          marginVertical: 20,
          borderRadius: 25,
          padding: 10,

        }}
          onPress={this.showpick}
        >
          <Text style={Buttontext}>Book</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor: '#2980b9',
          width: '40%',
          marginHorizontal: 100,
          marginVertical: 20,
          borderRadius: 25,
          padding: 10,
        }}
          onPress={this.onpress}
        >
          <Text style={Buttontext}>Status</Text>
        </TouchableOpacity>
        <Text style={{ color: 'red', fontSize: 20 }}>{this.state.chosen}</Text>
        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          mode={'datetime'}

        />
      </View>

    );
  }
}
class volley extends Component {
  constructor() {
    super()
    this.state = {
      isVisible: false,
      chosen: ''
    }
  }

  showpick = () => {
    this.setState({
      isVisible: true
    })
  }

  handlePicker = (datetime) => {
    this.setState({
      isVisible: false,
      chosen: moment(datetime).format('MMMM, Do YYYY HH:mm')
    })
  }

  hidePicker = () => {
    this.setState({
      isVisible: false,

    })
  }
  static navigationOptions = {
    title: 'Volleyball',
  };
  onpress = () => {
    //this.props.navigation.navigate('next')
  }
  render() {
    const { Buttoncontainer, container, heading, input, parent, Buttontext } = styles
    return (
      <View style={{ backgroundColor: '#e6f7ff', flex: 1, alignItems: "center", justifyContent: 'center' }}>
        <TouchableOpacity style={{
          backgroundColor: '#2980b9',
          width: '40%',
          marginHorizontal: 100,
          marginVertical: 20,
          borderRadius: 25,
          padding: 10,

        }}
          onPress={this.showpick}
        >
          <Text style={Buttontext}>Book</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor: '#2980b9',
          width: '40%',
          marginHorizontal: 100,
          marginVertical: 20,
          borderRadius: 25,
          padding: 10,
        }}
          onPress={this.onpress}
        >
          <Text style={Buttontext}>Status</Text>
        </TouchableOpacity>
        <Text style={{ color: 'red', fontSize: 20 }}>{this.state.chosen}</Text>
        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          mode={'datetime'}
        />
      </View>

    );
  }
}
class hockey extends Component {
  constructor() {
    super()
    this.state = {
      isVisible: false,
      chosen: ''
    }
  }

  showpick = () => {
    this.setState({
      isVisible: true
    })
  }

  handlePicker = (datetime) => {
    this.setState({
      isVisible: false,
      chosen: moment(datetime).format('MMMM, Do YYYY HH:mm')
    })
  }

  hidePicker = () => {
    this.setState({
      isVisible: false,
    })
  }
  static navigationOptions = {
    title: 'Hockey',
  };
  onpress = () => {
    //this.props.navigation.navigate('next')
  }

  render() {
    const { Buttoncontainer, container, heading, input, parent, Buttontext } = styles

    return (
      <View style={{ backgroundColor: '#e6f7ff', flex: 1, alignItems: "center", justifyContent: 'center' }}>
        <TouchableOpacity style={{
          backgroundColor: '#2980b9',
          width: '40%',
          marginHorizontal: 100,
          marginVertical: 20,
          borderRadius: 25,
          padding: 10,

        }}
          onPress={this.showpick}
        >
          <Text style={Buttontext}>Book</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor: '#2980b9',
          width: '40%',
          marginHorizontal: 100,
          marginVertical: 20,
          borderRadius: 25,
          padding: 10,
        }}
          onPress={this.onpress}
        >
          <Text style={Buttontext}>Status</Text>
        </TouchableOpacity>
        <Text style={{ color: 'red', fontSize: 20 }}>{this.state.chosen}</Text>
        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          mode={'datetime'}

        />
      </View>

    );
  }
}
const MainNavigator = createStackNavigator({
  App: { screen: App },
  next: { screen: next },
  cricket: { screen: cricket },
  football: { screen: football },
  tennis: { screen: tennis },
  basketball: { screen: basketball },
  volley: { screen: volley },
  hockey: { screen: hockey },
  Flat:{screen:Flat}
});

const App1 = createAppContainer(MainNavigator);

const styles = StyleSheet.create({
  Touch:{
    backgroundColor: '#2980b9',
    width: '40%',
    marginHorizontal: 100,
    marginVertical: 20,
    borderRadius: 25,
    padding: 10,
  },
  MainContainer :{
 
    // Setting up View inside content in Vertically center.
    justifyContent: 'center',
    flex:1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#00BCD4',
    padding: 5,
     
    },
     
    textViewContainer: {
     
     textAlignVertical:'center', 
     padding:10,
     fontSize: 20,
     color: '#fff',
     
    },
  heading: {
    fontSize: 25,
    textAlign: 'center'

  },
  input: {
    /*backgroundColor: 'rgba(255,255,255,0.2)',
    height: 40,
    marginBottom: 20,
    color: '#FFFF',
    marginHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 25,
    padding: 12,*/
    backgroundColor: '#2980b9',
    width: '30%',
    marginHorizontal: 80,
    marginVertical: 20,
    borderRadius: 25,
    padding: 10
  },
  parent: {
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#65ACEA',
    justifyContent: 'center'
  },
  Buttoncontainer: {
    backgroundColor: '#2980b9',
    width: '30%',
    marginHorizontal: 80,
    marginVertical: 20,
    borderRadius: 25,
    padding: 10
  },
  Buttontext: {
    textAlign: 'center',
    color: '#FFFF'
  }
})

export default App1
