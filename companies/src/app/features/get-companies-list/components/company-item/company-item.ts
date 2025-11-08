import { Component, Input } from '@angular/core';
import { Company } from '@/features/get-companies-list/interfaces';
import { CompanyNamePipe } from '@/shared/pipes/company-name-pipe-pipe';
import { Chip, NavLink, Typography } from '@/shared';

@Component({
  selector: 'app-company-item',
  imports: [CompanyNamePipe, Typography, NavLink, Chip],
  templateUrl: './company-item.html',
  styleUrl: './company-item.scss',
})
export class CompanyItem {
  @Input() company!: Companффывy;
}
