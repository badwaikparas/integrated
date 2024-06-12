import React from 'react'
import { IconButton } from '@mui/material'
import AutorenewIcon from '@mui/icons-material/Autorenew';
import EmailIcon from '@mui/icons-material/Email';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function ExpenseSummaryLeftHeader() {
    return (
        <>
            <div className='flex p10' style={{ justifyContent: 'space-between', border: 'solid 1px black', marginBottom: "20px" }}>
                <div>
                    <div>EXP-3</div>
                    <div>Office Exp</div>
                </div>
                <div className='flex'>
                    <div style={{ padding: '8px' }}>
                        <IconButton>
                            <AutorenewIcon style={{ color: "lightGreen" }} />
                        </IconButton>

                    </div>
                    <div style={{ padding: '8px' }}>
                        <IconButton>
                            <EmailIcon />
                        </IconButton>
                    </div>
                    <div style={{ padding: '8px' }}>
                        <IconButton>
                            <PictureAsPdfIcon />
                        </IconButton>
                    </div>
                    <div style={{ padding: '8px' }}>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExpenseSummaryLeftHeader