import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CadastroService } from './service/cadastro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  hide = true;

  form = this.FormBuilder.group({
    nome: ['', Validators.required],
    login: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(
    private FormBuilder: FormBuilder,
    private service: CadastroService,
    private snackBar: MatSnackBar,
    private router : Router){  }

  onSubmit(){
    this.service.save(this.form.value).subscribe(result => this.onSuccess(), error => this.onError());
  }

  private onError(){
    this.snackBar.open('Esse e-mail já existe no banco de dados', '', {duration: 3000});
  }

  private onSuccess(){
    this.snackBar.open('Cadastro realizado com sucesso!', '', {duration: 5000});
    this.router.navigate(["/login"]);
  }


}
