import {useState, useEffect} from 'react';
import { deleteTask, fetchTasks, updateTaskStatus } from '../../todoApi/todo.api';

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
      {/* RENDER LIST of TASKS*/}
      {taskList.map((taskData, dataIndex) => {
        return (
          <div key={dataIndex}
          onClick={() => handleClickTaskStatus(taskData.id)}
          // className={`creature ${
          //   creatureData.immortal ? 'immortal' : 'normal'
          // }`}
          >
            {/* key prop needs to be a unique value */}
            <h3>{taskData.task}</h3>
            <p>COMPLETE? {`${taskData.status}`}</p>
            {console.log(taskData)}
            {console.log(typeof(taskData.status))}
            <button onClick={(event) => handleClickDelete(taskData.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );

}

export default App
