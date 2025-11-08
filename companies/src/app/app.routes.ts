import { Routes } from '@angular/router';

import { LayoutComponent } from './core/components';

export const ROUTE_PATHS = {
  list: 'list',
  details: 'detail/:id',
  map: 'map',
} as const;

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: ROUTE_PATHS.list,
        pathMatch: 'full',
      },
      {
        path: ROUTE_PATHS.list,
        loadComponent: () => import('@/features/get-companies-list').then((m) => m.CompanyList),
        title: 'Список компаний',
      },
      {
        path: ROUTE_PATHS.details,
        loadComponent: () =>
          import('@/features/get-company-detail/components').then((m) => m.CompanyDetail),
        title: 'Детали компании',
      },
      {
        path: ROUTE_PATHS.map,
        loadComponent: () =>
          import('@/features/get-yandex-map/components').then((m) => m.CompanyYandexMap),
        title: 'Карта компаний',
      },
    ],
  },
  {
    path: '**',
    redirectTo: ROUTE_PATHS.list,
  },
];

export interface NavRoute {
  label: string;
  routerLink: string[];
  icon?: string;
}

export const NAV_ROUTES: NavRoute[] = [
  {
    label: 'Список компаний',
    routerLink: ['/', ROUTE_PATHS.list],
  },
  {
    label: 'Карта компаний',
    routerLink: ['/', ROUTE_PATHS.map],
  },
];
