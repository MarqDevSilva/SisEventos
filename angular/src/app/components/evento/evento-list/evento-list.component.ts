import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { InformacoesBasicas } from 'src/app/share/model/evento';
import { EventoService } from 'src/app/services/evento/evento.service';

@Component({
  selector: 'app-evento-list',
  templateUrl: './evento-list.component.html',
  styleUrls: ['./evento-list.component.scss']
})
export class EventoListComponent {

  informacoes: Observable<InformacoesBasicas[]> | undefined;

  constructor(
    private service: EventoService){
    this.informacoes = this.service.getInfo().pipe();
  }

  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;
}
