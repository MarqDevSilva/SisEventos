import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InformacoesBasicas } from 'src/app/share/model/evento';

@Injectable({
  providedIn: 'root'
})
export class PaginaEventoService {

  private readonly API = 'api/eventos';

  constructor(private httpClient: HttpClient) { }

  getInfo(id: string | null): Observable<InformacoesBasicas>{
    return this.httpClient.get<InformacoesBasicas>(`${this.API}/${id}`)
  }
}
