import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CategoriePage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get("http://localhost:3000/v1/categories");
        if (response.status === 200) {
            console.log(response.data)
          setCategories(response.data);
        }
      } catch (error) {
        console.error("Error fetching categories: ", error);
      }
    }

    fetchCategories();
  }, []);

  return (
    <div className="page-container">
      {categories.map((category) => (
        <div key={category.id} className="category-container">
          <h2>{category.category_name}</h2>
          <div className="grid-container">
    
          </div>
        </div>
      ))}
    </div>
  );
}
