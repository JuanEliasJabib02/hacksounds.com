
import NavBar from "./NavBar"

const Header = () => {
  return (
    <div className=" flex flex-col w-full">
      <div className=" flex items-center justify-center	 w-full shadow-md bg-pallete_orange  h-10 ">
        <p className="text-pallete_primary text-center capitalize 
"><i className="font-normal">The first 20 copies will have 70% DISSCOUNT🔥🔥🔥</i></p>
      </div>
      < NavBar />
    </div>
  )
}

export default Header