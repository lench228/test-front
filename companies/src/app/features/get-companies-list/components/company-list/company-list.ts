import { Component, inject, signal, OnInit } from '@angular/core';
import { Company, CompaniesResponse } from '../../interfaces';
import { CompaniesService } from '../../services';
import { CompanyItem } from '@/features/get-companies-list/components/company-item/company-item';

@Component({
  selector: 'app-company-list',
  imports: [CompanyItem],
  templateUrl: './company-list.html',
  styleUrl: './company-list.scss',
})
export class CompanyList implements OnInit {
  private service = inject(CompaniesService);

  protected companies = signal<Company[]>([]);

  ngOnInit() {
    this.loadCompanies();
  }

  private loadCompanies() {
    this.service.getCompanies({}).subscribe({
      next: (response: CompaniesResponse) => {
        this.companies.set(response.data);
      },
    });
  }
}
