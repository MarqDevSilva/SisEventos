import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth-service/auth.service';
import { Usuario } from 'src/app/model/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = 'api/auth/login'

  constructor(private httpClient: HttpClient, private auth : AuthService) { }

  fazerLogin(usuario: Usuario) {
  return this.httpClient.post<Usuario>(this.API, usuario);
  }
}
