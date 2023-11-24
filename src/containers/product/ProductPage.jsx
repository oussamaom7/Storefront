import React from 'react';
import wac from './wac-vs-sundowns.jpeg';
import { Typography, Button, TextField } from '@mui/material';
import './pp.css'; // You can keep your custom styles if needed

function ProductPage() {
  return (
    <div className="flex items-center">
      <div className="w-1/2 mr-4">
        <img src={wac} alt="wacvssun" className="max-w-full h-auto" />
      </div>
      <div className="w-1/2 flex flex-col">
        <Typography variant="h4" className="mb-4">LOGO</Typography>
        <Typography variant="h4" className="mb-4">Product Name</Typography>
        <Typography variant="body1" className="mb-4">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        <Typography variant="h6" className="mb-4">Price: $19.99</Typography>
        <Button variant="contained" color="primary" className="mb-4">
          Add to Cart
        </Button>
        <div className="flex items-center">
          <Typography variant="body1" className="mr-2">Quantity:</Typography>
          <TextField type="number" variant="outlined" size="small" defaultValue={1} />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
