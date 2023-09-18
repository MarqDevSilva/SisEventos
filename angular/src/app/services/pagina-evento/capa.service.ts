import { Injectable } from '@angular/core';

import { capa } from 'src/app/model/capa';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CapaService {

  private readonly API = 'api/capa';

  constructor(private httpClient : HttpClient) { }

  save(capa: Partial<capa>){
    return this.httpClient.post<capa>(this.API, capa);
  }

  update(id: string, capa: Partial<capa>){
    return this.httpClient.put<capa>(`${this.API}/${id}`, capa);
  }

  getCapa(id: string | null): Observable<capa>{
    return this.httpClient.get<capa>(`${this.API}/${id}`)
  }
}

