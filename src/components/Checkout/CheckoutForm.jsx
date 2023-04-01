import React, { useRef, useState } from 'react'
import { useCheckout } from '../../hooks/useCheckout';
import { Order } from './Order';

export const CheckoutForm = () => {

    const [showPaymentOnline, setShowPaymentOnline] = useState()

    const formRef = useRef()

    useCheckout()

    return (
        <div>
            <h2>Ingrese sus datos para procesar la orden</h2>
            <form ref={formRef}>
                <label>
                    Nombre y apellido:
                    <input type="text" />
                </label>
                <label>
                    Direccion:
                    <input type="text" />
                </label>
                <label>
                    Teléfono:
                    <input type="tel" />
                </label>
                <label>
                    Email:
                    <input type="text" />
                </label>
                <label>
                    Forma de pago: 
                    <input onClick={() => setShowPaymentOnline(false)} defaultChecked type="radio" id="contado" name="metodo de pago" value="contado"/>
                    <label>Contado</label>
                    <input onClick={() => setShowPaymentOnline(true)}  type="radio" id="tarjeta" name="metodo de pago" value="online"/>
                    <label>Pagar online</label>
                </label>
                {showPaymentOnline && 
                    <div>
                        <label>
                            Nombre del titular:
                            <input type="text" minlength="16" maxlength="16" />
                        </label>
                        <label>
                            Nº de tarjeta:
                            <input type="text" minlength="16" maxlength="16" />
                        </label>
                        <label>
                            Pin:
                            <input type="text" minlength="3" maxlength="3" />
                        </label>
                    </div>
                }
                <input type="submit" value="Ir a pagar" />
            </form>
        </div>
    )
}
