import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ProgressBar from "@ramonak/react-progress-bar";
import { IconButton } from '@mui/material';
import "../../css/ProgressBar.css"


function AddCategoriesTile(props) {
    return (
        <>
            <div style={{ padding: "10px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}>
                <div className='flex w100 mb10' style={{ justifyContent: 'space-between' }}>
                    <div>
                        <div style={{ fontSize: "12px", margin: "5px" }}>{props.label}</div>
                        <div style={{ fontSize: "24px" }}>{props.amount}</div>
                    </div>
                    <div className='flex'>
                        <IconButton>
                            <EditIcon style={{ padding: '13px' }} />
                        </IconButton>
                        <IconButton>
                            <DeleteIcon style={{ padding: '13px' }} />
                        </IconButton>
                    </div>
                </div>
                <ProgressBar
                    completed={props.percent}
                    className="wrapper mb10"
                    barContainerClassName="container"
                    completedClassName="barCompleted"
                    labelClassName="label"
                />
                <div>
                    Category ({props.percent})%
                </div>
            </div>
        </>
    );
}

export default AddCategoriesTile;
