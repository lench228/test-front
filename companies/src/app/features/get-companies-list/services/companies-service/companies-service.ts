import { inject, Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ApiService } from '@/core/services';
import { Company, CompaniesResponse, CompaniesRequest } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  private ApiService = inject(ApiService);

  public getCompanies(params: CompaniesRequest): Observable<CompaniesResponse> {
    let httpParams = new HttpParams();

    // @todo в lib
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        httpParams = httpParams.set(key, value.toString());
      }
    });

    return this.ApiService.get<CompaniesResponse>('/companies', httpParams);
  }

  // @todo
  public getCompanyById(id: string): Observable<Company> {
    return this.ApiService.get<Company>(`/companies/${id}`);
  }
}
