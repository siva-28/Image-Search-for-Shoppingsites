import {StyleSheet} from 'react-native'
export default StyleSheet.create({
    heading:{
        fontSize:25,
        textAlign:'center'

    },
    input:{
        backgroundColor:'rgba(255,255,255,0.2)',
        height:40,
        marginBottom:20,
        color:'#FFFF',
        marginHorizontal:20,
        justifyContent:'center',
        borderRadius: 25,
        padding:12,
        underlineColorAndroid:"transparent"
   
    },
    parent:{
        flex:1,
        justifyContent:'center'
    },
    container:{
        flex:1,
        backgroundColor:'#65ACEA',
        justifyContent:'center'
    },
        Buttoncontainer:{
        backgroundColor:'#2980b9',
        width:'30%',
        marginHorizontal:80,
        marginVertical:20,
        borderRadius: 25,
        padding:10,
        //flex: 1,
        //flexDirection: 'row',
        //justifyContent: 'space-between'   
    },
    Buttontext:{
        textAlign:'center',
        color:'#FFFF'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center', 
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000', 
        padding: 10, 
        margin: 40
    }

})