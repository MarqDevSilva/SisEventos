import { Sobre } from './../../../model/sobre';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { capa } from 'src/app/model/capa';
import { Evento } from 'src/app/model/evento';
import { EventoService } from 'src/app/services/evento/evento.service';
import { CapaService } from 'src/app/services/pagina-evento/capa.service';
import { SobreService } from 'src/app/services/pagina-evento/sobre.service';

@Component({
  selector: 'app-evento-page',
  templateUrl: './evento-page.component.html',
  styleUrls: ['./evento-page.component.scss']
})
export class EventoPageComponent implements OnInit{

  infoBasic?: Evento;
  capa?: capa;
  sobre?: Sobre;
  bgImg?: string;

  constructor(
    private router: ActivatedRoute,
    private serviceBasic: EventoService,
    private serviceCapa: CapaService,
    private serviceSobre: SobreService){

    this.getPage();
  }

  ngOnInit(){
  }

  getPage(){
    const id = this.router.snapshot.paramMap.get("id");
    this.serviceBasic.getId(id).subscribe((basic) => (this.infoBasic = basic));
    this.serviceCapa.getCapa(id).subscribe((capa) => {this.capa = capa; const img = capa.imgCapa; this.bgImg = 'data:image/jpg;base64,' + img;});
    this.serviceSobre.getSobre(id).subscribe((sobre) => (this.sobre = sobre));
  }
}
