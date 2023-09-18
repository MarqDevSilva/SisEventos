import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTabGroup } from '@angular/material/tabs';
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

  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;

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
      this.service.getId(eventoId).subscribe((evento) => {
        if (evento) {
          this.infoBasic.patchValue(evento);
        } else {
            this.onError('Evento não encontrado');
          }
      });
    }
  }

  ngOnInit(){
  }

  submitInfo(){
    if (this.infoBasic.valid) {
      this.service.update(this.infoBasic.get('id')?.value,this.infoBasic.value).subscribe(
        result => this.onSuccess('Evento atualizado com sucesso'),
        error => this.onError('Erro ao atualizar evento'));
    } else {
      this.invalid();
    }
  }

  next(){
    const currentIndex = this.tabGroup.selectedIndex;
    const tabCount = this.tabGroup._tabs.length;
    if (currentIndex !== null && currentIndex < tabCount - 1) {
      this.tabGroup.selectedIndex = currentIndex + 1;
    }
  }

  previous(){
    const currentIndex = this.tabGroup.selectedIndex;
    if (currentIndex !== null && currentIndex > 0) {
    this.tabGroup.selectedIndex = currentIndex - 1;
    }
  }

  private onSuccess(body: string){
    this.snackBar.open(body, '', {duration: 5000});
    this.next();
  }

  private onError(body: string){
    this.snackBar.open(body, '', {duration: 5000});
  }

  private invalid(){
    this.snackBar.open('Preencha todos os campos corretamente', '', {duration: 5000});
  }
}

