import React, { Component } from 'react';

import {
    Image,
    View,
    Text,
    Dimensions,
    AsyncStorage,
    StyleSheet,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import {Button } from 'native-base';
import SwitchSelector from 'react-native-switch-selector';


import { Actions } from 'react-native-router-flux';
import Header from "../Common/Header"
import COLORS from '../../Constants/Colors';
const { width, height } = Dimensions.get('window');
import Colors from "../../Constants/Colors"

var radio_props = [
    {label: 'param1', value: 0 },
    {label: 'param2', value: 1 },
    {label: 'param3', value: 2 },
  ];
  
  const options = [
    { label: 'YES', value: 'YES' },
    { label: 'NO',  value: 'NO' }
  ];

export default class PregnancyAcceptance extends Component {

    constructor() {
        super();
        this.state = {
           selectedPregnancyTab:"",
           isPregnant:""
        };
    }

  componentWillMount() {
  }


  isPregnancy(value){
      this.setState({isPregnant:value})
      
  }

 render() {

    if(this.state.isPregnant=="YES"){
        alert(this.state.isPregnant)
    }

    if(this.state.isPregnant=="NO"){
    alert(this.state.isPregnant)
    }
          return (
            <View style ={{flex:1}}> 
            <Header headerText={"SERVICE PREFERENCES"}/>
            <View style={{flex:1,backgroundColor:COLORS.BACKGROUND_COLOR_GENERAL}}>
            <View style={{marginTop:100,justifyContent:"center",alignItems:"center"}}> 
            <Image source={require('../../Assets/pregnant.png')}/> 
            </View>
            <Text style={{margin:20,textAlign:"center",fontSize:20,fontFamily: 'Roboto'}}>ARE YOU PREGNANT</Text>

          


 <View style={{margin:20}}>  
 <SwitchSelector options={options} initial={0} backgroundColor="white" activeColor="#F6EEEB" buttonColor="#F6EEEB" selectedColor="black" onPress={value => this.isPregnancy(value)} />
  </View>
             </View>

              </View>
          
         
        );
    }

}


const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F8F8F8',
         justifyContent: 'center',
        //   alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
  
      }

  });