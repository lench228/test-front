import { Component, inject, OnInit } from '@angular/core';

import { CompanyItem } from '@/features/get-companies-list/components/company-item/company-item';
import { Observable, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CompaniesService, iCompany } from '@/core';
import { Controls } from '@/features/get-companies-list/components/controls/controls';
import { FiltersService } from '@/features/get-companies-list';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-company-list',
  imports: [CompanyItem, AsyncPipe, Controls],
  templateUrl: './company-list.html',
  styleUrl: './company-list.scss',
})
export class CompanyList {
  private companiesService = inject(CompaniesService);
  private filtersService = inject(FiltersService);

  protected companies$: Observable<iCompany[]> = toObservable(
    this.filtersService.getQueryParams,
  ).pipe(switchMap((params) => this.companiesService.getCompanies(params)));
}
