import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { IconButton } from '@mui/material';

function SettingsHeader() {
    return (
        <div className='flex' style={{ justifyContent: 'space-between', padding: "20px" }}>
            <div className='flex'>
                <SettingsIcon style={{ marginRight: "10px" }} />
                <div className="flex" style={{ fontSize: "18px" }}>CRM Settings</div>
            </div>
            <IconButton>
                <CheckCircleIcon />
            </IconButton>
        </div>
    )
}

export default SettingsHeader