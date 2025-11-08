import { Component, inject, OnInit } from '@angular/core';

import { CompanyItem } from '@/features/get-companies-list/components/company-item/company-item';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CompaniesService, iCompany } from '@/core';

@Component({
  selector: 'app-company-list',
  imports: [CompanyItem, AsyncPipe],
  templateUrl: './company-list.html',
  styleUrl: './company-list.scss',
})
export class CompanyList implements OnInit {
  private service = inject(CompaniesService);

  protected companies$!: Observable<iCompany[]>;

  ngOnInit() {
    this.companies$ = this.service.getCompanies({});
  }
}
