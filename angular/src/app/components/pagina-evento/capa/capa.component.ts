import { capa } from './../../../model/capa';
import { Component, Input, OnInit } from '@angular/core';
import { Evento } from 'src/app/model/evento';

@Component({
  selector: 'app-capa',
  templateUrl: './capa.component.html',
  styleUrls: ['./capa.component.scss']
})
export class CapaComponent implements OnInit {

  @Input() infoBasic?: Evento;
  @Input() capa?: capa;
  @Input() bgImg?: string;

  constructor(){
  }

  ngOnInit(){
  }
}
