export function subtractThreeHours(tiempo) {
    const [hora, minutos] = tiempo.split(':').map(Number);
    let nuevaHora = hora - 3;
    if (nuevaHora < 0) {
      nuevaHora += 24;
    }
    const horaFormateada = String(nuevaHora).padStart(2, '0');
    const minutosFormateados = String(minutos).padStart(2, '0');
    return `${horaFormateada}:${minutosFormateados}`;
  }
