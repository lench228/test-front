import { Component } from '@angular/core';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NAV_ROUTES } from '../../../app.routes';

@Component({
  selector: 'app-layout-component',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.scss',
})
export class LayoutComponent {
  protected readonly navRoutes = NAV_ROUTES;
}
