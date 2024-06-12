import React from 'react'
import TextField from '@mui/material/TextField';

function TextFieldElement(props) {
    console.log(props.multiline)
    return (
        <div className={`button ${props.class}`}>
            <TextField id="outlined-basic" label={props.label} variant="outlined" className="w100" multiline={props.multiline} />
        </div>
    )
}

export default TextFieldElement