import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sandbox(){
     return (
        <View style= { style.container}>
        <Text style= { style.boxStyle1}>one</Text>
        <Text style= { style.boxStyle2}>Two</Text>
        <Text style= { style.boxStyle1}>Three</Text>
        <Text style= { style.boxStyle2}>Four</Text>
     </View>
     )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor:'#ddd',
        alignItems:'center',
        paddingTop:45
    },

    boxStyle1:{
      padding:15,
      backgroundColor:"red"
    },

    boxStyle2:{
        padding:15,
        backgroundColor:"green"
      },
  
      
    

})
