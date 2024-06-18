import React from 'react'
import ImageInput from '../FormElements/ImageInput'

function CustomizationLeft() {
    return (
        <div>
            <div className="flex">
                <ImageInput label="App Logo" />
                <ImageInput label="Nav Logo" />
            </div>
            <div className="flex">
                <ImageInput label="Admin Login Screen" />
                <ImageInput label="Client Login Screen" />
            </div>
            <div className="flex">
                <ImageInput label="Screen Loader" />
                <ImageInput label="Favicon" />
            </div>
        </div>
    )
}

export default CustomizationLeft