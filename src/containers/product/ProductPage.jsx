import React from 'react';
import wac from './wac-vs-sundowns.jpeg';
import { Typography, Button, TextField } from '@mui/material';
import './pp.css'; // You can keep your custom styles if needed

function ProductPage() {
  return (
    <div className="flex flex-col items-center">
      <Typography variant="h3" className="mb-4">Product Details</Typography>
      <div className="flex items-center justify-between">
        <div className="w-1/2 mr-4">
          <img src={wac} alt="wacvssun" className="max-w-full h-auto" />
        </div>
        <div className="w-1/2 flex flex-col">
          <Typography variant="h4" className="mb-2">LOGO</Typography>
          <Typography variant="h4" className="mb-2">Date of Event</Typography>
          <Typography variant="body1" className="mb-2">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          <Typography variant="h6" className="mb-2">Price: $19.99</Typography>
          <div className="flex items-center mb-2">
            <Typography variant="body1" className="mr-2">Quantity:</Typography>
            <TextField type="number" variant="outlined" size="small" defaultValue={1} />
          </div>
        </div>
      </div>
      <Button variant="contained" style={{ width: '200px' }} color="primary" size="medium" className="mt-4 p-2 self-end">
        Add to Cart
      </Button>
    </div>
  );
}

export default ProductPage;
