import React from 'react'
import TextField from '@mui/material/TextField';

function CompanySettings() {
    return (
        <>
            <div className='flex'>
                <div className="button w50">
                    <TextField id="outlined-basic" label="COMPANY NAME" variant="outlined" className="w100" />
                </div>
                <div className="button w50">
                    <TextField id="outlined-basic" label="E-MAIL" variant="outlined" className="w100" />
                </div>
            </div>
            <div className='flex'>
                <div className="button w50">
                    <TextField id="outlined-basic" label="CITY" variant="outlined" className="w100" />
                </div>
                <div className="button w50">
                    <TextField id="outlined-basic" label="TOWN" variant="outlined" className="w100" />
                </div>
            </div>
            <div className='flex'>
                <div className="button w50">
                    <TextField id="outlined-basic" label="CRM NAME" variant="outlined" className="w100" />
                </div>
                <div className="button w50">
                    <TextField id="outlined-basic" label="POST CODE" variant="outlined" className="w100" />
                </div>
            </div>
            <div className='flex'>
                <div className="button w50">
                    <TextField id="outlined-basic" label="PHONE" variant="outlined" className="w100" />
                </div>
                <div className="button w50">
                    <TextField id="outlined-basic" label="FAX" variant="outlined" className="w100" />
                </div>
            </div>
            <div className='flex'>
                <div className="button w50">
                    <TextField id="outlined-basic" label="NO TAX NUMBER" variant="outlined" className="w100" />
                </div>
                <div className="button w50">
                    <TextField id="outlined-basic" label="NO TAX OFFICE" variant="outlined" className="w100" />
                </div>
            </div>
            <div className='flex'>
                <div className="button w100">
                    <TextField id="outlined-basic" label="ADDRESS" variant="outlined" className="w100" multiline />
                </div>
            </div >
        </>
    )
}

export default CompanySettings