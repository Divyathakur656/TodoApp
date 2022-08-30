import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({item,pressHandler}) {

    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>

            <View style= {styles.item}>
            <Text >{item.text}</Text>
            <MaterialIcons name='delete' size={20} color = 'black'></MaterialIcons>
            </View>

        </TouchableOpacity>
        

    )
}

const styles = StyleSheet.create({
    item :{
    padding:16,
    marginTop:18,
    borderColor: 'green',
    color:"red",
    borderRadius:10,
    borderWidth:1,
    flexDirection:'row',
    justifyContent:'space-between',
        
    }
}
)