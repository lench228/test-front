import { Component, inject } from '@angular/core';
import { CompaniesService } from '../../services/companies-service';

@Component({
  selector: 'app-company-list',
  imports: [],
  templateUrl: './company-list.html',
  styleUrl: './company-list.scss',
})
export class CompanyList {
  private service = inject(CompaniesService);
  protected list: any;

  constructor() {
    this.list = this.service.getList();
  }
}
