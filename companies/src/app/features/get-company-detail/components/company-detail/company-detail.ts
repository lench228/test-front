import { Component, inject, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CompanyNamePipe } from '@/shared';
import { CompanyLogo, Typography } from '@/shared';
import { CompaniesService, iCompany } from '@/core';

@Component({
  selector: 'app-company-detail',
  imports: [AsyncPipe, CompanyNamePipe, Typography, CompanyNamePipe, CompanyLogo],
  templateUrl: './company-detail.html',
  styleUrl: './company-detail.scss',
})
export class CompanyDetail implements OnInit {
  service = inject(CompaniesService);

  company$!: Observable<iCompany>;

  private readonly route = inject(ActivatedRoute);

  ngOnInit() {
    this.company$ = this.route.params.pipe(
      switchMap((params) => this.service.getCompanyById(params['id'])),
    );
  }
}
