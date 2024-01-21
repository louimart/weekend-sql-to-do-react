import {useState, useEffect} from 'react';
import { 
  deleteTask, 
  fetchTasks, 
  updateTaskStatus
} from '../../todoApi/todo.api';
import AddTaskForm from '../AddTaskForm/AddTastForm';

function App () {
  const [taskList, setTaskList] = useState([
    // { name: 'Unicorn', origin: 'Britain' },
    // { name: 'Sphinx', origin: 'Egypt' },
    // { name: 'Jackalope', origin: 'America' },
  ]);

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

  // DELETE Function
  const handleClickDelete = (id) => {
    // ID item
    console.log('DELETE - taskId:', id);
    // MAKE Axios Call
    deleteTask(id)
      .then((response) => {
        refreshTasks();
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
  };
  
  // PUT function to update task status
  const handleClickTaskStatus = (id) => {
    updateTaskStatus(id)
      .then((response) => {
        refreshTasks();
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
  };

  return (
    <div>
      <h1>TO DO APP</h1>
      <AddTaskForm taskRefreshCallBack={refreshTasks}/>
      {/* RENDER LIST of TASKS*/}
      {taskList.map((taskData, dataIndex) => {
        return (
          // className toggles between two css class depending on status True/False
          <div key={dataIndex} className={`task ${taskData.status ? 'true' : 'false'}`}>
            {/* key prop needs to be a unique value */}
            <h3>{taskData.task}</h3>
            {/* <p>COMPLETE? {`${taskData.status}`}</p> */}
            {console.log(taskData)}
            {console.log(typeof(taskData.status))}
            <button onClick={() => handleClickTaskStatus(taskData.id)}>{`${taskData.status ? 'DONE' : 'COMPLETE ?'}`}</button>
            <button onClick={(event) => handleClickDelete(taskData.id)}>X</button>
          </div>
        );
      })}
    </div>
  );

}

export default App
