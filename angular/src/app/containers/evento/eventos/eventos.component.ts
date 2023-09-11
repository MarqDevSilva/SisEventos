import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Evento } from 'src/app/model/evento';
import { EventoService } from 'src/app/services/evento/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent {

  eventos: Observable<Evento[]> | null;

  constructor(
    private service: EventoService,
    private router: Router){
    this.eventos = this.service.getInfo().pipe();
  }

  onAdd(){
    this.router.navigate(['new']);
  }

  onEdit(evento: Evento){
    this.router.navigate(['edit', evento.id])
  }
}
