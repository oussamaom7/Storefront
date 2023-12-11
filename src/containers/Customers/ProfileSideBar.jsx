import React, { useState, useContext } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { PiPackageBold } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import PasswordIcon from '@mui/icons-material/Password';
import { RiImageEditLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import AuthContext from '../../context/AuthContext';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ProfileSideBar({customerImage}) {

  const authContext = useContext(AuthContext);
  const { authTokens, customer } = authContext; // Make sure 'customer' is available
  const menus = [
    { name: "Personal informations", link: "/CustomerProfile", icon: AiOutlineUser, current: true, margin: true },
    { name: "Change password", link: "/changePassword", icon: PasswordIcon },
    { name: "Orders", link: "/orders", icon: PiPackageBold }
  ];
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleImageChange = async (event) => {
    try {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);

        const formData = new FormData();
        formData.append('customer_image', file);

        const response = await axios.post('http://localhost:3000/v1/customers/profile/update/image', formData, {
          headers: {
            Authorization: `Bearer ${authTokens?.access_token}`,
          },
        });
        
        toast.success(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        setError('Something went wrong. Please try again.');
      }

    }
  };

  return (
    
    <section className="flex gap-6">
      <div
        className={`bg-gray-900 min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">

          <span onClick={()=>{
            console.log(customer)
          }}>hello</span>
          <div className={`relative rounded-full grid place-items-center mx-auto bg-gray-500 uppercase text-gray-50 my-1 border-2 border-solid border-gray-500 ${open ? 'h-[100px]' : 'h-[32px]'} ${open ? 'w-[100px]' : 'w-[32px]'}`}>
            {/* image */}
            {(customerImage || selectedImage) ? <img
              src={customerImage || selectedImage }  
             // src={{uri:customer?.customer_image}}
              alt="Customer Profile"
              className="rounded-full aspect-square object-cover"
              style={{ width: '100%', height: '100%' }}
            /> : customer.firstName[0]
          
          }
            

            {/* mini badge */}
            <label htmlFor="imageInput" className={`bg-gray-600  w-9 grid place-items-center hover:scale-110 transition-transform cursor-pointer ${!open && 'hidden'} aspect-square rounded-full absolute right-0 bottom-0`}>
              <RiImageEditLine />
            </label>
          </div>
          <input type="file" id="imageInput" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />

          <Typography
            align="center"
            sx={{ fontSize: open ? 17 : 0, transition: "0.25s" }}
          >

            {customer?.firstName} {/* Make sure 'customer' is available */}

          </Typography>
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-6"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
