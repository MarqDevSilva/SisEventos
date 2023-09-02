import { Component } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {
  fontSize: number = 16;
  bgColor: string = '#ffffff';

  changeFontSize() {
    // Aplicar o tamanho da fonte aos elementos HTML relevantes
    document.body.style.fontSize = `${this.fontSize}px`;
  }

  changeBgColor() {
    // Aplicar a cor de fundo à página
    document.body.style.backgroundColor = this.bgColor;
  }
}
