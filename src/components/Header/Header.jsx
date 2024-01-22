import React from "react";
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip';


function Header() {
    return(
    <>
    <h2>things to do ...</h2>
    <span>click <Chip label="task" color="primary"/> to mark complete / </span>
    <span><Chip onDelete={"x"}/> to delete</span>
    </>
    );
}

export default Header;