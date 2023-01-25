import { UtilityService } from 'app/service/utility.service';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { trim } from 'lodash';
import { StorageService } from 'app/service/storage.service';
import * as moment from 'moment';
import { ReplaySubject } from 'rxjs';
import { MatSelect } from '@angular/material/select';
import { take, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Website {

  id: string;

  name: string;

}


@Component({
  selector: 'app-detail-employee-dialog-dialog',
  templateUrl: './detail-employee-dialog.component.html',
  styleUrls: ['./detail-employee-dialog.component.scss']
})
export class DetailEmployeeDialogComponent implements OnInit {

  singleButton = false;
  doubleButton = false;
  message = '';

  UserName = '';
  FirstName = ''
  LastName = '';
  Email = ''
  BirthDate = '';
  BasicSalary= '';
  Status= '';
  Group= ''
  Description='';

  constructor(
    private dialogRef: MatDialogRef<DetailEmployeeDialogComponent>,
    private _formBuilder: FormBuilder,
    private _utilityService: UtilityService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
  }

  async ngOnInit() {
    console.log( 'Data person', this.data);

    if(this.data){
      this.singleButton = this.data.singleButton;
      this.doubleButton = this.data.doubleButton;
      this.message = this.data.message;

      this.UserName = this.data.username;
      this.FirstName = this.data.firstName;
      this.LastName = this.data.lastName;
      this.Email = this.data.email;
      this.BirthDate = moment(this.data.birthDate).format('YYYY-MM-DD');
      this.BasicSalary= this.data.basicSalary;
      this.Status= this.data.status;
      this.Group= this.data.group;
      this.Description=moment(this.data.description).format('YYYY-MM-DD');

    }

  }

  dismiss(data?) {
    this.dialogRef.close(data);
  }
}
