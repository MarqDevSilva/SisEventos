import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.scss']
})
export class EditarEventoComponent implements OnInit {

  form = this.formBuilder.group({
    endereco: ['', Validators.required],
    nome: ['', Validators.required],
    dataInicial: new FormControl (null,  Validators.required),
    dataFinal: new FormControl(null, Validators.required)
  })

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {

  }

  onUpdate(){}
}
