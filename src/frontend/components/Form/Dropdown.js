import React, { useState } from 'react'
import Select from 'react-select';
import { Controller } from 'react-hook-form';

function Dropdown({ control, setValue, name }) {
    const colourOptions = [
        { value: 'ocean', label: 'Ocean' },
        { value: 'blue', label: 'Blue' },
        { value: 'purple', label: 'Purple' },
        { value: 'red', label: 'Red' },
        { value: 'orange', label: 'Orange' },
        { value: 'yellow', label: 'Yellow' },
        { value: 'green', label: 'Green' },
        { value: 'forest', label: 'Forest' },
        { value: 'slate', label: 'Slate' },
        { value: 'silver', label: 'Silver' },
    ];

    const [Item, setItem] = useState(null);

    const handleSelectItem = (item) => {
        setValue(name, item);
        setItem(item)

    }

    const customStyles = {
        option: (defaultStyles, state) => ({
            // ...defaultStyles,
            color: "#fff",
            backgroundColor: state.isSelected ? "#a0a0a0" : "#000000",
            border: "none",
            borderBottom: "1px solid grey",
        }),

        control: (defaultStyles) => ({
            // ...defaultStyles,
            padding: "0",
            display: "flex",
            margin: "0",
            backgroundColor: "#000000",
            // padding: "10px",
            border: "none",
            boxShadow: "none",
            height: "34px",
            borderRadius: "4px"
        }),

        singleValue: (defaultStyles) => ({
            // ...defaultStyles,
            color: "#fff",

        }),

        menu: (defaultStyles) => ({
            // ...defaultStyles,
            backgroundColor: "#000000",
            border: "none",
            boxShadow: "none",
            maxHeight: "50px",
        }),

        menuList: (defaultStyles) => ({
            // ...defaultStyles,
            backgroundColor: "#000000",
            border: "none",
            boxShadow: "none",
            maxHeight: "100px",
        })
    };

    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);

    return (
        <div style={{ marginRight: "50px", marginBottom: "20px" }}>
            <label htmlFor='dropdown'> {name}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Select
                        className="basic-single"
                        classNamePrefix="select"
                        // defaultValue={colourOptions[0]}
                        isDisabled={isDisabled}
                        isLoading={isLoading}
                        isClearable={isClearable}
                        isRtl={isRtl}
                        isSearchable={isSearchable}
                        onChange={handleSelectItem}
                        name="color"
                        options={colourOptions}
                        styles={customStyles}
                    />
                )}
            />
        </div>
    )
}

export default Dropdown;