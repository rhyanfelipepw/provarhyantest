import '../../Style/Header.css';
import  Logo from  '../../Img/soft.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Header() {
  return (
    <div className="Header">
        <div className="logo">
        <a href="#">
        <img src={Logo} width="60px" />
        </a>
        </div>
    <div className="navbar">
        <Router>
        <div>
              <ul>
                <li>
                      <Link to="/">Home</Link>
                 </li>
                   <li>
                   <Link to="/Cadastro">Cadastro</Link>
                 </li>
                 <li>
                   <Link to="/Sobre">Sobre</Link>
                 </li>
                 <li>
                   <Link to="/contate">Contate</Link>
                 </li>
                 </ul>
             </div>
</Router>
    </div>

    </div>

  );
}

export default Header;
