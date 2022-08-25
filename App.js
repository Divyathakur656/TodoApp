import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem';
import AddTodoItem from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {Text:"Divya",key:1},
    {Text:"Payal",key:2},
    {Text:"Nishant",key:3},
    {Text:"Ankit",key:2},
    {Text:"Akriti",key:2},
  ]);

  const pressHandler = (key)=>{
    setTodos((previousTodos)=>{
      return previousTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text)=>{
    setTodos((previousTodos)=>{
      return [
        {
          text:text, key: Math.random().toString()
        },
        ...previousTodos
      ]
    })
  }


  return (
    <View style={styles.container}>
  <Header></Header>
   <View style={styles.content}>

    <AddTodoItem> submitHandler={submitHandler}</AddTodoItem>
      <View style={styles.list}>
        <FlatList
        data={todos}
        renderItem= {({item})=>(
          <TodoItem item = {item }
           pressHandler = {pressHandler}></TodoItem>
           
        
  )}
   >
        
        </FlatList>
    
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  content:{
    padding: 20
  },
  list: {
   marginTop: 20,
  
  },
  textStyle:{
    padding:10

,
fontSize: 15,

}
 
});
