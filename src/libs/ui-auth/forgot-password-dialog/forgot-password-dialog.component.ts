import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup } from '@angular/forms';
import { forgotPasswordForm } from '@angular-cm/ui-formly';
import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  ActionTypes,
  AlertConfig,
  VariantTypes
} from '@angular-cm/sys-utils';

@Component({
  selector: 'forgot-password-dialog',
  templateUrl: './forgot-password-dialog.component.html',
  styleUrls: ['./forgot-password-dialog.component.scss']
})
export class ForgotPasswordDialogComponent implements OnInit {
  form: FormGroup;
  formFields: FormlyFieldConfig[];
  model: any;
  hasError: boolean;
  alertConfig: AlertConfig;

  constructor(
    private dialogRef: MatDialogRef<ForgotPasswordDialogComponent>,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.form = new FormGroup({});
    this.formFields = forgotPasswordForm;
    this.model = {};
    this.hasError = false;
  }

  handleSendClick(): void {
    if (this.form.valid) {
      this.afAuth.auth.sendPasswordResetEmail(
        this.model['email']
      ).then(() => this.dialogRef.close(ActionTypes.OK)
      ).catch((error) => {
        this.hasError = true;
        this.alertConfig = {
          variant: VariantTypes.ERROR,
          message: error.message
        };
      });
    }
  }

  handleCancelClick(): void {
    this.dialogRef.close(ActionTypes.CANCEL);
  }

}
