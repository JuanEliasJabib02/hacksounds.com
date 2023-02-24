import { VscAccount } from "react-icons/vsc";
import { HiOutlineShoppingCart } from "react-icons/hi";
/* Remplace this import with a categories from api  */
import categories from "./dummyData";

const NavBar = () => {


  return (
    <div>
      <div>
        DEVILKITS.COM
      </div>
      <div>
        <ul>
          {
            categories?.map(category => (
              <li key={category.id}>{category.name}</li>
            ))
          }
        </ul>
      </div>
      <div>
        <span><HiOutlineShoppingCart /></span>
        <h4>Account</h4>
      </div>
      <div>
        <span><VscAccount /></span>
        <h4>Account</h4>
      </div>
    </div>
  )
}

export default NavBar