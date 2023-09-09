import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from 'src/app/model/evento';

@Injectable({
  providedIn: 'root'
})
export class PaginaEventoService {

  private readonly API = 'api/eventos';

  constructor(private httpClient: HttpClient) { }

  getInfo(id: string | null): Observable<Evento>{
    return this.httpClient.get<Evento>(`${this.API}/${id}`)
  }
}
