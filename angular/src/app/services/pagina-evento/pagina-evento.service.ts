import { paginaEvento } from './../../model/pagina-evento';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginaEventoService {

  private readonly API = 'api/pagina-evento';

  constructor(private httpClient : HttpClient) { }

  save(paginaEvento: Partial<paginaEvento>){
    return this.httpClient.post<paginaEvento>(this.API, paginaEvento);
  }

  update(id: string, paginaEvento: Partial<paginaEvento>){
    return this.httpClient.put<paginaEvento>(`${this.API}/${id}`, paginaEvento);
  }

  getPage(id: string | null): Observable<paginaEvento>{
    return this.httpClient.get<paginaEvento>(`${this.API}/${id}`)
  }
}
