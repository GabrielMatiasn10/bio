import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import {BiLogoLinkedin} from "react-icons/bi";


function Footer() {
  return (
    <div>
    <footer>
    <a href="https://www.instagram.com/gabrielmatiasn10/" target="_blank"> <BsInstagram/> </a>
    <a href="Https://wa.me/5581989824985" target="_blank"> <BsWhatsapp/> </a>
    <a href="https://www.linkedin.com/in/gabriel-matias-dev/" target="_blank"> <BiLogoLinkedin/> </a>
    
    </footer>
    <h5>
        @2023 Gabriel Matias
    </h5>
    </div>
    
  );
}

export default Footer;