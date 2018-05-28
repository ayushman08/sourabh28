import React, { Component } from 'react';

import {
    Image,
    View,
    Text,
    AsyncStorage,
    StyleSheet,
    ScrollView,
    ImageBackground,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';
import {Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Header from "../Common/Header"
import MaterialTextInput from 'react-native-material-textinput';
import Strings from '../../Constants/Strings';
import Colors from '../../Constants/Colors';


const { width, height } = Dimensions.get('window');

export default class BillingPaymentInformation extends Component {
     constructor() {
        super();
        this.state = {
            firstname:"",
            lastname:"",
            email:"",
            password:""
     };
    }

    
    goBack(){
    Actions.pop()
    }

    render() {
        return (
          <View style={{flex:1}}>
          <Header headerText={"BILLING INFORMATION"}/>
          <ScrollView style={{flex:1}}>
          <Text style={{textAlign:"center",fontSize:20,color:"black",fontWeight:"600",marginTop:50,marginBottom:30}}>BILLING INFORMATION
          </Text>
          <View style={{marginLeft:20,marginBottom:20}}>
          <Text style={{fontSize:20}}>Select your payment method</Text>
          </View>

            <View style={{flex:1,flexDirection:"row",justifyContent:"space-around"}}>
             <View style={styles.viewStyle}>
             <View style={{flexDirection:"column",margin:10,justifyContent:"center",alignItems:"center",width:60}}>
             <Image source={require('../../Assets/Creditcard_disel.png')}/>
             <Text style={{marginTop:5,fontSize:10}}>Credit Card</Text>
             </View>
             </View>

             <View style={styles.viewStyle}>
             <View style={{flexDirection:"column",margin:10,justifyContent:"center",alignItems:"center",width:60}}>
             <Image source={require('../../Assets/Paypal_disel.png')}/>
             <Text style={{marginTop:5,fontSize:10}}>Paypal</Text>
             </View>
             </View>

              <View style={styles.viewStyle}>
             <View style={{flexDirection:"column",margin:10,justifyContent:"center",alignItems:"center",width:60}}>
             <Image source={require('../../Assets/Apple_disel.png')}/>
             <Text style={{marginTop:5,fontSize:10}}>Apple Pay</Text>
             </View>
             </View>
        </View>


            <View  style={{flex:1,padding:20}}>
              <MaterialTextInput
                            label={Strings.CARD_HOLDER_NAME}
                            labelColor={Colors.LABEL_TEXT_COLOR}
                            activeColor={Colors.LABEL_TEXT_COLOR}
                            color={Colors.TEXT_COLOR}
                            fontSize={15}
                            labelActiveTop={-30}
                            underlineColor={Colors.TEXT_COLOR}
                            underlineActiveColor={Colors.TEXT_COLOR}
                            underlineHeight={0.7}
                            underlineActiveHeight={0.7}
                            autoCapitalize='none'
                            autoCorrect={false}
                            underlineColorAndroid='transparent'
                            returnKeyType='next'
                            onChangeText={null}
                            value={null}
                            onSubmitEditing={(event)=>{this.refs.lastname.focus()}}
                           
                        />
            </View>

             
            <View style={{paddingLeft:20,paddingRight:20,padding:20}}>
               
             <MaterialTextInput
                            label={Strings.CARD_NUMBER}
                            labelColor={Colors.LABEL_TEXT_COLOR}
                            activeColor={Colors.LABEL_TEXT_COLOR}
                            color={Colors.TEXT_COLOR}
                            fontSize={15}
                            labelActiveTop={-30}
                            underlineColor={Colors.TEXT_COLOR}
                            underlineActiveColor={Colors.TEXT_COLOR}
                            underlineHeight={0.7}
                            underlineActiveHeight={0.7}
                            autoCapitalize='none'
                            autoCorrect={false}
                            underlineColorAndroid='transparent'
                            returnKeyType='next'
                            onChangeText={null}
                            value={null}
                            onSubmitEditing={(event)=>{this.refs.lastname.focus()}}
                           
                        />
            </View>

          <View style={{flexDirection:"row",flex:1}}>
          <View style={{flex:1,paddingLeft:20,paddingRight:20}}>
           
          <MaterialTextInput
                            label={Strings.EXPIRY_DATE}
                            labelColor={Colors.LABEL_TEXT_COLOR}
                            activeColor={Colors.LABEL_TEXT_COLOR}
                            color={Colors.TEXT_COLOR}
                            fontSize={15}
                            labelActiveTop={-30}
                            underlineColor={Colors.TEXT_COLOR}
                            underlineActiveColor={Colors.TEXT_COLOR}
                            underlineHeight={0.7}
                            underlineActiveHeight={0.7}
                            autoCapitalize='none'
                            autoCorrect={false}
                            underlineColorAndroid='transparent'
                            returnKeyType='next'
                            onChangeText={null}
                            value={null}
                            onSubmitEditing={(event)=>{this.refs.lastname.focus()}}
                           
                        />
            </View>

            <View style={{flex:1,paddingRight:20}}>
               
            <MaterialTextInput
                            label={Strings.CVV_CODE}
                            labelColor={Colors.LABEL_TEXT_COLOR}
                            activeColor={Colors.LABEL_TEXT_COLOR}
                            color={Colors.TEXT_COLOR}
                            fontSize={15}
                            labelActiveTop={-30}
                            underlineColor={Colors.TEXT_COLOR}
                            underlineActiveColor={Colors.TEXT_COLOR}
                            underlineHeight={0.7}
                            underlineActiveHeight={0.7}
                            autoCapitalize='none'
                            autoCorrect={false}
                            underlineColorAndroid='transparent'
                            returnKeyType='next'
                            onChangeText={null}
                            value={null}
                            onSubmitEditing={(event)=>{this.refs.lastname.focus()}}
                           
                        />
            </View>

            </View>

      

             <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
             <Button rounded  style={{width:width/1.4,justifyContent:"center",margin:15,alignItems:"center",backgroundColor:"#84432d",padding:0}} onPress={()=>{Actions.servicePreferences()}}>
             <Text style={{color:"white",textAlign:"center",fontWeight:"400", fontSize: 16}}>NEXT</Text>
             </Button>
             </View>
             
             <TouchableWithoutFeedback onPress={this.goBack}>
             <View>
             <Text style={{textAlign:"center"}}>Home</Text></View>
             </TouchableWithoutFeedback>

            </ScrollView>
         
         </View>  

         
        );
    }

}


const styles = {
    viewStyle: {
      backgroundColor: '#F8F8F8',
       justifyContent: 'center',
      flexDirection: 'row',
      height:70 ,
      width:width/3.8,
      marginLeft:10,
      paddingTop: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'

    }
  
  };