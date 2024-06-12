import React from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import Date1 from './Date1';
import Dropdown from './Dropdown';
import Row from './Row';

export function Form() {
    const form = useForm();
    const { register, control, handleSubmit, formState, setValue } = form;
    const { errors } = formState;

    function onSubmit(data) {
        console.log("Form Submitted");
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ marginRight: "50px", width: "200px" }} className='form-control'>
                        <label htmlFor="subject">Subject</label>
                        <input
                            style={{ width: "200px" }}
                            type="text"
                            id="subject"
                            {...register("subject", { required: 'Subject is Required' })}
                        />
                        <p className='error'>{errors.subject?.message}</p>
                    </div>
                    <div style={{ marginRight: "50px", width: "200px" }} className='form-control'>
                        <label htmlFor="email">Email</label>
                        <input
                            style={{ width: "200px" }}
                            type="text"
                            id="email"
                            {...register("email", {
                                required: 'Enter a valid email',
                                pattern: {
                                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                    message: "Invalid email format"
                                },
                                validate: (fieldValue) => fieldValue !== "admin@example.com" || "Enter a different email address"
                            })}
                        />
                        <p className='error'>{errors.email?.message}</p>
                    </div>
                    <div className='form-control'>
                        <label htmlFor="detail">Detail</label>
                        <input type="text" id="detail" {...register("detail")} />
                        <p className='error'>{errors.detail?.message}</p>
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <Date1 control={control} setValue={setValue} name="date1" />
                    <Date1 control={control} setValue={setValue} name="date2" />
                </div>
                <div style={{ width: "500px" }}>
                    <Dropdown control={control} setValue={setValue} name="dropdown" />
                </div>
                <button style={{ margin: "20px" }}>Submit</button>
            </form >

            <DevTool control={control} />


            <Row />
        </div >
    );
}
