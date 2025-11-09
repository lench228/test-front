import { inject, Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { map, Observable } from 'rxjs';
import { ApiService } from '@/core/services';
import { iCompaniesRequest, iCompaniesResponse, iCompany } from '@/core';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  private ApiService = inject(ApiService);

  public getCompanies(params: iCompaniesRequest): Observable<iCompany[]> {
    const httpParams = this.createHttpParams(params);

    return this.ApiService.get<iCompaniesResponse>('/companies', httpParams).pipe(
      map((item) => item.data),
    );
  }

  public getCompanyById(id: string): Observable<iCompany> {
    return this.ApiService.get<iCompany>(`/companies/${id}`);
  }

  private createHttpParams(params: iCompaniesRequest) {
    let httpParams = new HttpParams();

    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        httpParams = httpParams.set(key, value.toString());
      }
    });

    return httpParams;
  }
}
