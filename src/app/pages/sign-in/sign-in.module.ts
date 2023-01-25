import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'app/material.module';

const signInRoutes: Route[] = [
  {
    path: '',
    component: SignInComponent
  }
];

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(signInRoutes),
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class SignInModule { }
