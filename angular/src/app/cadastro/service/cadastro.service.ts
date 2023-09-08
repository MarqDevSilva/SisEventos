import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conta } from 'src/app/model/conta';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private readonly API = 'api/auth/registrar'

  constructor(private httpClient : HttpClient) { }

  save(cadastro: Partial<Conta>){
    return this.httpClient.post<Conta>(this.API, cadastro)
  }
}
