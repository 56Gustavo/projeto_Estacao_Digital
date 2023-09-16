import React, {useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Compra=()=>{
    return(
        <div className='compra'>
           
            <Link to = "CompraFinal"> <button className='buynow'>Comprar agora</button></Link>
            <button className='add'>Adicionar ao carrinho</button>
        </div>
    );
}
export default (Compra);