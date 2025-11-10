import { Component, inject, signal } from '@angular/core';
import { Typography } from '@/shared';
import { FiltersService } from '@/features/get-companies-list';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Button } from '@/shared/components/button/button';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-company-filter',
  imports: [Typography, ReactiveFormsModule, Button],
  templateUrl: './company-filter.html',
  styleUrl: './company-filter.scss',
})
export class CompanyFilter {
  filterService = inject(FiltersService);

  industriesOptions = signal<string[]>([]);
  typesOptions = signal<string[]>([]);

  filtersForm = new FormGroup({
    query: new FormControl(''),
    industry: new FormControl(''),
    company_type: new FormControl(''),
  });

  constructor() {
    this.filterService.getIndustries().subscribe((data) => this.industriesOptions.set(data));
    this.filterService.getTypes().subscribe((data) => this.typesOptions.set(data));

    this.filtersForm.valueChanges
      .pipe(debounceTime(300))
      .subscribe(() => this.filterService.updateFilters(this.filtersForm.value));
  }

  onReset() {
    this.filtersForm.reset();
  }

  protected formIsEmpty() {
    const { query, industry, company_type } = this.filtersForm.value;
    return !industry && !company_type && !query;
  }
}
