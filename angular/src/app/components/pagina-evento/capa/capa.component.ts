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

  bgImg?: string;

  constructor(){
    this.readerImg();
  }

  ngOnInit(){
  }

  readerImg(){
    if(this.capa?.imgCapa){
      const binary = String.fromCharCode.apply(null, this.capa?.imgCapa);
      const base64 = btoa(binary);
      this.bgImg = 'data:image/png;base64,' + base64;
    }
  }
}
