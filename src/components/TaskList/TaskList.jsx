import React from "react";
import { useState } from "react";
import { deleteTask } from "../../todoApi/todo.api";
import { updateTaskStatus } from "../../todoApi/todo.api";
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip';
import {green} from '@mui/material/colors'
import {blue} from '@mui/material/colors'

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
      <div className="task-list">
      <Grid container spacing={2}
      // direction="column"
      justifyContent="flex-start"
      alignItems="center">
        {taskList.map((taskData, dataIndex) => {
          return (
                <Grid
                  item
                  // xs={4}
                  // md={4}
                  // lg={4}
                  key={dataIndex}
                >
              <div key={taskData.id}>
                  {/* <h3>{taskData.task}</h3> */}
                  {/* {console.log('TASK ITEM', taskData)}
                  {console.log('TASK Index', taskData.id)} */}
                  <Chip
                    // label={`${taskData.status ? taskData.task + ' - DONE' : taskData.task}`}
                    label={`${taskData.task}`}
                    color={`${taskData.status ? "success" : "primary"}`}
                    variant={`${taskData.status ? "outlined" : "filled"}`}
                    onClick={() => handleClickTaskStatus(taskData.id)}
                    onDelete={() => handleClickDelete(taskData.id)}
                    sx={{
                      margin: '5px',
                      padding: '5px',
                      // border: '5px solid gray'
                      filter: 'drop-shadow(5px 5px 5px lightgray)'
                    }}
                  />
              </div>
            </Grid>
          )
        })}
      </Grid>
      </div>
    );
    };

export default TaskList;

            // className toggles between two css class depending on status True/False
            // <div key={dataIndex} className={`task ${props.taskData.status ? 'true' : 'false'}`}>