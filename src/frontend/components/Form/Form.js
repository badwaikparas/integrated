// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';
// import Date1 from './Date1';
// import Dropdown from './Dropdown';
// import Row from './Row';
// import '../../css/Form.css'
// export function Form() {
//     const form = useForm();
//     const { register, control, handleSubmit, formState, setValue } = form;
//     const { errors } = formState;

//     function onSubmit(data) {
//         console.log("Form Submitted");
//         console.log(data);
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit(onSubmit)} noValidate>
//                 <div style={{ display: "flex" }}>
//                     <div style={{ width: "500px" }}>
//                         <Dropdown control={control} setValue={setValue} name="Search Customer" />
//                     </div>
//                     <div style={{ marginRight: "50px", width: "226px" }} className='form-control'>
//                         <label htmlFor="invoice-no">INVOICE NUMBER</label>
//                         <input
//                             style={{ width: "200px" }}
//                             type="text"
//                             id="invoice-no"
//                             {...register("invoiceNo", { required: 'Subject is Required' })}
//                         />
//                         <p className='error'>{errors.invoiceNo?.message}</p>
//                     </div>
//                     <Date1 control={control} setValue={setValue} name="date1" />
//                 </div>

//                 <div style={{ display: "flex" }}>
//                     <div style={{ width: "500px" }}>
//                         <Dropdown control={control} setValue={setValue} name="Choose Account" />
//                     </div>
//                     <div style={{ width: "500px" }}>
//                         <Dropdown control={control} setValue={setValue} name="Default Payment Method" />
//                     </div>
//                     <Date1 control={control} setValue={setValue} name="Date Paid" />
//                 </div>

//                 <div style={{ display: "flex" }}>
//                     <div style={{ marginRight: "50px", width: "226px" }} className='form-control'>
//                         <label htmlFor="invoice-no">INVOICE NUMBER</label>
//                         <input
//                             style={{ width: "200px" }}
//                             type="text"
//                             id="invoice-no"
//                             {...register("invoiceNo", { required: 'Subject is Required' })}
//                         />
//                         <p className='error'>{errors.invoiceNo?.message}</p>
//                     </div>
//                     <div style={{ width: "500px" }}>
//                         <Dropdown control={control} setValue={setValue} name="Search Customer" />
//                     </div>
//                     <Date1 control={control} setValue={setValue} name="Date Paid" />

//                 </div>


//             </form >

//             <DevTool control={control} />


//             <Row />
//         </div >
//     );
// }


// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';
// import Date1 from './Date1';
// import Dropdown from './Dropdown';
// import Row from './Row';
// import '../../css/Form.css';

// export function Form() {
//     const form = useForm();
//     const { register, control, handleSubmit, formState, setValue } = form;
//     const { errors } = formState;

//     const [rows, setRows] = useState([]); // Initialize with an empty array

//     function onSubmit(data) {
//         console.log("Form Submitted");
//         console.log(data);
//     }

//     function addRow() {
//         setRows([...rows, {}]); // Add a new row object to the state
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit(onSubmit)} noValidate>
//                 <div style={{ display: "flex" }}>
//                     <div style={{ width: "500px" }}>
//                         <Dropdown control={control} setValue={setValue} name="Search Customer" />
//                     </div>
//                     <div style={{ marginRight: "50px", width: "226px" }} className='form-control'>
//                         <label htmlFor="invoice-no">INVOICE NUMBER</label>
//                         <input
//                             style={{ width: "200px" }}
//                             type="text"
//                             id="invoice-no"
//                             {...register("invoiceNo", { required: 'Subject is Required' })}
//                         />
//                         <p className='error'>{errors.invoiceNo?.message}</p>
//                     </div>
//                     <Date1 control={control} setValue={setValue} name="date1" />
//                 </div>

//                 <div style={{ display: "flex" }}>
//                     <div style={{ width: "500px" }}>
//                         <Dropdown control={control} setValue={setValue} name="Choose Account" />
//                     </div>
//                     <div style={{ width: "500px" }}>
//                         <Dropdown control={control} setValue={setValue} name="Default Payment Method" />
//                     </div>
//                     <Date1 control={control} setValue={setValue} name="Date Paid" />
//                 </div>

