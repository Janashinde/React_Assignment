import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../redux/reducer/reducer';
import Header from './Header';

const ProductListPage = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', fontFamily: 'Arial, sans-serif' }}>
    <Header /> 
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Product List</h1>
      <Link to="/add-product">
        <button
          style={{
            padding: '10px 15px',
            fontSize: '16px',
            color: '#fff',
            backgroundColor: '#007bff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginBottom: '20px',
          }}
        >
          Add Product
        </button>
      </Link>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          textAlign: 'left',
          marginBottom: '20px',
        }}
      >
        <thead>
          <tr>
            <th style={{ padding: '10px', border: '1px solid #ccc', backgroundColor: '#f9f9f9' }}>
              Name
            </th>
            <th style={{ padding: '10px', border: '1px solid #ccc', backgroundColor: '#f9f9f9' }}>
              Category
            </th>
            <th style={{ padding: '10px', border: '1px solid #ccc', backgroundColor: '#f9f9f9' }}>
              Total Cost
            </th>
            <th style={{ padding: '10px', border: '1px solid #ccc', backgroundColor: '#f9f9f9' }}>
              Raw Materials
            </th>
            <th style={{ padding: '10px', border: '1px solid #ccc', backgroundColor: '#f9f9f9' }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, index) => (
              <tr key={index}>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>{product.name}</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>{product.category}</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>{product.totalCost}</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>{product.rawMaterials.length}</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                  <Link to={`/edit-product/${index}`}>
                    <button
                      style={{
                        padding: '5px 10px',
                        fontSize: '14px',
                        color: '#fff',
                        backgroundColor: '#28a745',
                        border: 'none',
                        borderRadius: '3px',
                        marginRight: '5px',
                        cursor: 'pointer',
                      }}
                    >
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(index)}
                    style={{
                      padding: '5px 10px',
                      fontSize: '14px',
                      color: '#fff',
                      backgroundColor: '#dc3545',
                      border: 'none',
                      borderRadius: '3px',
                      cursor: 'pointer',
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                style={{
                  textAlign: 'center',
                  padding: '20px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9f9f9',
                }}
              >
                No products available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductListPage;
