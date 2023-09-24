import { Component, Input } from '@angular/core';
import { Sobre } from 'src/app/model/sobre';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent {

  @Input() sobre?: Sobre
}
