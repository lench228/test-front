import { Component, inject } from '@angular/core';

import { SortBy } from '@/features/get-companies-list/interfaces';
import { SORTING_OPTIONS } from '@/features/get-companies-list/const';
import { Button } from '@/shared/components/button/button';
import { FiltersService } from '@/features/get-companies-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Typography } from '@/shared';

@Component({
  selector: 'app-company-sort',
  imports: [Button, FormsModule, ReactiveFormsModule, Typography],
  templateUrl: './company-sort.html',
  styleUrl: './company-sort.scss',
})
export class CompanySort {
  protected readonly SORTING_OPTIONS = SORTING_OPTIONS;

  private filtersService = inject(FiltersService);

  protected getDirectionIcon() {
    return this.filtersService.direction() === 'desc' ? '↓' : '↑';
  }

  protected onSortChange(newSort: Event) {
    const { value } = newSort.target as HTMLSelectElement;

    this.filtersService.sortBy.set(value as SortBy);
  }

  protected toggleDirection() {
    this.filtersService.direction.update((dir) => (dir === 'asc' ? 'desc' : 'asc'));
  }
}
