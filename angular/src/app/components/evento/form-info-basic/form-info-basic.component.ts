import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventoService } from 'src/app/services/evento/evento.service';

@Component({
  selector: 'app-form-info-basic',
  templateUrl: './form-info-basic.component.html',
  styleUrls: ['./form-info-basic.component.scss']
})
export class FormInfoBasicComponent {

  form = this.formBuilder.group({
    endereco: ['', Validators.required],
    nome: ['', Validators.required],
    dataInicial: new FormControl (null,  Validators.required),
    dataFinal: new FormControl(null, Validators.required),
    maxIncricoes: [],
    whatsApp: []
  })

  constructor(
    private formBuilder: FormBuilder,
    private service: EventoService,
    private snackBar: MatSnackBar
    ) {}

  onSubmit(){
    this.service.save(this.form.value).subscribe(result => this.onSuccess(), error => this.onError());
  }

  private onError(){
    this.snackBar.open('Erro ao salvar evento', '', {duration: 3000});
  }

  private onSuccess(){
    this.snackBar.open('Evento salvo com sucesso', '', {duration: 5000});
  }
}
