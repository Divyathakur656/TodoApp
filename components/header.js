import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';

export default function Header(){
  return  (
    <View style= {styles.header}>
    <Text style={styles.title}>My Todo Application</Text>
  </View>
  )
}
const styles = StyleSheet.create({
header:{
    paddingTop:55,
    height:100,
    backgroundColor:"coral"
},
title:{
    textAlign: 'center'

,
fontSize: 20,
color:'#fff'
}
})