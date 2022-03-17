import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ControlPresupuesto({ presupuesto, gastos }) {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  const [porcentaje, setPorcentaje] = useState(0);

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );

    const totalDisponible = presupuesto - totalGastado;

    //Calcular porcentaje
    const nuevoPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);

    setPorcentaje(nuevoPorcentaje);
    setDisponible(totalDisponible);
    setGastado(totalGastado);
  }, [gastos]);

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          text={`${porcentaje}% Gastado`}
          value={porcentaje}
          styles={buildStyles({
            pathColor: porcentaje > 100 ? "#dc2626" : "#3B82F6",
            trailColor: "#f5f5f5",
            textColor: porcentaje > 100 ? "#dc2626" : "#3B82F6",
          })}
        />
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span>
          {formatearCantidad(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? "negativo" : ""}`}>
          <span>Disponible: </span>
          {formatearCantidad(disponible)}
        </p>
        <p>
          <span>Gastado: </span>
          {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
}

export default ControlPresupuesto;
