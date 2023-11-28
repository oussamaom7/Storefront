import Slider from 'react-slick';
import { useState, useEffect, useRef, useCallback } from 'react';
import './slick.css';
import './slick-theme.css';
import MovieCard from '../MovieCards';
import axios from 'axios';

export const SimpleSlider = ({ initialSlide = 0 }) => {
  const [hasSetPosition, setHasSetPosition] = useState(false);
  const slider = useRef();
  const [productsData, setProductsData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProductsData = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3000/v1/products`);
      setProductsData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError("Error fetching product data: " + error.message);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProductsData();
  }, [fetchProductsData]);

  useEffect(() => {
    if (slider.current && !hasSetPosition) {
      slider.current.slickGoTo(initialSlide);
      setHasSetPosition(true);
    }
  }, [initialSlide, hasSetPosition, slider]);

  useEffect(() => {
    // Your logic that depends on productsData or isLoading can go here
    // Check for loading state and perform actions once data is loaded

    if (!isLoading) {
      // Perform actions or logic based on productsData here
    }

  }, [isLoading, productsData]);


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,

    slidesToShow: 3,
    slidesToScroll: 3,

    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {

          slidesToShow: 3,
          slidesToScroll: 3,

          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative overflow-hidden w-full">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-cover bg-center bg-color2"></div>
      </div>

      <div className="relative h-96 z-10 py-20">

        <div className="mx-auto max-w-full px-4">
          {isLoading ? (
            <div className="flex items-center justify-center ">
              {/* Render your loading spinner here */}
            </div>
          ) : (
            <Slider ref={slider} {...settings} className="relative z-10">
              {productsData.map((product) => (
                <MovieCard key={product._id} product={product} />
              ))}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
};
