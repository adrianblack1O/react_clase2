import React, { useContext, useState } from "react";
import { cartContext } from "../context/cartContext";

function DatosPersonales() {

  const cartview = useContext(cartContext)

  const [cliente, setCliente] = useState({
    nombre: "", apellido: "", telefono: "", correo: ""
  });

  const set = (nombre) => {
    return ({ target: { value } }) => {
      setCliente((oldCliente) => ({ ...oldCliente, [nombre]: value }));
    };
  };

  const onSubmit = (event) => {
    event.preventDefault(); // Previene el submit por defecto
      setCliente({
        nombre: '', apellido: '', telefono: '', correo: '' 
      });
  }
 
  return (
    <form onSubmit={onSubmit}> 
      <h4>Datos del Cliente:</h4>
      <p><i>Por favor complete sus datos...</i></p>

      <label>Nombre*:</label>
      <input 
        type="text" required
        value={cliente.nombre} onChange={set("nombre")}
      />

      <label>Apellido*:</label>
      <input 
        type="text" required
        value={cliente.apellido} onChange={set("apellido")}
      />

      <label>Telefono*:</label>
      <input
        type="tel" required
        value={cliente.telefono} onChange={set("telefono")} 
      />

      <label>Correo Electronico*:</label>
      <input 
        type="email" required
        value={cliente.correo} onChange={set("correo")}
      />
      
      <div className="right-align">
      <button className="btn-flat green darken-1 white-text" type="submit" onClick={()=> cartview.datosCliente(cliente)}>Continuar</button>
      </div>
    </form>
  );
}

export default DatosPersonales;