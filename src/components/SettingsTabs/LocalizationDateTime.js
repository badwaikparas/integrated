import React from 'react'
import SelectField from '../FormElements/SelectField'


function LocalizationDateTime() {
    return (
        <>
            <SelectField label="LANGUAGE" />
            <SelectField label="DEFAULT TIMEZONE" />
            <SelectField label="DATE FORMAT" />
        </>
    )
}

export default LocalizationDateTime