import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/service/auth.service';
import { ConfirmationDialogComponent } from 'app/shared/dialogs/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;
  submitted = false;

  constructor(
    private _authService: AuthService,
    private _router:Router,
    private _formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _dialog:MatDialog
  ) { }

  async ngOnInit() {
    this.signInForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onClickLogin(){
    console.log('onClickLogin');
    //this._router.navigate(['/number-one']);
    this._router.navigateByUrl('/dashboard');
  }

  onSubmitRequest(){

    this.submitted = true;

    if (this.signInForm.valid) {
      this.loginUser();
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.signInForm);
      return;
    }
  }

  async loginUser(){

    const data = {
      username  : this.signInForm.get("username").value,
      password  : this.signInForm.get("password").value,
    }

    const userLogin = await this._authService.login(data);

    if(userLogin.valid){
      this._router.navigateByUrl('/dashboard');
    }else{
      const data = {
        singleButton : true,
        doubleButton : false,
        message : userLogin.message,
      };

      this.openConfirmationDialog(data);
    }

    console.log('userLogin', userLogin);

  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  openConfirmationDialog(param){

    const dialogRef = this._dialog.open(ConfirmationDialogComponent, {
      hasBackdrop: true,
      closeOnNavigation: true,
      disableClose: false,
      panelClass: 'custom-dialog-pane',
      data:param,
    });

  }

}
