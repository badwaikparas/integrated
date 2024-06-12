import React, { useState } from 'react'

function ImageInput(props) {
    const [file, setFile] = useState()

    function createURL(event) {
        setFile(URL.createObjectURL(event.target.files[0]))
    }

    return (
        <>
            <div className="flex" style={{ width: '100', height: '100px', justifyContent: 'space-between', flexDirection: 'column', margin: '20px', border: "1px black solid", maxWidth: '253px' }}>
                <div>{props.label}</div>
                <div className='flex' style={{ flexDirection: 'column' }}>
                    <div className='flex' style={{ width: '50px', height: '50px', border: "1px black solid" }}>
                        <img style={{ maxWidth: '50px', maxHeight: '50px' }} src={file} alt="" />
                    </div>
                    <input type="file" onChange={createURL} />
                    {/* <label for="file-upload" class="custom-file-upload">
                        Custom Upload
                    </label>
                    <input id="file-upload" type="file" onChange={createURL} /> */}
                </div>
            </div>
        </>
    )
}

export default ImageInput