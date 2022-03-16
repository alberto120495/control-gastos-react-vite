import React from "react";
import { formatearFecha } from "../helpers";

import {
  IconoAhorro,
  IconoCasa,
  IconoComida,
  IconoGastos,
  IconoOcio,
  IconoSalud,
  IconoSuscripciones,
} from "../helpers/imports";

const diccionarioIconos = {
  ahorro: IconoAhorro,
  comida: IconoCasa,
  casa: IconoComida,
  gastos: IconoGastos,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones,
};

function Gasto({ gasto }) {
  const { categoria, nombre, cantidad, id, fecha } = gasto;

  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <img src={diccionarioIconos[categoria]} alt="icono gasto" />
        <div className="descripcion-gasto">
          <p className="categoria">{categoria}</p>
          <p className="nombre-gasto">{nombre}</p>
          <p className="fecha-gasto">
            {" "}
            Agregado el: <span>{formatearFecha(fecha)}</span>
          </p>
        </div>
      </div>
      <p className="cantidad-gasto">${cantidad}</p>
    </div>
  );
}

export default Gasto;
