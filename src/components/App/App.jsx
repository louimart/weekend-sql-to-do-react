import {useState, useEffect} from 'react';
import { fetchTasks } from '../../todoApi/todo.api';

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
    console.log('Hi Hi');
    // api call
    refreshTasks();
  }, []);
  
  return (
    <div>
      <h1>TO DO APP</h1>
      {/* RENDER LIST of TASKS*/}
      {taskList.map((taskData, dataIndex) => {
        return (
          <div key={dataIndex}>
            {/* key prop needs to be a unique value */}
            <h3>{taskData.task}</h3>
            <p>{taskData.status}</p>
          </div>
        );
      })}
    </div>
  );

}

export default App
