import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableWithoutFeedback, Pressable } from 'react-native';

export default function AddTodoItem({ submitHandler }) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (

        <View>
            <TextInput
                placeholder='Type something here..'
                style={styles.inputView}
                onChangeText={changeHandler}>

            </TextInput>

            <Pressable
                style={styles.buttonStyle}
                onPress={() => submitHandler(text,)
                
                }>
                <Text style={
                    styles.textStyle
                }>
                    Add Todo
                </Text>



            </Pressable>
        </View>
    )

}

const styles = StyleSheet.create(
    {
        inputView: {
            marginBottom: 30,
            marginTop: 15,
            paddingHorizontal: 8,

            paddingVertical: 15,
            borderColor: 'coral',
            borderRadius: 6,
            borderStyle: 'dashed',
            borderWidth: 1
        },
        buttonStyle: {
            padding: 12,
            color: "white",
            alignItems: 'center',
            borderRadius: 10,
            elevation: 13,
            backgroundColor: 'coral',


        },
        textStyle: {
            color: "white",
            fontSize: 15
        }
    }
)