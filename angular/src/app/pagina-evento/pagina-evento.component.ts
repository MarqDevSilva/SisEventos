import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/model/evento';
import { PaginaEventoService } from './service/pagina-evento.service';


@Component({
  selector: 'app-pagina-evento',
  templateUrl: './pagina-evento.component.html',
  styleUrls: ['./pagina-evento.component.scss']
})
export class PaginaEventoComponent implements OnInit{

informacoes?: Evento;

constructor(
  private Service: PaginaEventoService,
  public dialog: MatDialog,
  private router: ActivatedRoute,
  private service: PaginaEventoService){
  this.getPage();
}

getPage(){
  const id = this.router.snapshot.paramMap.get("id");
  this.service.getInfo(id).subscribe((informacoes) => (this.informacoes = informacoes));
}

  ngOnInit(): void{
  }
}