//                 <div style={{ display: "flex" }}>
//                     <div style={{ marginRight: "50px", width: "226px" }} className='form-control'>
//                         <label htmlFor="invoice-no">INVOICE NUMBER</label>
//                         <input
//                             style={{ width: "200px" }}
//                             type="text"
//                             id="invoice-no"
//                             {...register("invoiceNo", { required: 'Subject is Required' })}
//                         />
//                         <p className='error'>{errors.invoiceNo?.message}</p>
//                     </div>
//                     <div style={{ width: "500px" }}>
//                         <Dropdown control={control} setValue={setValue} name="Search Customer" />
//                     </div>
//                     <Date1 control={control} setValue={setValue} name="Date Paid" />
//                 </div>

//                 <button type="submit">Submit</button>
//             </form>

//             <button type="button" onClick={addRow}>Add Row</button>

//             {rows.map((_, index) => (
//                 <Row key={index} />
//             ))}

//             <DevTool control={control} />
//         </div>
//     );
// }


import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import Date1 from './Date1';
import Dropdown from './Dropdown';
import Row from './Row';
import '../../css/Form.css';

export function Form() {
    const form = useForm();
    const { register, control, handleSubmit, formState, setValue } = form;
    const { errors } = formState;

    const [rows, setRows] = useState([{ id: Date.now() }]); // Initialize with an empty array

    function onSubmit(data) {
        console.log("Form Submitted");
        console.log(data);
    }

    function addRow() {
        setRows([...rows, { id: Date.now() }]); // Add a new row with a unique id
    }

    function deleteRow(id) {
        setRows(rows.filter(row => row.id !== id)); // Remove the row with the specific id
    }

    return (
        <div className='create-bill'>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div style={{ display: "flex" }}>
                    <div style={{ width: "500px" }}>
                        <Dropdown control={control} setValue={setValue} name="Search Customer" />
                    </div>
                    <div style={{ marginRight: "50px", width: "226px" }} className='form-control'>
                        <label htmlFor="invoice-no">INVOICE NUMBER</label>
                        <input
                            style={{ width: "200px" }}
                            type="text"
                            id="invoice-no"
                            {...register("invoiceNo", { required: 'Subject is Required' })}
                        />
                        <p className='error'>{errors.invoiceNo?.message}</p>
                    </div>
                    <Date1 control={control} setValue={setValue} name="Date of Issurance" />
                </div>

                <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "50px", width: "226px" }} className='form-control'>
                        <label htmlFor="Due Note">Due Note</label>
                        <input
                            style={{ width: "200px" }}
                            type="text"
                            id="Due_note"
                            {...register("Due Note", { required: 'Subject is Required' })}
                        />
                        <p className='error'>{errors.Due_Note?.message}</p>
                    </div>
                    <div style={{ width: "500px" }}>
                        <Dropdown control={control} setValue={setValue} name="Default Payment Method" />
                    </div>
                    <Date1 control={control} setValue={setValue} name="Due Date" />
                </div>

                <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "50px", width: "226px" }} className='form-control'>
                        <label htmlFor="invoice-no">INVOICE NUMBER</label>
                        <input
                            style={{ width: "200px" }}
                            type="text"
                            id="invoice-no"
                            {...register("invoiceNo", { required: 'Subject is Required' })}
                        />
                        <p className='error'>{errors.invoiceNo?.message}</p>
                    </div>
                    <div style={{ width: "500px" }}>
                        <Dropdown control={control} setValue={setValue} name="Recurring Type" />
                    </div>
                    <Date1 control={control} setValue={setValue} name="Ends On" />
                </div>

                <button type="submit">Submit</button>
            </form>

            <button type="button" onClick={addRow}>Add Row</button>

            {rows.map((row) => (
                <div key={row.id} style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <Row />
                    <button type="button" onClick={() => deleteRow(row.id)}>Delete</button>
                </div>
            ))}

            <DevTool control={control} />
        </div>
    );
}

