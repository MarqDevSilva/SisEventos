import { AuthService } from 'src/app/auth-service/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conta } from 'src/app/share/model/conta';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  private readonly API = 'api/conta'

  constructor(
    private httpClient : HttpClient,
    private authService : AuthService
    ) { }

  getInfo(): Observable<Conta[]>{
    const headers = this.authService.auth();
    return this.httpClient.get<Conta[]>(this.API, {headers});
  }

  putInfo(cadastro : Observable<Conta>){
    const headers = this.authService.auth();
    return this.httpClient.put<Conta[]>(this.API, cadastro, {headers});
  }
}
