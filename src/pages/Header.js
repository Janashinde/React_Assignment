import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: '#007bff',
        padding: '15px 20px',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h1 style={{ margin: 0, fontSize: '24px' }}>Product Management</h1>
      <nav>
        <Link
          to="/"
          style={{
            color: '#fff',
            textDecoration: 'none',
            marginRight: '15px',
            fontSize: '18px',
          }}
        >
          Home
        </Link>
        <Link
          to="/add-product"
          style={{
            color: '#fff',
            textDecoration: 'none',
            marginRight: '15px',
            fontSize: '18px',
          }}
        >
          Add Product
        </Link>
        <Link
          to="/about"
          style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '18px',
          }}
        >
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
