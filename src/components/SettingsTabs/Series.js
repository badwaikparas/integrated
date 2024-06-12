import React from 'react'
import TextFieldElement from '../FormElements/TextFieldElement'
import NumFieldElement from '../FormElements/NumFieldElement'
function Series() {
    return (
        <>
            <div>
                <div>
                    <div className='flex'>
                        <TextFieldElement label="INVOICE PREFIX" class="w50" />
                        <NumFieldElement label="INVOICE SERIES" class="w50" />
                    </div>
                    <div className='flex'>
                        <TextFieldElement label="PROJECT PREFIX" class="w50" />
                        <NumFieldElement label="PROJECT SERIES" class="w50" />
                    </div>
                    <div className='flex'>
                        <TextFieldElement label="PROPOSAL PREFIX" class="w50" />
                        <NumFieldElement label="PROPOSAL SERIES" class="w50" />
                    </div>
                    <div className='flex'>
                        <TextFieldElement label="EXPENSE PREFIX" class="w50" />
                        <NumFieldElement label="EXPENSE SERIES" class="w50" />
                    </div>
                    <div className='flex'>
                        <TextFieldElement label="ORDER PREFIX" class="w50" />
                        <NumFieldElement label="ORDER SERIES" class="w50" />
                    </div>
                    <div className='flex'>
                        <TextFieldElement label="PURCHASES PREFIX" class="w50" />
                        <NumFieldElement label="PURCHASES SERIES" class="w50" />
                    </div>
                    <div className='flex'>
                        <TextFieldElement label="TASK PREFIX" class="w50" />
                        <NumFieldElement label="TASK SERIES" class="w50" />
                    </div>
                    <div className='flex'>
                        <TextFieldElement label="TICKET PREFIX" class="w50" />
                        <NumFieldElement label="TICKET SERIES" class="w50" />
                    </div>
                    <div className='flex'>
                        <TextFieldElement label="DEPOSIT PREFIX" class="w50" />
                        <NumFieldElement label="DEPOSIT SERIES" class="w50" />
                    </div>
                    <div className='flex'>
                        <TextFieldElement label="INVOICE PREFIX" class="w50" />
                        <NumFieldElement label="INVOICE SERIES" class="w50" />
                    </div>

                </div>
                <div style={{ paddingTop: "15px", marginTop: "20px" }}>
                    <div className='flex'>
                        <TextFieldElement label="PRODUCT PREFIX" class="w50" />
                        <NumFieldElement label="PRODUCT SERIES" class="w50" />
                    </div>
                    <div className='flex'>
                        <TextFieldElement label="STAFF PREFIX" class="w50" />
                        <NumFieldElement label="STAFF SERIES" class="w50" />
                    </div>
                    <div className='flex'>
                        <TextFieldElement label="VENDOR PREFIX" class="w50" />
                        <NumFieldElement label="VENDOR SERIES" class="w50" />
                    </div>
                    <div className='flex'>
                        <TextFieldElement label="CUSTOMER PREFIX" class="w50" />
                        <NumFieldElement label="CUSTOMER SERIES" class="w50" />
                    </div>
                    <div className='flex'>
                        <TextFieldElement label="LEAD PREFIX" class="w50" />
                        <NumFieldElement label="LEAD SERIES" class="w50" />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Series