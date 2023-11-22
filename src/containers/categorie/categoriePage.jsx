import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProductList from '../../components/Productlist/ProductList';

export default function CategoriePage() {
  const [subcategories, setSubcategories] = useState([]);
  const [subcategoryProducts, setSubcategoryProducts] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories
        const categoriesResponse = await axios.get(`http://localhost:3000/v1/categories/${id}/subcategories`);
        
        if (categoriesResponse.status === 200) {
          console.log(categoriesResponse.data);
          setSubcategories(categoriesResponse.data);
  
          // Fetch products for each subcategory and associate them
          const subcategoryProductsData = {};
          await Promise.all(
            categoriesResponse.data.map(async (subcategory) => {
              const productsResponse = await axios.get(`http://localhost:3000/v1/subcategories/${subcategory._id}/products`);
              if (productsResponse.status === 200) {
                subcategoryProductsData[subcategory._id] = productsResponse.data;
              }
            })
          );
          setSubcategoryProducts(subcategoryProductsData);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="page-container">
      {subcategories.map((subcategory) => (
        <div key={subcategory._id} className="category-container">
          <h2>{subcategory.subcategory_name}</h2>
          <div className="grid-container">
            <ProductList products={subcategoryProducts[subcategory._id] || []} />
          </div>
        </div>
      ))}
    </div>
  );
}
