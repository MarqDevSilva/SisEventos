import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from '../model/usuario';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true

  usuario: Usuario = {
    login: '',
    password: '',
    token: ''
  }

  constructor(
    private service: LoginService,
    private snackBar: MatSnackBar,
    private router : Router){}

  fazerLogin(){
    this.service.fazerLogin(this.usuario).subscribe(
      response => this.onSucess(response),
      error => this.onError()
    );
  }

  private onSucess(auth : Usuario){
    localStorage.setItem('authToken', auth.token);
    this.router.navigate(["/eventos"])
  }

  private onError(){
    this.snackBar.open('Usuario ou senha invalidos!', '', {duration: 5000});
  }
}
