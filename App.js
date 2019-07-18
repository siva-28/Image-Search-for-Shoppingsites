/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {DrawerNavigator,createAppContainer,DrawerItems} from 'react-navigation';
import Login from './android/app/components/Login';
import Dashboard from './android/app/components/Dashboard';
import Home from './android/app/components/Home';
import Signup from './android/app/components/Signup';
import Camera from './android/app/components/Camera';
import Gallery from './android/app/components/Gallery';
import Pickimage from './android/app/components/Pickimage'
import Listview from './android/app/components/Listview'
import Flat from './android/app/components/Flat'
//import View from './android/app/components/View'
import {View} from 'react-native';
//import ListViewDemo from './android/app/components/View';
console.disableYellowBox = true;
class App extends Component {
  
    render() {
    return(
    <AppStack/>
    )
  }
}
const AppStack = DrawerNavigator(
{

  Dashboard:{screen:Home},
  Login:{screen:Login},
  MyCart:{screen:Dashboard},
  Signup:{screen:Signup},
  Upload:{screen:Camera},
  Gallery:{screen:Gallery},
  Flat:{screen:Flat},
  Pickimage:{screen:Pickimage},
  Listview:{screen:Listview}
},
{ //drawerBackgroundColor:'#F7EAF1',
  initialRouteName: 'Login',
  }
);
export default AppStack;
/*const app = createStackNavigator({
  home:Home,
  dashboard:Dashboard
});
export default createAppContainer(app);*/