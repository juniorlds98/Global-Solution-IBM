import { BsBootstrap, BsHouse, BsSpeedometer2, BsTable, BsGrid } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark text-white">
      <div className="">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <img src="src/assets/Icone.png" alt="Logo" width="150"/>
          </a>
          <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="*" className="nav-link px-2 text-white d-flex flex-column align-items-center">
                <BsHouse className="me-1" />
                <span>Home</span>
            </a>
            </li>
            <li>
              <a href="/dashboard" className="nav-link px-2 text-white d-flex flex-column align-items-center">
                <BsSpeedometer2 className="me-1" />
                Dashboard
              </a>
            </li>
            <li>
              <Link to="/sensores" className="nav-link px-2 text-white d-flex flex-column align-items-center">
                <BsTable className="me-1" />
                Sensores
              </Link>
            </li>
            <li>
              <a href="/mapa-expandido" className="nav-link px-2 text-white d-flex flex-column align-items-center">
                <BsGrid className="me-1" />
                Mapa
              </a>
            </li>
            <li>
              <a href="/login" className="nav-link px-2 text-white d-flex flex-column align-items-center">
                <IoMdPerson className="me-1" />
                Sair
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

