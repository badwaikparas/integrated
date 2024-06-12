import React, { useState } from 'react';
import { TextField, Button, Typography } from "@mui/material";
import NotesTimeLineContainer from './NotesTimeLine';

function Notes() {
    const [text, setText] = useState('');
    const [displayText, setDisplayText] = useState('');

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = () => {
        setDisplayText(text);
    };

    return (
        <>
            <TextField
                label="Add Note"
                multiline
                value={text}
                onChange={handleInputChange}
                style={{ width: '100%' }}
            />
            <Button
                onClick={handleSubmit}
                variant="contained"
                color="inherit"
                style={{ marginTop: '10px' }}
            >
                Submit
            </Button>
            {displayText && (
                <Typography variant="body1" style={{ marginTop: '20px' }}>
                    {displayText}
                </Typography>
            )}

            <NotesTimeLineContainer />


        </>
    );
}

export default Notes;
