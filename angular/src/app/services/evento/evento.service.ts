import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth-service/auth.service';
import { InformacoesBasicas } from 'src/app/share/model/evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private readonly API = 'api/eventos';

  constructor(
    private httpClient: HttpClient,
    private authService : AuthService
    ) {}

  save(evento: Partial<InformacoesBasicas>){
    const headers = this.authService.auth();
    return this.httpClient.post<InformacoesBasicas>(this.API, evento);
  }
}
