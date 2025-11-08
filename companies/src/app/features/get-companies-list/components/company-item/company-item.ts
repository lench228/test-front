import { Component, Input } from '@angular/core';
import { iCompany } from '@/core';

import { Chip, CompanyLogo, NavLink, Typography, CompanyNamePipe } from '@/shared';

@Component({
  selector: 'app-company-item',
  imports: [CompanyNamePipe, Typography, NavLink, Chip, CompanyLogo],
  templateUrl: './company-item.html',
  styleUrl: './company-item.scss',
})
export class CompanyItem {
  @Input() company!: iCompany;
}
