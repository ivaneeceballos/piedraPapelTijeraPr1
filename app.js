// Función que determina el resultado del juego
function determinarResultado(jugadaUsuario1, jugadaUsuario2) {
    if (jugadaUsuario1 === jugadaUsuario2) {
      return 'Empate';
    } else if (
      (jugadaUsuario1 === 'piedra' && jugadaUsuario2 === 'tijera') ||
      (jugadaUsuario1 === 'papel' && jugadaUsuario2 === 'piedra') ||
      (jugadaUsuario1 === 'tijera' && jugadaUsuario2 === 'papel')
    ) {
      return 'Jugador 1 gana';
    } else {
      return 'Jugador 2 gana';
    }
  }
  
  // Ciclo del juego
  while (true) {
    // Jugada del jugador 1
    let jugadaUsuario1 = prompt('Jugador 1, elige piedra, papel o tijera:');
    if (jugadaUsuario1 === null) {
      break; // El jugador 1 presionó "Cancelar"
    } else if (jugadaUsuario1 !== 'piedra' && jugadaUsuario1 !== 'papel' && jugadaUsuario1 !== 'tijera') {
      alert('Jugada inválida. Elige piedra, papel o tijera.');
      continue; // Se vuelve al inicio del ciclo
    }
  
    // Jugada del jugador 2
    let jugadaUsuario2 = prompt('Jugador 2, elige piedra, papel o tijera:');
    if (jugadaUsuario2 === null) {
      break; // El jugador 2 presionó "Cancelar"
    } else if (jugadaUsuario2 !== 'piedra' && jugadaUsuario2 !== 'papel' && jugadaUsuario2 !== 'tijera') {
      alert('Jugada inválida. Elige piedra, papel o tijera.');
      continue; // Se vuelve al inicio del ciclo
    }
  
    // Resultado del juego
    const resultado = determinarResultado(jugadaUsuario1, jugadaUsuario2);
    alert(resultado);
    console.log(resultado);
  }