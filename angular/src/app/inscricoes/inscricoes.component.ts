import { Evento } from 'src/app/model/evento';
import { Component } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-inscricoes',
  templateUrl: './inscricoes.component.html',
  styleUrls: ['./inscricoes.component.scss']
})
export class InscricoesComponent {

  informacoes: Evento[] = [];
  displayedColumns = ['name', 'category'];

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

}
