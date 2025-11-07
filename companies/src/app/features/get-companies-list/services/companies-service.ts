import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  // @todo .env
  private readonly API_URL = 'https://faker-api.milki.space';

  private http = inject(HttpClient);

  public getList(): Observable<any> {
    return this.http.get('/industries');
  }

  // @todo
  public getCompanyById(id: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/companies/${id}`);
  }
}
