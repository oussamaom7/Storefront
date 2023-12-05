import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { SimpleSlider } from "../../components/simpleSlider/banner";
import ProductList from "../../components/Productlist/ProductList";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";

export default function Landing() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("http://localhost:3000/v1/products");
        if (response.status === 200) {
          setProducts(response.data);
        } else {
          setError("Failed to fetch products.");
        }
      } catch (error) {
        setError("Error: " + error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-color0 min-h-screen">
      <Navbar />
      <hr />
      <Header />
      <div className="max-w-full">
        {" "}
        {/* Change max-w-7xl to max-w-full */}
        <div className="mb-16">
          <SimpleSlider />
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div>
            <ProductList products={products} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
