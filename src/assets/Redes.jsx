import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import {BiLogoLinkedin} from "react-icons/bi";

function Redes() {
  return (
    <><div className="Redes">
        <a href="https://www.instagram.com/gabriel_matiias7/" target="_blank"> <BsInstagram /> </a>
        <a href="Https://wa.me/5581989824985" target="_blank"> <BsWhatsapp /> </a>
        <a href="https://www.linkedin.com/in/gabriel-matias-dev/" target="_blank"> <BiLogoLinkedin /> </a>
    </div>
    <div className="footer">
        <h5>
          @2023 Gabriel Matias
        </h5>
      </div></>
  );
}

export default Redes;