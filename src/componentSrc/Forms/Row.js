import React from 'react'
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

export function Row() {
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
                <div style={{ display: "flex", width: "100%" }}>
                    <div style={{}} className='form-control'>
                        <label htmlFor="Product/Service">Product / Service</label>
                        <input
                            style={{}}
                            type="text"
                            id="subject"
                            {...register("Product / Service", { required: 'Product / Service' })}
                        />
                        <p className='error'>{errors.subject?.message}</p>
                    </div>
                    <div style={{}} className='form-control'>
                        <label htmlFor="Description">Description</label>
                        <input
                            style={{}}
                            type="text"
                            id="Description"
                            {...register("Description")}
                        />
                    </div>
                    <div style={{}} className='form-control'>
                        <label htmlFor="QTY">QTY</label>
                        <input
                            style={{}}
                            type="number"
                            id="QTY"
                            defaultValue={0}
                            {...register("QTY", { required: 'QTY is Required' })}
                        />
                        <p className='error'>{errors.QTY?.message}</p>
                    </div>
                    <div style={{}} className='form-control'>
                        <label htmlFor="subject">UNIT</label>
                        <input
                            style={{}}
                            type="text"
                            id="UNIT"
                            {...register("UNIT", { required: 'UNIT is Required' })}
                        />
                        <p className='error'>{errors.UNIT?.message}</p>
                    </div>
                    <div style={{}} className='form-control'>
                        <label htmlFor="PRICE">PRICE</label>
                        <input
                            style={{}}
                            type="number"
                            id="PRICE"
                            defaultValue={0}
                            {...register("PRICE", { required: 'PRICE is Required' })}
                        />
                        <p className='error'>{errors.PRICE?.message}</p>
                    </div>
                    <div style={{}} className='form-control'>
                        <label htmlFor="NO TAX">NO TAX</label>
                        <input
                            style={{}}
                            type="number"
                            defaultValue={0}
                            id="NO TAX"
                            {...register("NO_TAX")}
                        />
                        <p className='error'>{errors.NO_TAX?.message}</p>
                    </div>
                    <div style={{}} className='form-control'>
                        <label htmlFor="DISCOUNT">DISCOUNT</label>
                        <input
                            style={{}}
                            type="number"
                            defaultValue={0}
                            id="DISCOUNT"
                            {...register("DISCOUNT", { required: 'DISCOUNT is Required' })}
                        />
                        <p className='error'>{errors.DISCOUNT?.message}</p>
                    </div>
                    <div style={{}} className='form-control'>
                        <label htmlFor="TOTAL">TOTAL</label>
                        <input
                            style={{}}
                            type="text"
                            defaultValue={0}
                            id="TOTAL"
                            {...register("TOTAL", { required: 'TOTAL is Required' })}
                        />
                        <p className='error'>{errors.TOTAL?.message}</p>
                    </div>
                </div>
            </form >
            <DevTool control={control} />
        </div >
    );
}

export default Row