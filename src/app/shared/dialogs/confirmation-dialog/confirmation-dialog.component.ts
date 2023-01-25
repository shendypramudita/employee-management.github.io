import { UtilityService } from 'app/service/utility.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { trim } from 'lodash';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  singleButton = false;
  doubleButton = false;
  message = '';

  constructor(
    private dialogRef: MatDialogRef<ConfirmationDialogComponent>,
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
    }

  }

  dismiss(data?) {
    this.dialogRef.close(data);
  }
}
