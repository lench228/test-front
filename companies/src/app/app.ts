import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NAV_ROUTES } from './app.routes';
import { LayoutComponent } from './layout-component/layout-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
