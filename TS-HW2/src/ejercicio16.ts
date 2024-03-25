class Button {
  text: string;
  onClick: () => void;

  constructor(text: string, onClick: () => void) {
    this.text = text;
    this.onClick = onClick;
  }

  click(): void {
    console.log(`Botón "${this.text}" ha sido clickeado`);
    this.onClick();
  }

  setText(newText: string): void {
    console.log(
      `Texto del botón "${this.text}" ha sido cambiado a "${newText}"`
    );
    this.text = newText;
  }

  setOnClick(newOnClick: () => void): void {
    console.log(`Función de clic del botón "${this.text}" ha sido cambiada`);
    this.onClick = newOnClick;
  }
}

const button1 = new Button("Send", () => {
  console.log("send message");
});

const button2 = new Button("Submit", () => {
  console.log("submited");
});

button1.click();

button2.click();
