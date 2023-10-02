import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";


function Footer() {
  return (
    <div>
    <footer>
    <a href="https://www.instagram.com/gabrielmatiasn10/" target="_blank"> <BsInstagram/> </a>
    <a href="https://api.whatsapp.com/send?phone=551195003-9320&text=Ol%C3%A1%20Gabriel%20Matias%2C%20tudo%20bem%3F%20" target="_blank"> <BsWhatsapp/> </a>
    </footer>
    <h5>@</h5>
    </div>
    
  );
}

export default Footer;