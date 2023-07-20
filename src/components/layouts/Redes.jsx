import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faFacebook, faWhatsapp, faInstagram);

const Redes = () => {
  return (
    <section>
      <section className="redes">
        <Link
          to={"https://www.facebook.com/profile.php?id=100009602173775"}
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} className="icono-facebook" />
        </Link>
        <Link
          to={"https://wa.me/+573016365181"}
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="icono-whatsapp" />
        </Link>
        <Link
          to={"https://instagram.com/milydc93?igshid=MzNlNGNkZWQ4Mg=="}
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="icono-instagram" />
        </Link>
      </section>
    </section>
  );
};

export default Redes;
