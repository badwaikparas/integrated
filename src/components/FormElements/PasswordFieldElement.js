import React from 'react'
import { TextField } from '@mui/material'

function PasswordFieldElement(props) {
    return (
        <>
            <div className={`button ${props.class}`}>
                <TextField
                    type="password"
                    // InputProps={{
                    //     inputProps: {
                    //         // max: 100,
                    //         min: 0
                    //     }
                    // }}
                    label={props.label}
                    className='w100'
                />

            </div>
        </>
    )
}

export default PasswordFieldElement