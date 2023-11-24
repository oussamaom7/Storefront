import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';

const ProductList = ({ products }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-md">
            <Card>
              <CardActionArea component={Link} to={`/products/${product.id}`}>
                <CardMedia component="img" height="200" image={product.image} alt={product.title} />
                <CardContent className="flex flex-col">
                  <div className="mb-4">
                    <Typography gutterBottom variant="h6" component="div">
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Release Date: {product.releaseDate}
                    </Typography>
                  </div>
                  <div className="mr-auto">
                    <Button variant="contained" color="primary">
                      Buy
                    </Button>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
