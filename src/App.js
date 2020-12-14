import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header'
import Footer from './Components/Footer/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import contate from './Pages/contate/contate.jsx';
import home from './Pages/home/home.jsx';
import sobre from './Pages/sobre/sobre';
import cadastro from './Pages/cadastro/cadastro.jsx';
import errorpage from './Pages/error/errorpage.jsx';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
            <Switch>
                <Route path="/" exact component={home} />
                <Route path="/Cadastro" component={cadastro} />
                <Route path="/Sobre" component={sobre} />
                <Route path="/contate" component={contate} />
                <Route path="*" component={errorpage} />
            </Switch>
      <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
