// src/components/ProductServiceList.js
import React from 'react';

const ProductServiceList = ({ products, onProductChange, addProduct, removeProduct }) => {
    const handleProductChange = (index, name, value) => {
        const newProduct = { ...products[index], [name]: value };
        onProductChange(index, newProduct);
    };

    return (
        <div className="product-service-list">
            <table>
                <thead>
                    <tr>
                        <th>Product / Service</th>
                        <th>Description</th>
                        <th>QTY</th>
                        <th>Unit</th>
                        <th>Price</th>
                        <th>NO TAX</th>
                        <th>Discount</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>New</td>
                            <td>
                                <input
                                    type="text"
                                    value={product.description}
                                    onChange={(e) => handleProductChange(index, 'description', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={product.qty}
                                    onChange={(e) => handleProductChange(index, 'qty', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={product.unit}
                                    onChange={(e) => handleProductChange(index, 'unit', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={product.price}
                                    onChange={(e) => handleProductChange(index, 'price', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={product.tax}
                                    onChange={(e) => handleProductChange(index, 'tax', e.target.checked)}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={product.discount}
                                    onChange={(e) => handleProductChange(index, 'discount', e.target.value)}
                                />
                            </td>
                            <td>{(product.qty * product.price * (1 - product.discount / 100)).toFixed(2)}</td>
                            <td><button onClick={() => removeProduct(index)}>Remove</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button type="button" onClick={addProduct}>Add Product/Service</button>
        </div>
    );
};

export default ProductServiceList;
