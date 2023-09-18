import { paginaEvento } from './../../../model/pagina-evento';
import { Component, Input } from '@angular/core';
import { Evento } from 'src/app/model/evento';

@Component({
  selector: 'app-capa',
  templateUrl: './capa.component.html',
  styleUrls: ['./capa.component.scss']
})
export class CapaComponent {

  @Input() infoBasic?: Evento;
  @Input() paginaEvento?: paginaEvento;
}
