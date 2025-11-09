import { Component } from '@angular/core';
import { CompanySort } from '@/features/get-companies-list/components/company-sort/company-sort';
import { CompanyFilter } from '@/features/get-companies-list/components/company-filter/company-filter';

@Component({
  selector: 'app-controls',
  imports: [CompanySort, CompanyFilter],
  templateUrl: './controls.html',
  styleUrl: './controls.scss',
})
export class Controls {}
