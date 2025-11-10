import { Component, inject, OnInit, signal } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { debounceTime, Observable, switchMap, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CompanyNamePipe, Preloader } from '@/shared';
import { CompanyLogo, Typography } from '@/shared';
import { CompaniesService, iCompany } from '@/core';

@Component({
  selector: 'app-company-detail',
  imports: [AsyncPipe, CompanyNamePipe, Typography, CompanyNamePipe, CompanyLogo, Preloader],
  templateUrl: './company-detail.html',
  styleUrl: './company-detail.scss',
})
export class CompanyDetail implements OnInit {
  isLoading = signal(true);

  service = inject(CompaniesService);

  company$!: Observable<iCompany>;

  private readonly route = inject(ActivatedRoute);

  ngOnInit() {
    this.company$ = this.route.params.pipe(
      switchMap((params) => this.service.getCompanyById$(params['id'])),
      debounceTime(300),
      tap(() => this.isLoading.set(false)),
    );
  }
}
