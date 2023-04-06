import React, { useRef, useState } from 'react' 
import { sendOrder } from './sendOrder';
import { useNavigate } from "react-router-dom";

export const CheckoutForm = ({order}) => {

    const navigate = useNavigate()

    const [showPaymentOnline, setShowPaymentOnline] = useState(false)

    const [inputValues, setInputValues] = useState({
        nombre: "",
        direccion: "",
        telefono: "",
        email: "",
        titularTarjeta: "",
        tarjeta: "",
        pin: "",
    });
    
    const formRef = useRef()
    
    const onChange =  (event, type) => {
        setInputValues((previusValues) => {
            return {
                ...previusValues, 
                [type]:event.target.value,
            }
        });
    }
    
    const onSubmit = (event) => {
        event.preventDefault()
        const values = {...inputValues, pagoOnline: showPaymentOnline}
        sendOrder(order, values, onSuccess)
    }

    const onSuccess = (order) => {
        navigate("/order", { state: { order } })
    }

    return (
        <div>
            <h2>Ingrese sus datos para procesar la orden</h2>
            <form ref={formRef} onSubmit={onSubmit}>
                <label>
                    Nombre y apellido:
                    <input onChange={(event) => onChange(event, "nombre")} value={inputValues.nombre} type="text" />
                </label>
                <label>
                    Direccion:
                    <input onChange={(event) => onChange(event, "direccion")} value={inputValues.direccion} type="text" />
                </label>
                <label>
                    Teléfono:
                    <input onChange={(event) => onChange(event, "telefono")} value={inputValues.telefono} type="tel" />
                </label>
                <label>
                    Email:
                    <input onChange={(event) => onChange(event, "email")} value={inputValues.email} type="text" />
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
                            <input onChange={(event) => onChange(event, "titularTarjeta")} value={inputValues.titularTarjeta} type="text"/>
                        </label>
                        <label>
                            Nº de tarjeta:
                            <input onChange={(event) => onChange(event, "tarjeta")} value={inputValues.tarjeta} type="text" minLength="16" maxLength="16"/>
                        </label>
                        <label>
                            Pin:
                            <input onChange={(event) => onChange(event, "pin")} value={inputValues.pin} type="text" minLength="3" maxLength="3" />
                        </label>
                    </div>
                }
                <input type="submit" value="Procesar pago" />
            </form>
        </div>
    )
}
