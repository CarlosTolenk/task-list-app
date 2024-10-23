import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTaskViewModel} from './TaskViewModel';
import CustomListGeneric from '../../components/CustomListGeneric/CustomListGeneric';
import {ITask} from '../../../store/models/task';
import {useState} from 'react';

const TaskScreen = () => {
  const {tasks, addTask, handleRemoveTask} = useTaskViewModel();
  const [taskName, setTaskName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({item}: {item: ITask}) => {
    if (!item) {
      return null;
    }

    return (
      <View style={styles.taskContainer}>
        <Text style={styles.task}>{item.name}</Text>
        <TouchableOpacity onPress={() => handleRemoveTask(item.id)}>
          <Text style={styles.removeTask}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const handleAddTask = () => {
    const newTask: ITask = {
      id: Date.now(),
      name: taskName,
      description: '',
    };
    addTask(newTask);
    setTaskName('');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do List</Text>
      <CustomListGeneric data={tasks} renderItem={renderItem} />

      <View style={styles.buttonActionAdd}>
        <Button title="Add New Task" onPress={() => setModalVisible(true)} />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <TextInput
            placeholder="Name of task"
            value={taskName}
            onChangeText={setTaskName}
            style={styles.input}
          />
          <View style={styles.containerButton}>
            <Button title="Cancelar" onPress={() => setModalVisible(false)} />
            <Button
              title="Add Task"
              disabled={taskName === ''}
              onPress={handleAddTask}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  task: {
    fontSize: 18,
  },
  removeTask: {
    color: 'red',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  buttonActionAdd: {
    marginVertical: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
  },
  buttonActions: {
    margin: 10,
  },
});

export default TaskScreen;
