
import Image from "next/image"
import newDrumkitHero from "./assets/new-drumkit.png"
const Hero = () => {



  return (
    <div className="w-full bg-pallete_black h-[28rem]">
      <div>
        < Image src={newDrumkitHero} alt="hero" />
      </div>
      <div>
        <div className="bg-pallete_purple w-[40rem]">
          <p className="text-pallete_black"> NEW FREEPACK!! </p>
        </div>
        <p className="text-pallete_purple">Free Melodies, OneShots, Drums, MIDI & more</p>
      </div>
    </div>
  )
}

export default Hero