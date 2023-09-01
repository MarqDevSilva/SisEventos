import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth-service/auth.service';
import { Conta } from 'src/app/share/model/conta';

@Injectable({
  providedIn: 'root'
})
export class EditarEventoService {

  private readonly API = 'api/eventos/'

  constructor(
    private httpClient : HttpClient,
    private authService : AuthService
    ) { }

  getInfo(id: string | null): Observable<Conta[]>{
    const headers = this.authService.auth();
    return this.httpClient.get<Conta[]>(`${this.API}/${id}`, {headers});
  }
}
