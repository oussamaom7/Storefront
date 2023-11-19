import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { PiPackageBold } from "react-icons/pi";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
// import { TbLogout2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { Typography } from "@mui/material";

export default function ProfileSideBar () {
  const menus = [
    { name: "Profile", link: "/", icon: AiOutlineUser, current:true },
    { name: "Orders", link: "/", icon: PiPackageBold },
    { name: "Favorites", link: "/", icon: AiOutlineHeart },
    // { name: "Log out", link: "/", icon: TbLogout2 , margin: true},
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
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
        <Avatar
            sx={{
              mx: "auto",
              width: open ? 88 : 30,
              height: open ? 88 : 30,
              my: 1,
              border: "2px solid grey",
              transition: "0.25s",
            }}
            alt="Rabie"
            src="https://th.bing.com/th/id/R.7c84020e9c547342ae5caddaf20bb9a1?rik=T21i5xp7DTdJiA&riu=http%3A%2F%2Fbalic.fr%2Fwp-content%2Fuploads%2F2018%2F02%2Fphoto-enfant-Garçon-6.jpg&ehk=VzdkFRp4UqnClaEFWjTY2F9uWcWne56KamVjr0qxGUU%3D&risl=&pid=ImgRaw&r=0"
          />
          <Typography
            align="center"
            sx={{ fontSize: open ? 17 : 0, transition: "0.25s" }}
          >
            {" "}
            Customer Name{" "}
          </Typography>{" "}
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-72"
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
};

