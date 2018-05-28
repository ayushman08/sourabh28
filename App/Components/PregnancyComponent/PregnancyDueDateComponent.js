import React, { Component } from 'react';

import {
    Image,
    View,
    Text,
    AsyncStorage,
    StyleSheet,
    ImageBackground,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';
import Header from "../Common/Header"
import DatePicker from 'react-native-datepicker';
import { Actions } from 'react-native-router-flux';
import {Button } from 'native-base';
const { width, height } = Dimensions.get('window');


export default class PregnancyDueDateComponent extends Component {

    constructor() {
        super();
        this.state = {
            date:"2016-05-15"
         };
    }

  componentWillMount() {
  
    }

    goBack(){
    Actions.pop();
    }

    render() {
        return (
       <View style ={{flex:1}}> 
       <Header headerText={"SERVICE PREFERENCES"}/>
       <Text style={{textAlign:"center",fontSize:18,marginTop:50,marginBottom:30}}>WHEN IS YOUR DUE DATE ? </Text>
        
       <View style={{justifyContent:"center",alignItems:"center",marginTop:20,marginBottom:50}}>
       <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          }
          ,
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
      </View>
      <Text style={{textAlign:"center",fontSize:18}}>WHEN YOU WANT TO RECEIVE YOUR 1ST BOX ?</Text>

       <View style={{justifyContent:"center",alignItems:"center",marginTop:20,marginBottom:50}}>
       <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          }
          ,
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
      </View>

            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:40}}>
             <Button rounded  style={{width:width/1.6,justifyContent:"center",margin:15,alignItems:"center",backgroundColor:"#84432d"}} onPress={()=>{null}}>
             <Text style={{color:"white",textAlign:"center",fontWeight:"400", fontSize: 16}}>NEXT</Text>
             </Button>
             </View>
             
             <TouchableWithoutFeedback onPress={this.goBack}>
             <View>
             <Text style={{textAlign:"center"}}>Home</Text></View>
             </TouchableWithoutFeedback>
         



            </View>
          
         
        );
    }

}


const styles = StyleSheet.create({


  });