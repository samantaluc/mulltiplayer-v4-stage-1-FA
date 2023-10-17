class Form {
  constructor() {
    // Cria um campo de entrada de texto
    this.input = createInput("").attribute("placeholder", "Digite seu nome");

    // Cria um botão com o rótulo "Play"
    this.playButton = createButton("Play");

    // Cria uma imagem com o título do jogo
    this.titleImg = createImg("./assets/title.png", "título do jogo");

    // Cria um elemento HTML <h2> para exibir saudações
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    // Define a posição da imagem do título
    this.titleImg.position(120, 100);

    // Define a posição do campo de entrada de texto centralizado na tela
    this.input.position(width / 2 - 110, height / 2 - 80);

    // Define a posição do botão "Play" centralizado na tela
    this.playButton.position(width / 2 - 90, height / 2 - 20);

    // Define a posição do elemento de saudação
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  hide() {
    // Esconde o elemento de saudação, o botão "Play" e o campo de entrada de texto
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  handleMousePressed() {
    // Define um evento de clique para o botão "Play"
    this.playButton.mousePressed(() => {
      // Esconde o campo de entrada e o botão "Play"
      this.input.hide();
      this.playButton.hide();

      // Cria uma mensagem de saudação personalizada com o nome inserido no campo de entrada
      var message = ` Olá ${this.input.value()} </br>espere outro jogador entrar...`;

      // Define o conteúdo do elemento de saudação com a mensagem
      this.greeting.html(message);

      // Define o nome do jogador com base no valor inserido no campo de entrada
      player.name = this.input.value();

      // Define o índice do jogador como 1 (pode ser usado para rastrear jogadores)
      player.index = 1;
    });
  }

  display() {
    // Posiciona os elementos na tela
    this.setElementsPosition();

    // Define o comportamento do botão "Play" quando pressionado
    this.handleMousePressed();
  }
}
