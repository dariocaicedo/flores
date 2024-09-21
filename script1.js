// Función para crear una flor
function createFloweer() {
    const floweer = document.createElement('div');
    floweer.classList.add('flower');
    
    // Posición horizontal aleatoria
    floweer.style.left = Math.random() * 100 + 'vw';
    
    // Tamaño de la flor aleatorio
    floweer.style.width = floweer.style.height = Math.random() * 30 + 20 + 'px';
    
    // Duración de la animación aleatoria
    floweer.style.animationDuration = Math.random() * 2 + 3 + 's';
    
    document.querySelector('.container').appendChild(floweer);
  
    // Eliminar la flor después de la animación
    setTimeout(() => {
      floweer.remove();
    }, 5000);
  }
  
  // Generar una flor cada cierto tiempo
  setInterval(createFloweer, 300);
  