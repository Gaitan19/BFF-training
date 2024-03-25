"use strict";
class Button {
    constructor(text, onClick) {
        this.text = text;
        this.onClick = onClick;
    }
    click() {
        console.log(`Botón "${this.text}" ha sido clickeado`);
        this.onClick();
    }
    setText(newText) {
        console.log(`Texto del botón "${this.text}" ha sido cambiado a "${newText}"`);
        this.text = newText;
    }
    setOnClick(newOnClick) {
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
