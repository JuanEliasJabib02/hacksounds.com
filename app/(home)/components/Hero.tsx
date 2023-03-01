
import Image from "next/image"
import newDrumkitHero from "./assets/new-drumkit.png"
const Hero = () => {

  return (
    <div className="w-full flex bg-pallete_secondary h-[28rem] justify-center">
      <div >
        < Image className="bg-pallete_secondary rounded-lg" src={newDrumkitHero} alt="hero" width={370} height={370} />
      </div>
      <div>
        <div className="bg-pallete_primary w-[40rem]">
          <p className="text-pallete_black"> NEW FREE DRUMKIT !! </p>
        </div>
        <p className="text-pallete_yellow">Sound good is easy with good sounds</p>
      </div>
    </div>
  )
}

export default Hero