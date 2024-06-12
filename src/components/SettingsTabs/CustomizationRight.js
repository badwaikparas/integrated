import React from 'react'
import TextFieldElement from '../FormElements/TextFieldElement';
import SwitchElement from '../FormElements/SwitchElement';
import ButtonFilledElement from '../FormElements/ButtonFilledElement';

function CustomizationRight() {
    return (
        <>
            <div className='w100'>
                <TextFieldElement label="Title" class="w100" />
                <TextFieldElement label="Admin Login Screen Text" class="w100" multiline />
                <TextFieldElement label="Client Login Screen Text" class="w100" multiline />
                <TextFieldElement label="Meta Description" class="w100" multiline />
                <TextFieldElement label="Meta Keywords" class="w100" multiline />
                <TextFieldElement label="Button Text" class="w100" />
                <TextFieldElement label="Button Link" class="w100" />
                <TextFieldElement label="Client Area Button Text" class="w100" />
                <SwitchElement label="Support Button on Client Area" />
                <SwitchElement label="Client Area button" />
                <ButtonFilledElement label="SAVE" />

            </div>
        </>
    )
}

export default CustomizationRight;