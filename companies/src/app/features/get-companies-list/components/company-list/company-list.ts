import { Component, inject, signal, OnInit } from '@angular/core';
import { Company, CompaniesResponse } from '../../types';
import { CompaniesService } from '../../services';

@Component({
  selector: 'app-company-list',
  imports: [],
  templateUrl: './company-list.html',
  styleUrl: './company-list.scss',
})
export class CompanyList implements OnInit {
  private service = inject(CompaniesService);
  protected companies = signal<Company[]>([]);
  protected page = signal(1);

  protected totalPages = 0;
  protected size = 0;

  ngOnInit() {
    this.loadCompanies();
  }

  private loadCompanies() {
    this.service.getCompanies({}).subscribe({
      next: (response: CompaniesResponse) => {
        this.companies.set(response.data);
        this.page.set(response.page);

        this.totalPages = response.total_pages;
        this.size = response.total;
      },
    });
  }
}
