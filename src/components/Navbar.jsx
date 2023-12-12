


import React,{ Fragment,useContext,useState } from 'react'

import { Disclosure, Menu, Transition } from '@headlessui/react'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext'
import { LuShoppingCart } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi";

import { useShoppingCart } from "../context/ShoppingCartContext";
import Logonavbar from "../assets/Logonabvar.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ setSearchActive,setSearchResults}) {
  const authContext = useContext(AuthContext);
  const { authTokens, logoutCustomer, customer } = authContext;
  const { openCard, cartQuantity } = useShoppingCart();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault(); 
    try {
      const response = await fetch(`http://localhost:3000/v1/products?query=${searchQuery}`);
      const data = await response.json();
      console.log("Search Results:", data);
      setSearchResults(data); 
      setSearchActive(true);
    } catch (error) {
      console.error("Error searching products:", error);
    }
  };
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    if (!e.target.value.trim()) {
      setSearchResults([]); 
      setSearchActive(false);
    }
  };
  const handleLogout = () => {
    logoutCustomer(); // Call the logout function when "Sign out" is clicked
  };

  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 relative flex h-16 items-center justify-between">
            {/* {logo} */}
            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-auto w-36 opacity mb-1"
                  src={Logonavbar}
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block"></div>
            </div>
            {/* {search bar} */}
            <div className="hidden sm:flex sm:ml-6 ">
              <div className="relative mx-auto text-color1">
              <form onSubmit={handleSearch}>
                <input
                  className="border-[1px] border-color2 bg-color0 h-9 w-96 px-5 pr-16 rounded-full text-c1 text-sm focus:outline-none"
                  type="search"
                  name="search"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleInputChange}
                />
                <button type="submit" className="absolute right-3 mt-1" >
                  {/* You can use a search icon here */}
                  <SearchIcon style={{ fill: "#FF6C22" }} />
                </button>
                </form>
              </div>

            </div>
            {authTokens ? (
              <div className="absolute inset-y-0 right-0 flex items-center gap-4 justify-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                <div className='relative text-white text-xs cursor-pointer ' onClick={openCard}> <LuShoppingCart className='w-11 h-8'/>
                <label  className={`bg-color2 w-4 h-4 grid place-items-center  rounded-full absolute right-0 top-0`}>
                {cartQuantity}
            </label>
                </div>
                

                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-color1 text-sm focus:outline-none">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <div className={`relative rounded-full h-11 w-11 grid place-items-center mx-auto bg-gray-500 uppercase text-gray-50  border-2 border-solid border-gray-500`}>
              <img
              src={customer.customer_image }  
              alt="Customer Profile"
              className="rounded-full aspect-square object-cover"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-color0 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/CustomerProfile">
                            {" "}
                            <h6
                              href="#"
                              className={classNames(
                                active ? "bg-color2 text-white" : "",
                                "block px-4 py-1 text-sm text-color1 cursor-pointer" // Added cursor-pointer class
                              )}
                            >
                              Your Profile
                            </h6>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <h6
                            onClick={handleLogout}
                            className={classNames(
                              active ? "bg-color2 text-white" : "",
                              "block px-4 py-1 text-sm text-color1 cursor-pointer" // Added cursor-pointer class
                            )}
                          >
                            Sign out
                          </h6>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            ) : (
              <div className="items-center justify-between ">
                <Link to="/login">
                  {" "}
                  <button className="text-color0 rounded-full px-5 py-2 mr-2 text-sm font-medium bg-color2  hover:bg-white hover:border-2 hover:text-color2 hover:border-color2">
                    LOG IN{" "}
                  </button>
                </Link>
                <Link to="/signup">
                <button className=" rounded-full px-5 py-2 text-sm font-medium text-white bg-color2 hover:bg-white  hover:text-color2 hover:border-2 hover:border-color2">
                  SIGN UP{" "}
                </button>
                </Link>
              
              </div>
            )}
          </div>
        </>
      )}
    </Disclosure>
  );
}
