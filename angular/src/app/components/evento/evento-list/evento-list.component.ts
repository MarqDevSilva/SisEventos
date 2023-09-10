import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { Evento } from 'src/app/model/evento';
import { EventoService } from 'src/app/services/evento/evento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evento-list',
  templateUrl: './evento-list.component.html',
  styleUrls: ['./evento-list.component.scss']
})
export class EventoListComponent {

  informacoes: Observable<Evento[]> | null;

  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;

  constructor(
    private service: EventoService,
    private router: Router,
    ){
    this.informacoes = this.service.getInfo().pipe();
  }

  onAdd(){
    this.router.navigate(['evento/new']);
  }
}
