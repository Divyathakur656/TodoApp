import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, Button, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem';
import AddTodoItem from './components/addTodo';
import Sandbox from './components/sandbox';


export default function App() {
  const [todos, setTodos] = useState([
    { text: "Create an app", key: 1 },
    { text: "Study time", key: 2 },
    { text: "Go for excercise", key: 3 },
      ]);

  const pressHandler = (key) => {
    setTodos((previousTodos) => {
      return previousTodos.filter(todo => todo.key != key)
    });
  }

  const submitHandler = (text) => {
    if (text.length > 0 && text.length >= 3) {

      setTodos((previousTodos) => {
        return [
          {
            text: text, key: Math.random().toString()
          },
          ...previousTodos,
          
        ]
        
      });
    } else {
      Alert.alert('OOps!', "Todos must be over 3 chars Long.", [
        { text: 'Okay', onPress: () => console.log('alert closed') }
      ]

      );
    }

  }


  return (
    // <Sandbox></Sandbox>
    
    <TouchableWithoutFeedback  onPress={() =>{
      Keyboard.dismiss()
    }}>


      <View style={styles.container}>
        <Header></Header>
        <View style={styles.content}>

          <AddTodoItem submitHandler={submitHandler}></AddTodoItem>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item}
                  pressHandler={pressHandler}></TodoItem>


              )}
            >

            </FlatList>

          </View>
        </View>
      </View>

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  content: {
    padding: 20,
    flex:1

  },
  list: {
    flex:1,
    marginTop: 20,
    marginBottom:1

  },
  textStyle: {
    padding: 10,


    fontSize: 15,

  }

});
