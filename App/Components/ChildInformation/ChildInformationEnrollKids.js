import React, { Component } from 'react';
import {
    Image,
    View,
    Text,
    AsyncStorage,
    StyleSheet,
    ImageBackground,
    ScrollView,
    Dimensions,
    TouchableWithoutFeedback,
    Modal
}  from 'react-native';
import {Button } from 'native-base';
import Header from "../Common/Header"

import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
// import AppIntro from "../AppIntro/AppIntro"


var radio_props = [
    {label: '4', value: 0 },
    {label: '5', value: 1 },
    {label: '6', value: 2 },
  ];

export default  class ChildInformationEnrollKids extends Component {

    constructor() {
        super();
        this.state = {
       
            isMoreKidsModalSelection : false,
            modalVisible: false,
         
        };  }

 componentWillMount() {
 }
 
  goBack(){
  Actions.pop()
  }

setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
      return (
             <View style={{flex:1}}>
             <Header headerText={"Child "}/>
             <ScrollView style={{flex:1}}>
             <Text style={{textAlign: "center",marginTop:40,marginBottom:40,fontSize:20}}>HOW MANY KIDS DO YOU HAVE ?</Text>
             <View style={{justifyContent:"center",alignItems:"center",margin:20}}>
             <Image source={require('../../Assets/Buy.png')}/>
             </View>

             <View style={{flexDirection:"row",marginLeft:20,marginRight:20}}>
            <View style={{flexDirection:"column",margin:10,justifyContent:"center",alignItems:"center"}}>
             <Image source={require('../../Assets/pregnantUnsel.png')}/> 
             <Text style={{marginTop:5}}>Pregnant</Text>
             </View>
              <View style={{flexDirection:"column",margin:10,justifyContent:"center",alignItems:"center"}}>
              <Image source={require('../../Assets/1kidsUnsel.png')}/>
              <Text style={{marginTop:5}}>1 kid</Text>
               </View>
             <View style={{flexDirection:"column",margin:10,justifyContent:"center",alignItems:"center"}}>
             <Image source={require('../../Assets/2kidUnsel.png')}/>
             <Text style={{marginTop:5}}>2 kid</Text>
             </View>
             <View style={{flexDirection:"column",margin:10,justifyContent:"center",alignItems:"center"}}>
             <Image source={require('../../Assets/3kidUnsel.png')}/>
             <Text style={{marginTop:5}}>3 Kid</Text>
             </View>

             {/* <TouchableWithoutFeedback onPress={()=>alert("Hello")}>
             <View style={{flexDirection:"column",margin:10,justifyContent:"center",alignItems:"center"}}>
             {/* <Image source={require('../../Assets/3kidUnsel.png')}/> */}
             {/* <Text>More</Text> */}
             {/* </View> */}
             {/* </TouchableWithoutFeedback> */} 

         <TouchableWithoutFeedback
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <View style={{justifyContent:"center",alignItems:"center"}}>
          <Text >More</Text></View>
          
          </TouchableWithoutFeedback>
             
            </View>

            <Text style={{textAlign: "center",marginTop:40,marginBottom:40}}>HOW MANY KIDS DO YOU WANT TO ENROLL ?</Text>

             <View style={{flexDirection:"row",marginLeft:20,marginRight:20}}>
             <View style={{flexDirection:"column",margin:10,justifyContent:"center",alignItems:"center"}}>
             <Image source={require('../../Assets/pregnantUnsel.png')}/> 
             <Text style={{marginTop:5}}>Pregnant</Text>
             </View>
              <View style={{flexDirection:"column",margin:10,justifyContent:"center",alignItems:"center"}}>
              <Image source={require('../../Assets/1kidsUnsel.png')}/>
              <Text style={{marginTop:5}}>1 kid</Text>
               </View>
             <View style={{flexDirection:"column",margin:10,justifyContent:"center",alignItems:"center"}}>
             <Image source={require('../../Assets/2kidUnsel.png')}/>
             <Text style={{marginTop:5}}>2 kid</Text>
             </View>
             <View style={{flexDirection:"column",margin:10,justifyContent:"center",alignItems:"center"}}>
             <Image source={require('../../Assets/3kidUnsel.png')}/>
             <Text style={{marginTop:5}}>3 Kid</Text>
             </View>
             
             {/* <TouchableWithoutFeedback onPress={()=>this.setState({isMoreKidsModalSelection:false})}>
             <View style={{flexDirection:"column",margin:10,justifyContent:"center",alignItems:"center"}}>
             {/* <Image source={require('../../Assets/3kidUnsel.png')}/> */}
             {/* <Text>More</Text> */}
             {/* </View> */}
             {/* </TouchableWithoutFeedback> */}

         <TouchableWithoutFeedback
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <View style={{justifyContent:"center",alignItems:"center"}}>
          <Text >More</Text></View>
          
          </TouchableWithoutFeedback>

     
            </View>

             <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
             <Button rounded  style={{width:width/1.4,justifyContent:"center",margin:15,alignItems:"center",backgroundColor:"#84432d"}} onPress={()=> Actions.childSizeInformation()}>
             <Text style={{color:"white",textAlign:"center",fontWeight:"400", fontSize: 16}}>NEXT</Text>
             </Button>
             </View>
             
             <TouchableWithoutFeedback onPress={this.goBack}>
             <View>
             <Text style={{textAlign:"center"}}>Home</Text></View>
             </TouchableWithoutFeedback>

           {/* modals for dropdown Selection */}

 


         <Modal
          style={{flex:1}}
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            // alert('Modal has been closed.');
          }}>

          <View style={{marginTop: 200,justifyContent:"center",alignItems:"center"}}>
           <View style={{backgroundColor:"white",height:250,width:250,borderColor:"grey",borderWidth:1,borderRadius:5,justifyContent:"flex-start"}}>
           <View style={{marginTop:50}}> 
           <View  style={{height:1,backgroundColor:"grey"}} /> 
           <RadioForm
           style={{paddingRight:130,paddingTop:20,paddingBottom:10}}
           radio_props={radio_props}
           initial={-1}
           buttonColor={'black'}
           buttonOuterColor={"black"}
           onPress={(value) => {alert(value)}}
             />
            </View>
               <View  style={{height:1,backgroundColor:"grey"}} /> 
                <View style={{flexDirection:"row",paddingLeft:90,position:"absolute",bottom:20,justifyContent:"flex-end" }} >
                <TouchableWithoutFeedback
                onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                }}>
                <View>
               <Text style={{paddingLeft:20,fontSize:20}}>CANCEL</Text>
                </View>
              </TouchableWithoutFeedback>

              {/* <TouchableWithoutFeedback
                onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                }}>
                <View> */}

                <TouchableWithoutFeedback
                 onPress={() => {
                    // this.setModalVisible(!this.state.modalVisible);
                //  null
                alert("OK")
                   }}>
                   <View>
                <Text style={{paddingLeft:20,paddingRight:30,fontSize:20}}>OK</Text></View></TouchableWithoutFeedback>
                {/* </View>
              </TouchableWithoutFeedback> */}
              </View>
             </View>

               
        
           
          </View>
        </Modal>


          {/* Modal to enroll */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            // alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>

         <View style={{backgroundColor:"white",height:200,width:200,justifyContent:"center",alignItems:"center"}}>  
         <RadioForm
           radio_props={radio_props}
           initial={-1}
           buttonColor={'black'}
           buttonOuterColor={"black"}
           onPress={(value) => {alert(value)}}
             />

           <TouchableWithoutFeedback
                onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                }}>
                <View>
                <Text>Hide Modal</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </Modal>
            
            </ScrollView>
            </View>
    
         
        );
    }

}



const styles = StyleSheet.create({
    moreKidsPopup:{
       height:200,
       width:200

    }
 
  });