import React from 'react'
import { useLocation } from 'react-router-dom';
import { OrderContainer } from './OrderStyled';

const Order = () => {
    
    const location = useLocation();
    const {order} = location.state;
    
    return (
        <OrderContainer>
            <h1>¡Gracias {order.user.nombre} por su preferencia!</h1>
            <span>
                Su codigo de compra es: <b>"{order.id}"</b>
            </span>
            <span>
                Su recibo ha sido enviado a su casilla {order.user.email}
            </span>
            {!order.user.pagoOnline && 
            <span>
                Recuerde que tendrá que abonar el pedido al momento de la entrega.
            </span>
            }

        </OrderContainer>
    )
}

export default Order