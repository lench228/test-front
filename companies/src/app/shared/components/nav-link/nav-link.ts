import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavRoute } from '@/app.routes';
import { Typography } from '@/shared';

@Component({
  selector: 'app-nav-link',
  imports: [RouterLinkActive, RouterLink, Typography],
  templateUrl: './nav-link.html',
  styleUrl: './nav-link.scss',
})
export class NavLink {
  @Input() navRoute!: NavRoute;
}
