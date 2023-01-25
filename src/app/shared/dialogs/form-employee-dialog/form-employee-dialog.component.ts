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
  selector: 'app-form-employee-dialog',
  templateUrl: './form-employee-dialog.component.html',
  styleUrls: ['./form-employee-dialog.component.scss']
})
export class FormEmployeeDialogComponent implements OnInit {


  groups = [
    {id: '1', name: 'IT'},
    {id: '2', name: 'Marketing'},
    {id: '3', name: 'HR'},
    {id: '4', name: 'Management'},
    {id: '5', name: 'Product'},
    {id: '6', name: 'Sales'},
    {id: '7', name: 'Operation'},
    {id: '8', name: 'Development'},
    {id: '9', name: 'OB'},
    {id: '10', name: 'Security'},
  ];

  public groupCtrl: FormControl = new FormControl();

  public groupFilterCtrl: FormControl = new FormControl();

  public filteredGroups: ReplaySubject<any> = new ReplaySubject(1);

  @ViewChild('singleSelect', { static: false }) singleSelect: MatSelect;
  protected _onDestroy = new Subject();

  singleButton = false;
  doubleButton = false;
  message = '';
  submitted = false;

  employeeForm: FormGroup;
  UserName = '';
  FirstName = ''
  LastName = '';
  Email = ''
  BirthDate = '';
  BasicSalary= '';
  Status= '';
  Group= ''
  Description='';

  employeeData:any;
  today = moment().format('YYYY-MM-DD');
  birthdate: FormControl = new FormControl(moment().format('YYYY-MM-DD'));
  description: FormControl = new FormControl(moment().format('YYYY-MM-DD'));
  //groups = ['IT', 'Marketing', 'HR','Management', 'Product', 'Sales', 'Operation', 'Development', 'OB', 'Security'];

  constructor(
    private dialogRef: MatDialogRef<FormEmployeeDialogComponent>,
    private _formBuilder: FormBuilder,
    private _utilityService: UtilityService,
    private dialog: MatDialog,
    private _storageService:StorageService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data
  ) {


    this.employeeForm = this._formBuilder.group({
      username: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name:['', Validators.required],
      email: ['', [Validators.email,Validators.required]],
      birthdate: [this.birthdate, [Validators.required]],
      basic_salary: ['', [Validators.required]],
      status:['', Validators.required],
      //groupCtrl:['', Validators.required],
      description:[this.description, Validators.required],
    });

  }

  async ngOnInit() {
    console.log( 'Data person', this.data);

    this.groupCtrl.setValue(this.groups[1]);

    this.filteredGroups.next(this.groups.slice());



    this.groupFilterCtrl.valueChanges

      .pipe(takeUntil(this._onDestroy))

      .subscribe(() => {

        this.filterBanks();

      });

  }

  ngAfterViewInit() {

    this.setInitialValue();

  }

  protected setInitialValue() {

    this.filteredGroups

      .pipe(take(1), takeUntil(this._onDestroy))

      .subscribe(() => {

          this.singleSelect.compareWith = (a: Website, b: Website) => a && b && a.id === b.id;

      });

  }

  protected filterBanks() {

    if (!this.groups) {

      return;

    }



    let search = this.groupFilterCtrl.value;

    if (!search) {

      this.filteredGroups.next(this.groups.slice());

      return;

    } else {

      search = search.toLowerCase();

    }



    this.filteredGroups.next(

      this.groups.filter(groupname => groupname.name.toLowerCase().indexOf(search) > -1)

    );

  }

  ngOnDestroy() {

    this._onDestroy.next();

    this._onDestroy.complete();

  }

  dismiss(data?) {
    this.dialogRef.close(data);
  }

  onSubmitRequest(){

    this.submitted = true;

    if (this.employeeForm.valid) {
      this.saveEmployee();
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.employeeForm);
      return;
    }

  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  async saveEmployee(){

    let dataSubmit = this._storageService.getEmployee();

    const data = {
      id: dataSubmit.length + 1,
      username: this.employeeForm.get("username").value,
      firstName: this.employeeForm.get("first_name").value,
      lastName:this.employeeForm.get("last_name").value,
      email: this.employeeForm.get("email").value,
      birthDate: moment(this.employeeForm.get('birthdate').value).format('YYYY-MM-DD'),
      basicSalary: this.employeeForm.get("basic_salary").value,
      status:this.employeeForm.get("status").value,
      group:this.groupCtrl.value?.name,
      description:moment(this.employeeForm.get('description').value).format('YYYY-MM-DD'),
    }

    this.openSuccessSnackBar("Success input data employee","");

    dataSubmit.push(data);
    this._storageService.saveEmployee(dataSubmit);

    console.log('dataSubmit',dataSubmit);
    this.dismiss();

  }

  openSuccessSnackBar(message: string, action: string){
    this._snackBar.open(message, "", {
      duration: 3000,
      panelClass: ['green-snackbar'],
      verticalPosition: 'top'
     });
    }
}
