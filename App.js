import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,KeyboardAvoidingView ,TextInput , Platform ,
  TouchableOpacity ,Keyboard} from 'react-native';
import Task from './components/Task';
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  const [task , setTask] = useState();
  const [taskItems , setTaskItems] = useState([]);

  const handlerAddTask = () => {
    if( task !== null){
      Keyboard.dismiss();
      setTaskItems([...taskItems,task]);
      setTask(null);
    }
    console.log(task);
  }

   const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      {/* Today's Tasks*/}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          { taskItems.map((item,index) => {
            return (
                <TouchableOpacity  key={index} >
                  <View style={styles.item1}>
                  <Task text = {item} />
                    <Icon  name="trash" size={22} color="#900" onPress={() => completeTask(index)}/>
                  </View>
                </TouchableOpacity>
                )
            })
          }
        </View>

      </View>

      <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? "Padding" : "height"}
          style={styles.writeTasks}>
        <TextInput style={styles.input} placeholder={'Write a task :'}
                   value={task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={() => handlerAddTask()}>
          <View style={styles.addWrapper}>
            <Text  style={styles.addtext}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED'
  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal:20
  },
  sectionTitle : {
    fontSize:30,
    fontWeight:'bold',
  },
  items:{
    marginTop : 30,
  },
  writeTasks:{
    position :'absolute',
    bottom : 60,
    width : '100%',
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center'
  },
  input:{
    paddingVertical : 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius : 60,
    borderColor : '#C0C0C0',
    borderWidth : 1,
    width : 250,


  },
  addWrapper:{
    backgroundColor : '#FFF',
    borderRadius: 50,
    width : 50,
    height : 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor : '#C0C0C0',
    borderWidth : 1,
  },
  addtext:{

  },
  objectStyle:{
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center'
  },
  item1:{
    backgroundColor:'#FFF',
    padding : 15,
    borderRadius:10,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between',
    marginBottom : 20,
  }
});

