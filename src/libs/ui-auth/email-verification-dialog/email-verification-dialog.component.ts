import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertConfig, VariantTypes } from '@angular-cm/sys-utils';

@Component({
  selector: 'email-verification-dialog',
  templateUrl: './email-verification-dialog.component.html',
  styleUrls: ['./email-verification-dialog.component.scss']
})
export class EmailVerificationDialogComponent implements OnInit {
  alertConfig: AlertConfig;
  showAlert: boolean;

  constructor(
    private dialogRef: MatDialogRef<EmailVerificationDialogComponent>,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.showAlert = false;
  }

  configureAlert(error: any): AlertConfig {
    this.showAlert = true;
    if (error) {
      return {
        variant: VariantTypes.ERROR,
        message: error.message
      };
    }
    return {
      variant: VariantTypes.SUCCESS,
      message: `Successfully sent varification email to <br>${this.afAuth.auth.currentUser.email}`
    };
  }

  handleOkClick(): void {
    this.dialogRef.close();
  }

  handleSendClick(): void {
    this.afAuth.auth.currentUser.sendEmailVerification().then(() => {
      this.alertConfig = this.configureAlert(null);
    }).catch(function(error) {
      this.alertConfig = this.configureAlert(error);
    });
  }

}
