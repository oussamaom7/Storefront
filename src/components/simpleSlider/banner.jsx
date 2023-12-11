import Slider from "react-slick";
import { useState, useEffect, useRef, useCallback } from "react";
import "./slick.css";
import "./slick-theme.css";
import MovieCard from "../MovieCards";
import axios from "axios";

export const SimpleSlider = ({ initialSlide = 0 }) => {
  const [hasSetPosition, setHasSetPosition] = useState(false);
  const slider = useRef();
  const [productsData, setProductsData] = useState([]);
<<<<<<< HEAD
  const [, /* error */ setError] = useState(null);
=======
  const [/* error */, setError] = useState(null);
>>>>>>> 8f577f3ba5ab56aa5df6137a12d867ef5e191584
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
          slidesToShow: 1,
          slidesToScroll:1,
          initialSlide: 1,
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
      <div className="absolute inset-0 z-0  opacity-95 p-5">
        <div
          class="w-full h-full bg-cover bg-center rounded-3xl"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            objectFit: "cover",
            opacity: 0.8, // Opacité ajustée à un nombre entre 0 et 1
          }}
        ></div>
      </div>

      <div className="relative h-96 z-10 py-20">
        <div className="mx-auto max-w-full">
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
