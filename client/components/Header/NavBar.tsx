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
    <div className="flex mx-auto my-0 border-white border-2 w-9/12 justify-between">
      <div>
        <span className="text-white text-2xl self-center">DEVILKITS.COM😈</span>
      </div>
      <div>
        <ul className="bg-red-800 flex ">
          {
            categories?.map(category => (
              <li key={category.id} className="text-white">{category.name}</li>
            ))
          }
        </ul>
      </div>
      <div className="flex">
        <div className="flex">
          <span className="self-center" ><HiOutlineShoppingCart color="white" /></span>
          <h4 className="text-white self-center">Cart</h4>
        </div>
        <div className="flex  border-white border-2">
          <span className="self-center"><VscAccount color="white" /></span>
          <h4 className="text-white self-center">Account</h4>
        </div>
      </div>
    </div>
  )
}

export default NavBar