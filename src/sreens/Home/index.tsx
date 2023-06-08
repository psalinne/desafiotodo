import React, { useState } from 'react';
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Task } from '../../components/Task';
import { styles } from './styles';



export default function Home(){

    const [tasks, setTasks] = useState<string[]>([]);
    const [taskText, setTaskText] = useState ('');




  function handleTaskAdd(){
    if(tasks.includes(taskText)){
     return Alert.alert("Tarefa existe", "Já existe essa tarefa na lista")
    }

    setTasks(prevState =>[...prevState, taskText]);
    setTaskText('');
   
  }

  function handleTaskRemove(Ttext: string){
     
    Alert.alert("Remover Tarefa",`Deseja remover tarefa ${Ttext}?`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(task => task !== Ttext))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])

  }

 


      return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.img} source={require ('../../../assets/logotodo.png')} />
                <View style={styles.from}>
                    <TextInput 
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa" 
                    placeholderTextColor= "#808080"
                    onChangeText={setTaskText}
                    value={taskText}
                    />
                    <View style={styles.button}>
                    <TouchableOpacity onPress={handleTaskAdd} >
                        <Image style={styles.imgbutton} source={require ('../../../assets/plus.png')} />
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.info}>
                <View style={styles.textinfto}>
                    <Text style={styles.textcread}> Criadas</Text>
                    <Text style={styles.textcont}>{tasks.length}</Text>
                </View>
                <View style={styles.textinftoright}>
                    <Text style={styles.textdone}> Concluídas</Text>
                    <Text style={styles.textcont}>0</Text>
                </View>
            </View>
             
            <FlatList 
                data={tasks}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <Task 
                        key={item}
                        Ttext={item} 
                        onRemove={() => handleTaskRemove(item) } 
                    />
                 )}
                ListEmptyComponent={() => (
                    <View style={styles.empty}>
                        <Image style={styles.imgempty} source={require ('../../../assets/clipboard.png')} />
                        <Text style={styles.textemptybold}>Você ainda não tem tarefas cadastradas</Text>
                        <Text style={styles.textempty}>Crie tarefas e organize seus itens a fazer</Text>
                    </View>
                )}
                showsHorizontalScrollIndicator={false}
            />
            
        </View>
    );
    
}
