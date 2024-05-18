import Link from 'next/link';
import Image from 'next/image';

import CustomButton from './CustomButton';


export const Navbar = () => {
  return (
    <header className= "w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between sm:px-16 px-6 py-6"> {/* Dimension of the nav bar*/}
        <Link href="/" className="flex justify-center items-center"> 
            <Image 
            src="/libor-logo.png" 
            alt="Libor Logo"   
            width={120} 
            height={20}
            className="object-contain"
            />
        </Link>

        <CustomButton
        title= "Training Programs"
        btnType= "button"
        containerStyles="text-primary-black rounded-full bg-white min-w-[140px] h-12"
        
        
        />
        
        <CustomButton
        title= "About me"
        btnType= "button"
        containerStyles="text-primary-black rounded-full bg-white min-w-[140px] h-12"
        
        
        />

        
 
        </nav>
        </header>
  )
}

export default Navbar