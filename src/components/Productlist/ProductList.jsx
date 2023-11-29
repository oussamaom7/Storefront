import React from 'react';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
// import { Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';

=======

// import { Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';


>>>>>>> main

const ProductList = ({ products }) => {
  const handleBuyClick = (productId) => {
    console.log(`Product ${productId} added to cart`);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-md">
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.product_image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Release Date: {product.releaseDate}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
=======


>>>>>>> main

          <div key={product.id} className="relative mb-4 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
            <h6 href="#">
              <img className="h-30 rounded-t-lg object-cover" src={product.product_image} alt={product.product_name} />
            </h6>
            {product.options && (
              <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-color2 text-center text-sm text-color1">{product.options}</span>
            )}
            <div className="mt-4 px-4 pb-5">
         
                <h6 className="text-xl font-semibold tracking-tight text-color1">{product.product_name}</h6>
             
              {/* Ratings */}
              <div className="mt-2.5 mb-5 flex items-center">
                {/* Insert your rating logic here */}
              </div>
              {/* Price and Add to Cart */}
              <div className="flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold text-color1">{`$${product.price}`}</span>
                  {product.isOnSale && <span className="text-sm text-slate-900 line-through">{`$${product.regularPrice}`}</span>}
                </p>
              <Link to={`/v1/products/${product._id}`}> <h6 href="#" className="flex items-center rounded-md bg-color2 px-5 py-2.5 text-center text-sm font-medium text-color1 hover:bg-color1 hover:text-color0 focus:outline-none focus:ring-4 focus:ring-blue-300" onClick={() => handleBuyClick(product.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Add to cart
                </h6>
                </Link> 
              </div>
            </div>

<<<<<<< HEAD
=======
>>>>>>> 265ae4ff1f839d3533a8068eb770b1ae70ba8adb
>>>>>>> main
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

