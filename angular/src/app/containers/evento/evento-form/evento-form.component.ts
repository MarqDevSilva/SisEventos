import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-evento-form',
  templateUrl: './evento-form.component.html',
  styleUrls: ['./evento-form.component.scss']
})
export class EventoFormComponent {

  infoBasic: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.infoBasic = this.formBuilder.group({
      id: [''],
      endereco: ['', Validators.required],
      nome: ['', Validators.required],
      dataInicial: [new Date(), Validators.required],
      dataFinal: [new Date(), Validators.required],
      maxIncricoes: [''],
      whatsApp: ['']
    });
  }

  onSubmit(){
    console.log('Dados Fomulário', this.infoBasic)
  }

  Exit(){}
}
