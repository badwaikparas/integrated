import React from 'react'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ViewListIcon from '@mui/icons-material/ViewList';

function StaffHeader() {
    return (
        <>
            <div className='flex p10' style={{ justifyContent: 'space-between' }}>
                <div className='flex'>
                    <div className='p10 flex'>
                        <PeopleAltIcon />
                    </div>
                    <div style={{ fontSize: "20px" }}>
                        Staff (6)
                    </div>
                </div>
                <div className='flex'>
                    <div style={{ margin: "0 10px" }}>
                        <IconButton><SearchIcon /></IconButton>
                    </div>
                    <div style={{ margin: "0 10px" }}>
                        <IconButton><AddCircleIcon style={{ color: 'lightgreen' }} /></IconButton>
                    </div>
                    <div style={{ margin: "0 10px" }}>
                        <IconButton><ViewListIcon /></IconButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StaffHeader