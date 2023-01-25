import { EmployeeListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { Route, RouterModule } from '@angular/router';
import { MaterialModule } from 'app/material.module';
import { dashboardRoutes } from './employee.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'app/shared/shared.module';
import { NgxCurrencyModule } from 'ngx-currency';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
  ],
  imports: [
    RouterModule.forChild(dashboardRoutes),
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    NgxCurrencyModule,
    NgxPaginationModule
  ]
})
export class EmployeeModule { }
