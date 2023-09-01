import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Conta } from '../share/model/conta';
import { ContaService } from './service/conta.service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.scss']
})
export class ContaComponent implements OnInit{
  hide = true;

  form: FormGroup;

  constructor(
    private service: ContaService,
    private snackBar : MatSnackBar,
    private formBuilder: FormBuilder,
    ){
      this.form = this.formBuilder.group({
        id: [''],
        email: [''],
        password: [''],
        nome: [''],
        dataNascimento: [''],
        cpf: [''],
        celular: [''],
        sexo: [''],
        cep: [''],
        pais: [''],
        estado: [''],
        cidade: [''],
        bairro: [''],
        endereco: [''],
        complemento: ['']
    })
    }

  ngOnInit(): void {

   this.service.getInfo().subscribe(
      response => this.conta(response),
      error => (error)
    );
  }

  private conta(conta : Conta[]){
    this.form.setValue(conta)
  }

  onUpdate(){
    this.service.putInfo(this.form.value).subscribe(result => this.onSuccess(), error => this.onError());
  }

  private onError(){
    this.snackBar.open('Erro ao atualizar dados', '', {duration: 3000});
  }

  private onSuccess(){
    this.snackBar.open('Dados atualizados com sucesso!', '', {duration: 5000});
  }
}



