import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

export const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t
    border-gray-100">
        <div className= "flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-6"> {/* Dimension of the footer*/}  
            <div className="flex flex-col justify-start items-start gap-6">
                <Image src="/libor-logo.png" alt="Libor Logo" width={120} height={20} className="object-contain"/>
                <p className="text-base text-gray-700">
                    Get your plan today <br />
                    </p>
            </div>
            <div className="footer__links">
                {footerLinks.map((link) => (
                    <div key={link.title}
                    className="footer__link">
                       <h3 className="font-bold">{link.title}</h3>
                       
                       {link.links.map((item) => (
                        <Link
                        key={item.title}
                        href={item.url}
                        className="text-gray-500"
                        >
                            {item.title}
                        </Link>
                          ))}
            </div>
            ))}
        </div>
    </div>
         


    </footer>
  )
}


export default Footer
