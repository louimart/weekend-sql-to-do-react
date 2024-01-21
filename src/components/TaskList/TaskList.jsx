import React from "react";
import { useState } from "react";
import { deleteTask } from "../../todoApi/todo.api";
import { updateTaskStatus } from "../../todoApi/todo.api";

function TaskList( {taskList, taskRefreshCallBack} ){

  // DELETE Function
  const handleClickDelete = (id) => {
    // ID item
    console.log('DELETE - taskId:', id);
    // MAKE Axios Call
    deleteTask(id)
      .then((response) => {
        taskRefreshCallBack();
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
  };

      // PUT function to update task status
  const handleClickTaskStatus = (id) => {
    updateTaskStatus(id)
      .then((response) => {
        taskRefreshCallBack();
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
  };

    return (
      <>
        {taskList.map((taskData) => {
          return (
            // className toggles between two css class depending on status True/False
            // <div key={dataIndex} className={`task ${props.taskData.status ? 'true' : 'false'}`}>
          <div key={taskData.id}>    
              {/* key prop needs to be a unique value */}
              <h3>{taskData.task}</h3>
              {console.log('TASK ITEM', taskData)}
              {console.log('TASK Index', taskData.id)}
              <button onClick={() => handleClickTaskStatus(taskData.id)}>{`${taskData.status ? 'DONE' : 'COMPLETE ?'}`}</button>
              <button onClick={() => handleClickDelete(taskData.id)}>X</button>
          </div>
          )
          })}
      </>
    );
    };

export default TaskList;