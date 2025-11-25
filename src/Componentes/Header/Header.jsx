
import  Navbar  from "../Navbar/Navbar.jsx";
import { Link } from "react-router-dom";



export const Header = () => {
  return (
    <header>
      <Link to={"/"}>
      <img src="/images/logo.png" alt="logo-panaderia" />
      <h1 className="logo-panaderia">Panaderia</h1>
      </Link>
      <Navbar />
    </header>
  );
};