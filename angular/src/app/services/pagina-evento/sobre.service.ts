import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sobre } from 'src/app/model/sobre';

@Injectable({
  providedIn: 'root'
})
export class SobreService {

  private readonly API = 'api/sobre';

  constructor(private httpClient : HttpClient) {}

  save(sobre: Partial<Sobre>){
    return this.httpClient.post<Sobre>(this.API, sobre);
  }

  update(id: string, sobre: Partial<Sobre>){
    return this.httpClient.put<Sobre>(`${this.API}/${id}`, sobre);
  }

  getSobre(id: string | null): Observable<Sobre>{
    return this.httpClient.get<Sobre>(`${this.API}/${id}`)
  }
}
