import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  StyleSheet, Text, TextInput, View ,Button} from 'react-native';

export default function AddTodoItem({submitHandler}){
    const[text,setText]= useState('');

    const changeHandler = (val) =>{
        setText(val);
    }

    return(

        <View>
            <TextInput
            placeholder='Type here something..'
            style= {styles.inputView}
            onChangeText = {changeHandler}>
            
            </TextInput>

            <Button> 
                onPress{()=>submitHandler(text)},
                text="Add Todo",
                color='coral'
            </Button>
        </View>
    )

}

const styles = StyleSheet.create(
    {
        inputView:{
            marginBottom:10,
            paddingHorizontal:8
        }
    }
)