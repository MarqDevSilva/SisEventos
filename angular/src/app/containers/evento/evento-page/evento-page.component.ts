import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/model/evento';
import { EventoService } from 'src/app/services/evento/evento.service';

@Component({
  selector: 'app-evento-page',
  templateUrl: './evento-page.component.html',
  styleUrls: ['./evento-page.component.scss']
})
export class EventoPageComponent {

  evento?: Evento;

  constructor(
    private router: ActivatedRoute,
    private service: EventoService){
    this.getPage();
  }

  getPage(){
    const id = this.router.snapshot.paramMap.get("id");
    this.service.getPage(id).subscribe((evento) => (this.evento = evento));
  }
}
