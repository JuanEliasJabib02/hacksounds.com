import NavBar from "./NavBar"
const Header = () => {
  return (
    <div className="flex flex-col w-full ">
      <div className="bg-black p-4">
        <p className="text-white text-center">
          Welcome to our store
        </p>
      </div>
      < NavBar />
    </div>
  )
}

export default Header