import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';

function CategoriesHeader() {
    return (
        <>
            <div className='flex' style={{ justifyContent: 'space-between', padding: '15px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', marginBottom: "20px" }}>
                <div className=''>
                    <div style={{ fontSize: "25px", marginBottom: "5px" }}>Categories</div>
                    <div>Manage Expenses</div>
                </div>
                <div>
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                </div>

            </div>
        </>
    )
}

export default CategoriesHeader