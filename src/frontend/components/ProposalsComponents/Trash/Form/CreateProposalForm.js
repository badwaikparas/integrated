// src/components/CreateProposalForm.js
import React, { useState } from 'react';
import TextInput from './TextInput';
import Dropdown from './DropDown';
import DatePicker from './DatePicker';
import ProductServiceList from './ProductServiceList';

const CreateProposalForm = () => {
    const [formState, setFormState] = useState({
        subject: '',
        lead: '',
        assigned: '',
        status: '',
        dateOfIssuance: '',
        openTill: '',
        products: [{ description: '', qty: 1, unit: 'Unit', price: 0, tax: false, discount: 0 }],
    });

    const handleInputChange = (name, value) => {
        setFormState({ ...formState, [name]: value });
    };

    const handleProductChange = (index, product) => {
        const newProducts = [...formState.products];
        newProducts[index] = product;
        setFormState({ ...formState, products: newProducts });
    };

    const addProduct = () => {
        setFormState({
            ...formState,
            products: [...formState.products, { description: '', qty: 1, unit: 'Unit', price: 0, tax: false, discount: 0 }],
        });
    };

    const removeProduct = (index) => {
        const newProducts = formState.products.filter((_, i) => i !== index);
        setFormState({ ...formState, products: newProducts });
    };

    return (
        <form>
            <h2>Create Proposal</h2>
            <TextInput
                label="Subject"
                value={formState.subject}
                onChange={(value) => handleInputChange('subject', value)}
            />
            <Dropdown
                label="Lead"
                value={formState.lead}
                onChange={(value) => handleInputChange('lead', value)}
                options={[]} // Add options here
                required
            />
            <TextInput
                label="Assigned"
                value={formState.assigned}
                onChange={(value) => handleInputChange('assigned', value)}
                required
            />
            <Dropdown
                label="Status"
                value={formState.status}
                onChange={(value) => handleInputChange('status', value)}
                options={[]} // Add options here
                required
            />
            <DatePicker
                label="Date of Issuance"
                value={formState.dateOfIssuance}
                onChange={(value) => handleInputChange('dateOfIssuance', value)}
            />
            <DatePicker
                label="Open Till"
                value={formState.openTill}
                onChange={(value) => handleInputChange('openTill', value)}
            />
            <ProductServiceList
                products={formState.products}
                onProductChange={handleProductChange}
                addProduct={addProduct}
                removeProduct={removeProduct}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default CreateProposalForm;
