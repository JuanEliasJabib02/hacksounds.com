"use client"
import { VscAccount } from "react-icons/vsc";
import { TiShoppingCart } from "react-icons/ti";
/* Remplace this import with a categories from api  */
import categories from "./dummyData";
import { useState } from 'react';


const NavBar = () => {

  /* The Navbar Has to change */
  const [isMobile, setIsMobile] = useState(false)

  return (
    <div className="bg-pallete_yellow flex h-[4rem] w-full ">
      <div className="bg-[red] w-[20%] flex justify-center items-center">
        <p className="text-pallete_black">hackdrums.com</p>
      </div>
      <div className="bg-[purple] grow flex justify-center items-center">
        <ul className="flex gap-7">
          {
            categories?.map(category => (
              <li key={category.id} className="">{category.name}</li>
            ))
          }
        </ul>
      </div>
      <div className="flex bg-[yellow] w-[20%] items-center justify-evenly">
        <div className="">
          <span className="" ><TiShoppingCart color="black" /></span>
          <h4 className="">Cart</h4>
        </div>
        <div className="">
          <span ><VscAccount color="black" /></span>
          <h4>Account</h4>
        </div>
      </div>
    </div>
  )
}

export default NavBar