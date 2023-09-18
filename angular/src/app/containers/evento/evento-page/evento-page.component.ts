import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/model/evento';
import { paginaEvento } from 'src/app/model/pagina-evento';
import { EventoService } from 'src/app/services/evento/evento.service';
import { PaginaEventoService } from 'src/app/services/pagina-evento/pagina-evento.service';

@Component({
  selector: 'app-evento-page',
  templateUrl: './evento-page.component.html',
  styleUrls: ['./evento-page.component.scss']
})
export class EventoPageComponent {

  infoBasic?: Evento;
  paginaEvento?: paginaEvento;

  constructor(
    private router: ActivatedRoute,
    private serviceBasic: EventoService,
    private servicePage: PaginaEventoService){

    this.getPage();
  }

  getPage(){
    const id = this.router.snapshot.paramMap.get("id");
    this.serviceBasic.getId(id).subscribe((basic) => (this.infoBasic = basic));
    this.servicePage.getPage(id).subscribe((page) => (this.paginaEvento = page));
  }
}
