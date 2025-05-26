import { format } from "date-fns";
import es from "date-fns/locale/es";
import { ofertas } from "../components/Ofertas";

function obtenerDiaHoy() {
  const hoy = new Date();
  return format(hoy, "EEEE", { locale: es });
}

export function obtenerOfertasHoy() {
  const hoy = obtenerDiaHoy();
  return ofertas.filter((oferta) =>
    Array.isArray(oferta.dia) ? oferta.dia.includes(hoy) : oferta.dia === hoy
  );
}
// por que pregunto si arrayisarray, porque en oferta puede haber un array, ejemplo que una entidad de descuentos lunes y martes, entonces la comparacion hace que funcione con el includes o directamente(si no es array) con el dia.

