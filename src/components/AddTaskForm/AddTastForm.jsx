import { useState } from "react";
import { postTask } from "../../todoApi/todo.api";
import Box from '@mui/material/Box'
import { Button, TextField } from "@mui/material";

function AddTaskForm (props) {
    const [taskValue, setTaskValue] = useState('');
    const [statusValue, setStatusValue] = useState('FALSE');

    const handleSubmitTask = (event) => {
        event.preventDefault();
        console.log('Submitting Task:', {
            task: taskValue,
            status: statusValue,
        });

        postTask({
            task: taskValue,
            status: statusValue,
        })
            .then((response) => {
                props.taskRefreshCallBack();

                // clearing field on submit
                setTaskValue('');
                setStatusValue('');
            })
            .catch((err) => {
                console.error('ERROR:', err);
            })
    };

    return (
        // <form onSubmit={handleSubmitTask}>
        //     <label>
        //         {/* <span>Add New Task:</span> */}
        //         <input
        //             id = "task"
        //             onChange={(event) => setTaskValue(event.target.value)}
        //             value={taskValue}
        //             placeholder="add new task"
        //         />
        //     </label>
        //     <button type="submit">+</button>
        // </form>
        <form onSubmit={handleSubmitTask}>
            <TextField
                    id = "outlined-basic"
                    label="New Task"
                    variant="outlined"
                    size="small"
                    sx={{
                        margin: '10px'
                    }}
                    onChange={(event) => setTaskValue(event.target.value)}
                    value={taskValue}
                    // placeholder="add new task"
                />

            {/* <TextField
                    type="date"
                    id = "outlined-basic"
                    variant="outlined"
                    size="small"
                    sx={{
                        margin: '10px'
                    }}
                    // onChange={(event) => setTaskValue(event.target.value)}
                    // value={taskValue}
                    // placeholder="add new task"
                    /> */}
            <Button
                type="submit"
                variant="text"
                size="medium"
                sx={{margin: '10px'}}
            >add</Button>
        </form>
);

    // return (
    //     <form onSubmit={handleSubmitTask}>
    //         <label>
    //             <span>Add New Task:</span>
    //             <input
    //                 id = "task"
    //                 onChange={(event) => setTaskValue(event.target.value)}
    //                 value={taskValue}
    //             />
    //         </label>
    //         <button type="submit">+</button>
    //     </form>
    // );

}

export default AddTaskForm;