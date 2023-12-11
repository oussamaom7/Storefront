import React, { useState, useContext } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { PiPackageBold } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import PasswordIcon from '@mui/icons-material/Password';
import { RiImageEditLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import AuthContext from "../../context/AuthContext";

export default function ProfileSideBar() {
  const authContext = useContext(AuthContext);
  const { customer } = authContext;
  const menus = [
    { name: "Personal informations", link: "/CustomerProfile", icon: AiOutlineUser, current: true, margin: true },
    { name: "Change password", link: "/changePassword", icon: PasswordIcon },
    { name: "Orders", link: "/orders", icon: PiPackageBold }
  ];
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
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

          <div className={`relative rounded-full grid place-items-center mx-auto my-1 border-2 border-solid border-gray-500 ${open ? 'h-[100px]' : 'h-[32px]'} ${open ? 'w-[100px]' : 'w-[32px]'}`}>
            {/* image */}
            <img alt=""
              src={selectedImage || customer.customer_image }
              className="rounded-full "
              style={{ width: '100%', height: '100%' }}
            />
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
            {customer.firstName}
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