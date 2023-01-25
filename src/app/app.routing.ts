import { LayoutComponent } from './layout/layout.component';
import { Route } from '@angular/router';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
// tslint:disable:max-line-length
export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    {path: '', pathMatch : 'full', redirectTo: 'sign-in'},

    // Home Hi App
    {
        path: "",
        resolve    : {
          initialData: InitialDataResolver,
        },
        data: {
          layout: "empty",
          title:'sign-in',
        },
        children: [
          {
            path: "sign-in",
            pathMatch: 'full',
            loadChildren: () =>
              import("app/pages/sign-in/sign-in.module").then(
                (m) => m.SignInModule
              ),
          },
        ],
    },

  // employee
  {path: '',component: LayoutComponent, children: [
    {path: '', loadChildren: () => import('app/layout/layout.module').then(m => m.LayOutModule)},
    { path: 'dashboard',loadChildren: () => import('app/pages/home/home.module').then(m => m.HomeModule)},
  ]},

  // employee
  {path: '',component: LayoutComponent, children: [
    {path: 'employee', loadChildren: () => import('app/pages/employee/employee.module').then(m => m.EmployeeModule)},
  ]},
];

