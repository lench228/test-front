import { Component, inject, signal } from '@angular/core';

import { CompanyItem } from '@/features/get-companies-list/components/company-item/company-item';

import { debounceTime, finalize, Observable, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CompaniesService, iCompany } from '@/core';
import { Controls } from '@/features/get-companies-list/components/controls/controls';
import { FiltersService } from '@/features/get-companies-list';
import { toObservable } from '@angular/core/rxjs-interop';
import { Preloader, Typography } from '@/shared';

@Component({
  selector: 'app-company-list',
  imports: [CompanyItem, AsyncPipe, Controls, Typography, Preloader],
  templateUrl: './company-list.html',
  styleUrl: './company-list.scss',
})
export class CompanyList {
  isLoading = signal(true);

  private companiesService = inject(CompaniesService);
  private filtersService = inject(FiltersService);

  protected companies$: Observable<iCompany[]> = toObservable(
    this.filtersService.getQueryParams,
  ).pipe(
    debounceTime(300),
    switchMap((params) =>
      this.companiesService.getCompanies$(params).pipe(finalize(() => this.isLoading.set(false))),
    ),
  );
}
