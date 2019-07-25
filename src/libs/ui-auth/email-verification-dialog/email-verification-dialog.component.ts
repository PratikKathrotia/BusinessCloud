import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'email-verification-dialog',
  templateUrl: './email-verification-dialog.component.html',
  styleUrls: ['./email-verification-dialog.component.scss']
})
export class EmailVerificationDialogComponent implements OnInit {
  successMessage;

  constructor(
    private dialogRef: MatDialogRef<EmailVerificationDialogComponent>,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {}

  handleOkClick(): void {
    this.dialogRef.close();
  }

  handleSendClick(): void {
    this.afAuth.auth.currentUser.sendEmailVerification().then(() => {
      this.successMessage = 'Verification email sent successfully';
    }).catch(function(error) {
      alert(error);
    });
  }

}
