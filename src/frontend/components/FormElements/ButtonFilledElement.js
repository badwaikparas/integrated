import React from 'react'
import Button from '@mui/material/Button';

function ButtonFilledElement(props) {
    return (
        <div>
            <Button variant="contained">{props.label}</Button>
        </div>
    )
}

export default ButtonFilledElement