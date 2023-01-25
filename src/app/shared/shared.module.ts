import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Overlay } from '@angular/cdk/overlay';
import { MaterialModule } from 'app/material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog/confirmation-dialog.component';
import { FormEmployeeDialogComponent } from './dialogs/form-employee-dialog/form-employee-dialog.component';
import { NgxCurrencyModule } from 'ngx-currency';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DetailEmployeeDialogComponent } from './dialogs/detail-employee-dialog/detail-employee-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        MatToolbarModule,
        NgxCurrencyModule,
        NgxMatSelectSearchModule,
        MatSnackBarModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        MatToolbarModule
    ],
    declarations: [
      ConfirmationDialogComponent,
      FormEmployeeDialogComponent,
      DetailEmployeeDialogComponent
      ],
    entryComponents: [
      ConfirmationDialogComponent,
      FormEmployeeDialogComponent,
      DetailEmployeeDialogComponent
    ],
    providers: [Overlay],
})
export class SharedModule
{
}
