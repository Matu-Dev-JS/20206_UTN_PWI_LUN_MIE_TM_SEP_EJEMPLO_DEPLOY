import React from 'react';
import './Message.css';

function Message({estatus_envio, autor, contenido, fecha}) {


    // Evaluo si el mensaje fue enviado por "Yo"
    const esMio = autor === "Yo";


    const esVisto = estatus_envio === "visto";

    return (
        <div className={"contenedor-mensaje " +  (esMio ? "mensaje-propio" : "mensaje-recibido")}>
            <div className="burbuja-mensaje">
                {/* Si no es mio, muestro el nombre del remitente arriba */}
                {!esMio && <span className="autor-mensaje">{autor}</span>}

                <p className="contenido-mensaje">{contenido}</p>

                <div className="metadatos-mensaje">
                    <span className="hora-mensaje">{fecha}</span>
                    
                    {/* Solo si es un mensaje propio muestro las barritas de estado */}
                    {esMio && (
                        <span className={'doble-check' + (esVisto ? "leido" : "enviado")}>
                            //
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Message;