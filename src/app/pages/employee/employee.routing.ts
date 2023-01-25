import { EmployeeComponent } from './employee.component';
import { Route } from '@angular/router';
import { EmployeeListComponent } from './list/list.component';

export const dashboardRoutes: Route[] = [
    {
        path     : '',
        component: EmployeeComponent,
        children : [
            {
                path     : '',
                component: EmployeeListComponent,
            }
        ]
    }
];
