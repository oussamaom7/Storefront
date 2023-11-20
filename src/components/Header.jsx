import { useCallback, useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Header() {
  const [categories, setCategories] = useState([]);
  const [/* isLoading */, setIsLoading] = useState(false);
  const [/* error */, setError] = useState('');
  const [/* openError */, setOpenError] = useState(false);
  const [authTokens, /* setAuthTokens */] = useState(null); // Initialize authTokens appropriately

  const fetchCategories = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:3000/v1/categories", {
        headers: {
          Authorization: `Bearer ${authTokens}`, // Include authTokens in the header
        },
      });
      if (response.status === 200) {
        const categoryData = response.data.map(category => ({
          id: category._id,
          name: category.category_name, // Adjust the key name to match your API response
        }));
        setCategories(categoryData); // Update categories state with fetched data
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

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-slate-400">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0"></div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {categories.map((category) => (
                          <Link
                            key={category.id}
                            to={`/category/${category.id}`} // Assuming you have a route for individual categories
                            className={classNames(
                              'text-gray-500 hover:bg-blue-500 hover:text-white', // Adjust hover color as needed
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Contact Us link on the right side */}
                  <div className="flex items-center">
                    <Link
                      to="/contact"
                      className={classNames(
                        'text-gray-500 hover:bg-blue-500 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </Disclosure>

        <main>
          <div id="contact" className="mx-auto max-w-7xl  sm:px-6 lg:px-8">
            {/* Your contact us content goes here */}
          </div>
        </main>
      </div>
    </>
  );
}
