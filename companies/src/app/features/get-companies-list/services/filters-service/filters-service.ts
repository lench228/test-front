import { computed, inject, Injectable, signal } from '@angular/core';

import { ApiService, iCompaniesRequest, iFilterModel, SortBy, SortingOrder } from '@/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  apiService = inject(ApiService);

  direction = signal<SortingOrder>('desc');
  sortBy = signal<SortBy | undefined>(undefined);
  filters = signal<iFilterModel>({
    query: '',
    industry: '',
    company_type: '',
  });

  getQueryParams = computed<iCompaniesRequest>(() => ({
    sort_order: this.direction(),
    sort_by: this.sortBy(),
    q: this.filters().query,
    company_type: this.filters().company_type,
    industry: this.filters().industry,
  }));

  updateFilters(filters: iFilterModel) {
    this.filters.set(filters);
  }

  public getIndustries(): Observable<string[]> {
    return this.apiService.get<string[]>(`/industries`);
  }

  public getTypes(): Observable<string[]> {
    return this.apiService.get<string[]>(`/types`);
  }
}
