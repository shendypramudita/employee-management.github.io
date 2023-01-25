import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'app/material.module';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from 'app/pages/home/home.component';

const dashboardInRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent
  }
];

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardInRoutes),
    MaterialModule
  ]
})
export class LayOutModule { }
