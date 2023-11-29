import React, { useCallback, useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Header() {

 const [categories, setCategories] = useState([]);
 const [isLoading, setIsLoading] = useState(false);
 const [error, setError] = useState('');
 const [openError, setOpenError] = useState(false);
 const [authTokens, setAuthTokens] = useState(null);

 const fetchCategories = useCallback(async () => {

    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/v1/categories", {
        headers: {
          Authorization: `Bearer ${authTokens}`,
        },
      });
      if (response.status === 200) {
        const categoryData = response.data.map(category => ({
          id: category._id,
          name: category.category_name,
        }));
        setCategories(categoryData);
        setIsLoading(false);
      } else {
        setError("Failed to fetch categories.");
        setIsLoading(false);
      }
    } catch (error) {
      setError("Error: " + error.message);
      setIsLoading(false);
      setOpenError(true);
    }
 }, [authTokens]);

 useEffect(() => {
    fetchCategories();
 }, [fetchCategories, authTokens]);

 function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
 }


 const handleLinkClick = (categoryId) => {
    setCategories(prevCategories => {
      return prevCategories.map(category => ({
        ...category,
        active: category.id === categoryId,
      }));
    });
 };

 return (
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-color0">
        {({ open }) => (
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="hidden md:block">
                 <div className="ml-10 flex items-baseline space-x-4">
                    <Link
                      to="/"
                      className={classNames(
                        'text-color1 hover:text-color2',

                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                    >
                      Accueil
                    </Link>
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        to={`/category/${category.id}`}
                        className={classNames(

                          category.active ? 'text-color2' : 'text-color1 hover:text-color2',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        onClick={() => handleLinkClick(category.id)}

                      >
                        {category.name}
                      </Link>
                    ))}

                 </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </Disclosure>
    </div>

 );
}

