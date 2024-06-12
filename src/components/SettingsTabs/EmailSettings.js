import React from 'react'
import SelectField from '../FormElements/SelectField'
import TextFieldElement from '../FormElements/TextFieldElement'
import PasswordFieldElement from '../FormElements/PasswordFieldElement'

function EmailSettings() {
    return (
        <>
            <SelectField label="EMAIL TYPE" class="" />
            <TextFieldElement label="SMTP USERNAME" class="" />
            <TextFieldElement label="SMTP HOST" class="" />
            <TextFieldElement label="SENDER NAME" class="" />
            <SelectField label="EMAIL ENCRYPTION" class="" />
            <PasswordFieldElement label="PASSWORD" class="" />
            <div className='flex'>
                <TextFieldElement label="SMTP PORT" class="w50" />
                <TextFieldElement label="EMAIL CHARSET" class="w50" />
            </div>
            <TextFieldElement label="SENDER EMAIL" class="" />
        </>
    )
}

export default EmailSettings