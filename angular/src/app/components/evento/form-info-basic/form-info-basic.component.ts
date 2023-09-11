import { ActivatedRoute } from '@angular/router';
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
    id: [''],
    endereco: ['', Validators.required],
    nome: ['', Validators.required],
    dataInicial: new FormControl (new Date(),  Validators.required),
    dataFinal: new FormControl(new Date(), Validators.required),
    maxIncricoes: [''],
    whatsApp: ['']
  })

  constructor(
    private formBuilder: FormBuilder,
    private service: EventoService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute
    ) {
      this.loadForm();
    }

  onSubmit(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.service.update(id, this.form.value).subscribe(
        () => this.onSuccess('Evento atualizado com sucesso'),
        () => this.onError('Erro ao atualizar evento')
      );
    } else {
      this.service.save(this.form.value).subscribe(
        () => this.onSuccess('Evento salvo com sucesso'),
        () => this.onError('Erro ao salvar evento')
      );
    }
  }

  private onError(msg: string){
    this.snackBar.open(msg, '', {duration: 3000});
  }

  private onSuccess(msg: string){
    this.snackBar.open(msg, '', {duration: 5000});
  }

  private loadForm(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.service.edit(id).subscribe((evento) => {
        if (evento) {
          this.form.patchValue(evento);
        }
      });
    }
  }
}
