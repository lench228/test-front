import { Routes } from '@angular/router';
import { LayoutComponent } from './layout-component/layout-component';
import { CompanyList } from './company-list/company-list';
import { CompanyDetail } from './company-detail/company-detail';
import { CompanyYandexMap } from './company-yandex-map/company-yandex-map';

export const ROUTE_PATHS = {
  list: 'list',
  details: 'detail/:id',
  map: 'map',
} as const;

export type RouteParams = {
  id: string;
};

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
        component: CompanyList,
        title: 'Список компаний',
      },
      {
        path: ROUTE_PATHS.details,
        component: CompanyDetail,
        title: 'Детали компании',
      },
      {
        path: ROUTE_PATHS.map,
        component: CompanyYandexMap,
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
