"use client"
import { VscAccount } from "react-icons/vsc";
import { HiOutlineShoppingCart } from "react-icons/hi";
/* Remplace this import with a categories from api  */
import categories from "./dummyData";
import { useState } from 'react';


const NavBar = () => {

  /* The Navbar Has to change */
  const [isMobile, setIsMobile] = useState(false)

  return (
    <div className="bg-pallete_purple flex h-[4rem] w-full justify-center">
      <div className="">
        <span className="">
          <p className="text-pallete_black">DEVILKITS.COM</p>
        </span>
      </div>
      <div>
        <ul className="flex">
          {
            categories?.map(category => (
              <li key={category.id} className="">{category.name}</li>
            ))
          }
        </ul>
      </div>
      <div className="flex">
        <div className="">
          <span className="" ><HiOutlineShoppingCart color="white" /></span>
          <h4 className="">Cart</h4>
        </div>
        <div className="">
          <span ><VscAccount color="white" /></span>
          <h4>Account</h4>
        </div>
      </div>
    </div>
  )
}

export default NavBar