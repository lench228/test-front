import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly API_URL = 'https://faker-api.milki.space';

  get<T>(endpoint: string, params?: HttpParams): Observable<T> {
    const options = params ? { params } : {};
    return this.http
      .get<T>(`${this.API_URL}${endpoint}`, options)
      .pipe(retry(1), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API Error:', error);
    return throwError(() => new Error(error.error.message));
  }
}
