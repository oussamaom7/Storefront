import React,{ Fragment,useContext } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { /* Bars3Icon, */ BellIcon, /* XMarkIcon */ } from '@heroicons/react/24/outline'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const authContext = useContext(AuthContext);
  const { authTokens,logoutCustomer } = authContext;
  const handleLogout = () => {
    logoutCustomer(); // Call the logout function when "Sign out" is clicked
  };
  return (
    <Disclosure as="nav" className="bg-color0">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 relative flex h-16 items-center justify-between">
            {/* {logo} */}
              <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
        
                </div>
              </div>
              {/* {search bar} */}
               <div className="hidden sm:flex sm:ml-6 ">
                <div className="relative mx-auto text-color1">
                  <input
                    className="border-2 border-color2 bg-color0 h-10 w-96 px-5 pr-16 rounded-full text-c1 text-sm focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Search"
                  />
                  <button type="submit" className="absolute right-2 mt-2 ">
                    {/* You can use a search icon here */}
                    <SearchIcon style={{ fill: '#ACA7CB' }}/>
                    
                  </button>
                </div>
              </div>
              {/* {log in and sign up} */}
              {authTokens? (<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-color0 p-1 text-c1 hover:text-color1 focus:outline-none"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-color1 text-sm focus:outline-none">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
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
    <h6
      href="#"
      className={classNames(
        active ? 'bg-color2' : '',
        'block px-4 py-1 text-sm text-color1 cursor-pointer' // Added cursor-pointer class
      )}
    >
      Your Profile
    </h6>
  )}
</Menu.Item>
<Menu.Item>
  {({ active }) => (
    <h6
      href="#"
      className={classNames(
        active ? 'bg-color2' : '',
        'block px-4 py-1 text-sm text-color1 cursor-pointer' // Added cursor-pointer class
      )}
    >
      Settings
    </h6>
  )}
</Menu.Item>
<Menu.Item>
  {({ active }) => (
    <h6
      onClick={handleLogout}
      className={classNames(

        active ? 'bg-color2' : '',
        'block px-4 py-1 text-sm text-color1 cursor-pointer' // Added cursor-pointer class

      )}
    >
      Sign out
    </h6>
  )}
</Menu.Item>

                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>):
              (<div className='items-center justify-between '>
             <Link to="/login">  <button className='text-c1 rounded-full px-5 py-2 mr-2 text-sm font-medium bg-color2 hover:text-white'>
                LOG IN </button></Link> 
                <button className= 'text-c1 rounded-full px-5 py-2 text-sm font-medium bg-color2 hover:text-white'>
                SIGN UP </button>
              </div>)}

            </div>
        </>
      )}
    </Disclosure>
  )
}
