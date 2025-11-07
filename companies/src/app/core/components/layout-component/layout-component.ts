import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { NAV_ROUTES } from '../../../app.routes';
import { NavLink } from '../../../shared';

@Component({
  selector: 'app-layout-component',
  imports: [RouterOutlet, NavLink],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.scss',
})
export class LayoutComponent {
  protected readonly navRoutes = NAV_ROUTES;
}
