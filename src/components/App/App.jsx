import { useState, useEffect } from 'react';
import {
  deleteTask,
  fetchTasks,
  resetTaskStatus,
} from '../../todoApi/todo.api';
import AddTaskForm from '../AddTaskForm/AddTastForm';
import TaskList from '../TaskList/TaskList';
import Header from '../Header/Header';
import './App.css';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [taskStatus, setTaskStatus] = useState([]);

  const refreshTasks = () => {
    const taskPromise = fetchTasks();
    taskPromise
      // success
      .then((response) => {
        console.log('SERVER DATA:', response);
        setTaskList(response.data);
      })
      // failure
      .catch((err) => {
        console.error('ERROR:', err);
      });
  };

  // initial load of component
  useEffect(() => {
    // body of effect
    console.log('Rendering list on Initial Load');
    // api call
    refreshTasks();
  }, []);

  // // DELETE Function
  // const handleClickDelete = (id) => {
  //   // ID item
  //   console.log('DELETE - taskId:', id);
  //   // MAKE Axios Call
  //   deleteTask(id)
  //     .then((response) => {
  //       refreshTasks();
  //     })
  //     .catch((err) => {
  //       console.error('ERROR:', err);
  //     });
  // };

  // // PUT function to update task status
  // const handleClickTaskStatus = (id) => {
  //   updateTaskStatus(id)
  //     .then((response) => {
  //       refreshTasks();
  //     })
  //     .catch((err) => {
  //       console.error('ERROR:', err);
  //     });
  // };

  // PUT function to RESET task status
  const handleClickResetTaskStatus = () => {
    console.log('RESET button CLICKED', taskList);
    resetTaskStatus(taskList)
      .then((response) => {
        refreshTasks();
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
  };

  return (
    <div>
      <Header />
      <AddTaskForm taskRefreshCallBack={refreshTasks} />
      {/* RENDER LIST of TASKS*/}
      <TaskList taskList={taskList} taskRefreshCallBack={refreshTasks} />
      {/* // return (
          // <div key={dataIndex} className={`task ${taskData.status ? 'true' : 'false'}`}>
          //   <h3>{taskData.task}</h3>
          //   {console.log(taskData)}
          //   <button onClick={() => handleClickTaskStatus(taskData.id)}>{`${taskData.status ? 'DONE' : 'COMPLETE ?'}`}</button>
          //   <button onClick={() => handleClickDelete(taskData.id)}>X</button>
          // </div>
        // ); */}
      <footer>
        <Chip
          variant="outlined"
          label="RESET"
          color="error"
          sx={{
            margin: '5px',
            padding: '5px',
            filter: 'drop-shadow(5px 5px 5px lightgray)',
          }}
          onClick={() => {
            alert('All TASK STATUS RESET');
            handleClickResetTaskStatus();
          }}
        />
      </footer>
    </div>
  );
}

export default App;
