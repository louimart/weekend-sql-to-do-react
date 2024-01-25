import axios from 'axios';

export const fetchTasks = () => {
  // axios GET call
  return axios.get('/api/todo');
};

export const postTask = (taskData) => {
  // axios POST call to add new Task
  return axios.post('/api/todo', taskData);
};

export const deleteTask = (taskId) => {
  // axios DELETE call to remove Task
  return axios.delete(`/api/todo/${taskId}`);
};

export const updateTaskStatus = (taskId) => {
  // axios PUT call to update Status
  return axios.put(`/api/todo/${taskId}`);
};

export const resetTaskStatus = (taskStatus) => {
  // axios PUT call to update Status
  console.log('Status', taskStatus);
  return axios.put(`/api/reset`, taskStatus);
};
