import React from 'react'
import SelectField from '../FormElements/SelectField'
import TextField from '@mui/material/TextField';

function FinancialSettings() {
    return (
        <>
            <div className="flex">
                <SelectField label="CURRENCY" class="w50" />
                <SelectField label="THOUSAND SEPARATOR" class="w25" />
                <SelectField label="DECIMAL SEPERATOR" class="w25" />
            </div>
            <div className='flex'>
                <div className="button w50">
                    <TextField id="outlined-basic" label="TAX LABEL" variant="outlined" className="w100" />
                </div>
                <SelectField label="CURRENCY POSITION" class="w25" />
                <SelectField label="CURRENCY DISPLAY" class="w25" />
            </div>
            <div className="button w50">
                <TextField id="outlined-basic" label="TERMS & CONDITIONS TITLE" variant="outlined" className="w100" />
            </div>
            <div className="button w50">
                <TextField id="outlined-basic" label="PREDEFINED TERMS & CONDITIONS" variant="outlined" className="w100" />
            </div>

        </>
    )
}

export default FinancialSettings


