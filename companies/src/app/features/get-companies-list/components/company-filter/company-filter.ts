import { Component, inject, signal } from '@angular/core';
import { Preloader, Typography } from '@/shared';
import { FiltersService } from '@/features/get-companies-list';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Button } from '@/shared/components/button/button';
import { debounceTime, combineLatest, finalize } from 'rxjs';

@Component({
  selector: 'app-company-filter',
  imports: [Typography, ReactiveFormsModule, Button, Preloader],
  templateUrl: './company-filter.html',
  styleUrl: './company-filter.scss',
})
export class CompanyFilter {
  filterService = inject(FiltersService);

  industriesOptions = signal<string[]>([]);
  typesOptions = signal<string[]>([]);
  isLoading = signal(true);

  filtersForm = new FormGroup({
    query: new FormControl(''),
    industry: new FormControl(''),
    company_type: new FormControl(''),
  });

  constructor() {
    combineLatest([this.filterService.getIndustries(), this.filterService.getTypes()])
      .pipe(
        finalize(() => {
          this.isLoading.set(false);
        }),
      )
      .subscribe(([industries, types]) => {
        this.industriesOptions.set(industries);
        this.typesOptions.set(types);
      });

    this.filtersForm.valueChanges.pipe(debounceTime(300)).subscribe(() => {
      this.filterService.updateFilters(this.filtersForm.value);
    });
  }

  onReset() {
    this.filtersForm.reset();
  }

  protected formIsEmpty() {
    const { query, industry, company_type } = this.filtersForm.value;
    return !industry && !company_type && !query;
  }
}
