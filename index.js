document.getElementById("start").addEventListener("click", startCount);

function startCount() {
  var timeLeft = 60; //Vamos começar os segundos no 60
  const secondsElement = document.getElementById("seconds");
  const messageElement = document.getElementById("message");
  messageElement.textContent = "";

  secondsElement.textContent = timeLeft;

  const intervalId = setInterval(() => {
    //Vamos usar a função global setInterval
    timeLeft -= 1; //Vamos indicar que a contagem vai ser regressiva
    secondsElement.textContent = timeLeft; //Aqui vamos dizer que o conteúdo do elemento seconds vai ser os segundos (timeLeft)

    if (timeLeft <= 0) {
      //Se o timeLeft(segundos) for menor ou igual a zero, vamos encerrar a contagem e exibir uma mensagem.
      clearInterval(intervalId);
      showMessage();
    }
  }, 1000); //Atualiza a cada segundo
}

//Agora vamos criar a função showMessage para tratar a mensagem que vai ser exibida no final da contagem.

function showMessage() {
  //Agora vamos usar a função global do javascript setTimeout para determinar quanto tempo depois do final da contagem a mensagem vai aparecer.
  const messageElement = document.getElementById("message");
  setTimeout(() => {
    messageElement.textContent = "Tempo esgotado!";
  }, 500); //A mensagem irá aparecer depois de 0.5 segundos que o cronometro será finalizado.
}
