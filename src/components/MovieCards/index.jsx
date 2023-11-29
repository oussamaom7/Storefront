import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const MovieCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card
            sx={{
<<<<<<< HEAD
                maxWidth: 250,
=======

                maxWidth: 380,

>>>>>>> main
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Box
                sx={{
                    position: 'relative',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <CardMedia
                    component="img"
                    height="200px"
                    image={product.product_image}
                    alt={product.product_name}
                    // sx={{
                    //     height: "100px",
                    //     objectFit: "cover",
                    // }}
                />
              
                <Box
                    className="overlayButton"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) scale(${isHovered ? 1 : 0})`,
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        borderRadius: '4px',
                        opacity: isHovered ? 1 : 0,
                        transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: "100%",
                        width: "100%",
                        padding: '8px 16px',
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#ACA7CB',
                            '&:hover': {
                                backgroundColor: '#474554',
                            },
                        }}
                    >
                        Acheter
                    </Button>
                </Box>
            </Box>
        </Card>
    );
};

MovieCard.propTypes = {
    product: PropTypes.shape({
        product_image: PropTypes.string.isRequired,
        product_name: PropTypes.string.isRequired,
        // Add other necessary propTypes for the product object
    }).isRequired,
};

export default MovieCard;
