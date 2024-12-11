import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../redux/reducer/reducer';
import Header from './Header';

const ProductFormPage = () => {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    rawMaterials: [],
    totalCost: 0,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleAddRawMaterial = () => {
    setProduct({
      ...product,
      rawMaterials: [
        ...product.rawMaterials,
        { name: '', quantity: 0, unitPrice: 0, totalPrice: 0, tax: 0 },
      ],
    });
  };

  const handleRawMaterialChange = (index, field, value) => {
    const updatedRawMaterials = product.rawMaterials.map((material, i) => {
      if (i === index) {
        const updatedMaterial = { ...material, [field]: value };
        if (field === 'quantity' || field === 'unitPrice') {
          const totalPrice = updatedMaterial.quantity * updatedMaterial.unitPrice;
          const tax = totalPrice * 0.1;
          updatedMaterial.totalPrice = totalPrice;
          updatedMaterial.tax = tax;
        }
        return updatedMaterial;
      }
      return material;
    });

    const totalCost = updatedRawMaterials.reduce(
      (sum, mat) => sum + mat.totalPrice + mat.tax,
      0
    );

    setProduct({ ...product, rawMaterials: updatedRawMaterials, totalCost });
  };

  const handleSubmit = () => {
    dispatch(addProduct(product));
    navigate('/');
  };

  return (
    <div>
    <Header /> 
      <h1>Add Product</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleInputChange}
          placeholder="Product Name"
        />
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleInputChange}
          placeholder="Category"
        />
        <h3>Raw Materials</h3>
        {product.rawMaterials.map((material, index) => (
          <div key={index}>
            <input
              type="text"
              value={material.name}
              onChange={(e) => handleRawMaterialChange(index, 'name', e.target.value)}
              placeholder="Raw Material Name"
            />
            <input
              type="number"
              value={material.quantity}
              onChange={(e) =>
                handleRawMaterialChange(index, 'quantity', parseFloat(e.target.value))
              }
              placeholder="Quantity"
            />
            <input
              type="number"
              value={material.unitPrice}
              onChange={(e) =>
                handleRawMaterialChange(index, 'unitPrice', parseFloat(e.target.value))
              }
              placeholder="Unit Price"
            />
            <span>Total Price: {material.totalPrice}</span>
            <span>Tax: {material.tax}</span>
          </div>
        ))}
        <button type="button" onClick={handleAddRawMaterial}>
          Add Raw Material
        </button>
        <button type="button" onClick={handleSubmit}>
          Save Product
        </button>
      </form>
    </div>
  );
};

export default ProductFormPage;
