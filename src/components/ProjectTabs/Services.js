import React from 'react';
import ServicesItem from './ServicesItem';

function Services() {
    const handleEdit = () => {
        alert('Edit button clicked');
    };

    const handleDelete = () => {
        alert('Delete button clicked');
    };

    return (
        <div style={{ padding: '20px' }}>
            <ServicesItem
                title="Transworld Load"
                description="Load"
                category="Transworld Load"
                qty="50"
                unit="Unit"
                amount="₹1.00"
                noTax="0.00"
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        </div>
    );
};

export default Services;
