import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";

function Header({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
  isValidPresupuesto,
}) {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {isValidPresupuesto ? (
        <p>Control</p>
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
    </header>
  );
}

export default Header;
