import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { Observable } from 'rxjs';
import { InformacoesBasicas } from 'src/app/share/model/evento';
import { EventosService } from './service/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})


export class EventosComponent {

  informacoes: Observable<InformacoesBasicas[]>;

  constructor(
    private eventosService: EventosService){
    this.informacoes = this.eventosService.getInfo().pipe();
  }

  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;
}
