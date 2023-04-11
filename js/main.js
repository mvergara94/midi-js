const listaDeTecla = document.querySelectorAll('.tecla');

function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento != null && elemento.localName === 'audio') {
    elemento.play();
  } else {
    console.log('Elemento não encontrado ou seletor inválido');
  }
}

for (let contador = 0; contador < listaDeTecla.length; contador++) {
  const tecla = listaDeTecla[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (evento) {
    if (
      evento.code === 'Space' ||
      evento.code === 'NumpadEnter' ||
      evento.code === 'Enter'
    ) {
      tecla.classList.add('ativa');
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  };
}
