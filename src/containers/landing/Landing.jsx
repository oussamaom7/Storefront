import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import SectionPrincipale from "../../components/section/sectionPrincipale";
import Footer from "../../components/Footer";
import axios from "axios";
import ProductList from "../../components/Productlist/ProductList";
import { SimpleSlider } from "../../components/simpleSlider/banner";

export default function Landing() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchActive, setSearchActive] = useState(false);

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
      <Navbar setSearchActive={setSearchActive} setSearchResults={setSearchResults} />
      <hr />
      <Header />
      {!searchActive && (
        <>
         
          <div className="max-w-full ">
            <div className="mb-16 bg-color5">
            <SectionPrincipale />
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
        </>
      )}

      {searchActive && (
        <div className="max-w-full">
          <div className="mb-16">
            <ProductList products={searchResults} />
          </div>
        </div>
      )}
    </div>
  );
}
