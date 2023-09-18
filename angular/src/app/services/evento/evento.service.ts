import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from 'src/app/model/evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private readonly API = 'api/eventos';

  constructor(
    private httpClient: HttpClient) {}

  save(evento: Partial<Evento>){
    return this.httpClient.post<Evento>(this.API, evento);
  }

  getId(id: string | null): Observable<Evento>{
    return this.httpClient.get<Evento>(`${this.API}/${id}`)
  }

  update(id: string, evento: Partial<Evento>){
    return this.httpClient.put<Evento>(`${this.API}/${id}`, evento);
  }

  list(): Observable<Evento[]>{
    return this.httpClient.get<Evento[]>(this.API).pipe(
    );
  }
}
