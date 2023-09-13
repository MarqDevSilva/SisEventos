import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from 'src/app/services/evento/evento.service';

@Component({
  selector: 'app-evento-edit',
  templateUrl: './evento-edit.component.html',
  styleUrls: ['./evento-edit.component.scss']
})
export class EventoEditComponent {

  infoBasic: FormGroup;
  payment: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private service: EventoService,) {

    this.infoBasic = this.formBuilder.group({
      id: [''],
      endereco: ['', Validators.required],
      nome: ['', Validators.required],
      dataInicial: [new Date(), Validators.required],
      dataFinal: [new Date(), Validators.required],
      maxIncricoes: ['', Validators.required],
      whatsApp: ['', Validators.pattern('')]
    });

    this.payment = this.formBuilder.group({
      valor: [''],
    });

    const eventoId = this.route.snapshot.paramMap.get('id');
    if(eventoId){
      this.service.edit(eventoId).subscribe((evento) => {
        if (evento) {
          this.infoBasic.patchValue(evento);
        } else {
            this.snackBar.open('Evento não encontrado', ' ', { duration: 3000 });
          }
      });
    }
  }

  ngOnInit(){
  }

  onSubmit(){
    if (this.infoBasic.valid) {
      this.service.edit(this.infoBasic.value).subscribe(result => this.onSuccess(), error => this.onError());
    } else {
      this.invalid();
    }
  }

  private onSuccess(){
    this.snackBar.open('Evento atualizado com sucesso', '', {duration: 5000});
  }

  private onError(){
    this.snackBar.open('Erro ao atualizar evento', '', {duration: 5000});
  }

  private invalid(){
    this.snackBar.open('Preencha todos os campos corretamente', '', {duration: 5000});
  }
}

