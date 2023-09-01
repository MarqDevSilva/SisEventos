import { AuthService } from './../../auth-service/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InformacoesBasicas } from 'src/app/share/model/evento';

@Injectable({
  providedIn: 'root'
})
export class EventosService {


  private readonly API = 'api/eventos';

  constructor(private httpClient: HttpClient,
    private authService : AuthService) {}

  getInfo(): Observable<InformacoesBasicas[]>{
    const headers = this.authService.auth();
    return this.httpClient.get<InformacoesBasicas[]>(this.API, {headers}).pipe(
    );
  }
}
