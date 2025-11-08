import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-company-logo',
  imports: [],
  templateUrl: './company-logo.html',
  styleUrl: './company-logo.scss',
})
export class CompanyLogo {
  @Input() src = '';
  @Input() alt = '';
}
