import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TodoItem({item,pressHandler}) {

    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
<Text style= {styles.item }>{item.Text}</Text>
        </TouchableOpacity>
        

    )
}

const styles = StyleSheet.create({
    item :{
    padding:16,
    marginTop:18,
    borderColor: 'coral',
    borderRadius:10,
    borderWidth:2
    }
}
)