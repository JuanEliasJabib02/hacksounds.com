import { categories } from "../../constants/dummyDataTracks"
const NavBar = () => {
  return (
    <div className="flex w-full border-violet-500 border-2 justify-between p-5">
      <div className="bg-red-500">
        Logo
      </div>
      <ul className="
      border-4 border-stone-500 flex w-1/2
      justify-between ">
        {
          categories?.map(category => (
            <li className="uppercase" key={category.id}>
              {category.name}
            </li>
          ))
        }
      </ul>
      <div className="bg-green-500">
        <ul className="flex">
          <li>Login</li>
          <li>Cart</li>
        </ul>
      </div>
    </div >
  )
}

export default NavBar