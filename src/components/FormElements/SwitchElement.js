import React from 'react'
// import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function SwitchElement(props) {
    return (
        <>
            {/* <FormGroup> */}
            <div className={props.class}>
                <FormControlLabel control={<Switch defaultChecked />} label={props.label} />
            </div>
            {/* </FormGroup> */}
        </>
    );
}