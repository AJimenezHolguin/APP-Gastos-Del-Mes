import React from 'react';
import { Helmet } from 'react-helmet';
import { Header, Titulo } from './../elementos/Header';
import BtnRegresar from '../elementos/BtnRegresar';
import BarraTotalGastado from './BarraTotalGastado'
import useObtenerGastosDelMesPorCategoria from './../hooks/useObtenerGastosDelMesPorCategoria'
import {ListaDeCategorias,ElementoListaCategorias,Categoria,Valor} from './../elementos/ElementosDeLista';
import IconoCategoria from './../elementos/IconoCategoria';
import convetirAMoneda from './../funciones/convertirAMoneda';
   



const GastosPorCategoria = () => {
   const gastosPorCategoria = useObtenerGastosDelMesPorCategoria();
   console.log(gastosPorCategoria);
    return (
        <>
        <Helmet>
           <title>Gastos Por Categoria</title>
        </Helmet>
         <Header>   
                 <BtnRegresar />
                 <Titulo>Gastos Por Categoria</Titulo>     
         </Header>
        <ListaDeCategorias>

        </ListaDeCategorias>
            {gastosPorCategoria.map((elemento, index)=>{
                return (
                    <ElementoListaCategorias key={index}>
                       
                        <Categoria>  <IconoCategoria id={elemento.categoria}/>{elemento.categoria}</Categoria>
                        <Valor>{convetirAMoneda(elemento.cantidad)}</Valor>
                    </ElementoListaCategorias>
                );
            })}
        <BarraTotalGastado />
        </>
    );
}
 
export default GastosPorCategoria;