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
    document.body.style.fontSize = `${this.fontSize}px`;
  }

  changeBgColor() {
    document.body.style.backgroundColor = this.bgColor;
  }
}
