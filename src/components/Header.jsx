import React, { useCallback, useEffect, useState } from 'react';
import { Disclosure } from "@headlessui/react";
// import { MenuIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Header() {

 const [categories, setCategories] = useState([]);
 const [isLoading, setIsLoading] = useState(false);
 const [error, setError] = useState('');
 const [openError, setOpenError] = useState(false);


 const fetchCategories = useCallback(async () => {

    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/v1/categories");
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
 }, []);

 useEffect(() => {
    fetchCategories();
 }, [fetchCategories]);

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
                      'text-color2 hover:text-black',
                      'rounded-md px-3 py-2 text-sm font-bold'
                    )}
                  >
                    Accueil
                  </Link>
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/category/${category.id}`}
                      className={classNames(
                        category.active ? 'text-color2' : 'text-black hover:text-color2',
                        'rounded-md px-3 py-2 text-sm font-bold'
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