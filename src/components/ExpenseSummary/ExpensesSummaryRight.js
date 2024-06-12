import React from 'react'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import nofile from '../../assets/nofiles.jpg'

function ExpensesSummaryRight() {
    return (
        <div className=''>
            <div className='w100' >
                <div className='flex p10 mb20' style={{ justifyContent: "space-between", border: "1px black solid" }}>
                    <div className="flex p10">
                        <InsertDriveFileIcon />
                        <div>Files</div>
                    </div>
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                </div>
            </div>
            <div className='flex w100' style={{ border: "1px black solid" }}>
                <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
                    <img style={{ maxWidth: "290px" }} src={nofile} alt="Upload" />
                </label>
                <input id="file-upload" style={{ display: "none" }} type='file' />
            </div>
        </div>
    )
}

export default ExpensesSummaryRight