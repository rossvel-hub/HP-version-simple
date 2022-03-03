import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Personajes from './components/Personajes';
import Equipo from './components/Equipo';
import Agregar from './components/Agregar';
import "./index.css"
import Banner from "./assets/banner.png";

const App = () => (
  <Provider store={store}>
    <header>
      <div className='header-estilos'>
      {/* <img className="logo-img" src={Logo} alt="logo" /> */}
      <img className="logo-img" src={Banner} alt="logo" />
      <Agregar />
      {/* <button className="btn-agregar">Agregar</button> */}
      </div>
    </header>
    <main>
    <Personajes />
    <Equipo />
  </main>
  </Provider> 
)

export default App;