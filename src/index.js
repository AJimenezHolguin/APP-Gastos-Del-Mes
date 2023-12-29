import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Contenedor from './elementos/Contenedor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditarGasto from './componentes/EditarGasto';
import GastosPorCategoria from './componentes/GastosPorCategoria';
import InicioSesion from './componentes/InicioSesion';
import ListaDeGastos from './componentes/ListaDeGastos';
import RegistroUsuarios from './componentes/RegistroUsuarios';
import {Helmet} from "react-helmet";
import favicon from './imagenes/logo.png'
import Fondo from './elementos/Fondo';
import { AuthProvider } from './contextos/AuthContext';
import RutaPivada from './componentes/RutaPrivada';
import {TotalGastadoProvider} from './contextos/TotalGastadoEnElMesContext';


WebFont.load({
  google: {
    families: ['Work Sans:400,500,700', 'sans-Serif']
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <Helmet>
        <link rel='shortcut icon' href={favicon} type='image/x-icon'/>
      </Helmet>
      <AuthProvider>
        <TotalGastadoProvider>
      <BrowserRouter>
        <Contenedor>
          <Routes>
            <Route path='/iniciar-sesion' element={<InicioSesion />} />
            <Route path='/crear-cuenta' element={<RegistroUsuarios />} />

             <Route path="/categorias" element={
            <RutaPivada >
                <GastosPorCategoria />
            </RutaPivada>
             } /> 
            <Route path='/lista' element={
            <RutaPivada path='/lista'>
                <ListaDeGastos />
            </RutaPivada>
            }/>
            <Route path='/editar/:id' element={
            <RutaPivada path='/editar/:id'>
                <EditarGasto />
            </RutaPivada>
            }/>
            <Route path='/' element={
            <RutaPivada path='/'>
                <App />
            </RutaPivada>
            }/>
          </Routes>
        </Contenedor>
      </BrowserRouter>
      </TotalGastadoProvider>
      </AuthProvider>
      <Fondo />
    </>
  </React.StrictMode>
);



