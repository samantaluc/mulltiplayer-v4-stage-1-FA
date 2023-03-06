class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite seu nome");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "título do jogo");
    this.greeting = createElement("h2");        }
  setElementsPosition() {
    this.titleImg.position(120, 100);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);        }
  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();      }
  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = ` Olá ${this.input.value()} </br>espere outro jogador entrar...`;
      this.greeting.html(message);
      player.name = this.input.value();
      player.index = 1;        });             }
  display() {
   this.setElementsPosition();
   this.handleMousePressed();     }
}
