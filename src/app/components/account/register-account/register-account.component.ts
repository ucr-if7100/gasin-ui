import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { Router, RouterModule } from '@angular/router';
import { AccountService } from 'src/app/services/account-service/account.service';
import { SuccessDialogComponent } from 'src/app/components/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from '../../error-dialog/error-dialog.component';



@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatDialogModule
  ],
})
export class RegisterAccountComponent {
  public account: FormGroup;
  public isBankAccount = true;


  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private dialog: MatDialog,
    private router: Router
    ) {

    this.account = this.fb.group({
      accountName: ['', Validators.required],
      bankAccountType: ['', Validators.required],
      bankName: ['', Validators.required],
      currentBalance: ['', Validators.required],
      card: ['', Validators.required],
      iban: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });

    this.account.controls['bankAccountType'].valueChanges.subscribe(
      (selectedValue) => {
        this.isBankAccount = selectedValue === 'Cash' ? false : true;
        this.account.controls['iban'].setValidators(
          this.isBankAccount ? [Validators.required] : null
        );
        this.account.controls['iban'].updateValueAndValidity();
        this.account.controls['bankName'].setValidators(
          this.isBankAccount ? [Validators.required] : null
        );
        this.account.controls['bankName'].updateValueAndValidity();
        this.account.controls['card'].setValidators(
          this.isBankAccount ? [Validators.required] : null
        );
        this.account.controls['card'].updateValueAndValidity();
        this.account.controls['phoneNumber'].setValidators(
          this.isBankAccount ? [Validators.required] : null
        );
        this.account.controls['phoneNumber'].updateValueAndValidity();
      }
    );
  }

  openSuccessModal(): void {
    const dialogRef = this.dialog.open(SuccessDialogComponent, {
      width: '300px',
      disableClose: true,
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {

    });

    setTimeout(() => {
      dialogRef.close();
      this.router.navigate(['/']);
    }, 3000);
    
  }

  openErrorModal(): void {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
      width: '300px',
      disableClose: true,
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {

    });

    setTimeout(() => {
      dialogRef.close();
    }, 3000);
    
  }

  public onSubmit() {

    if (this.account.dirty && this.account.valid) {
      const newAccount = {
        accountName: this.account.value.accountName,
        bankAccountType: this.account.value.bankAccountType,
        bankName: this.account.value.bankName,
        currentBalance: this.account.value.currentBalance,
        card: this.account.value.card,
        iban: this.account.value.iban,
        phoneNumber: this.account.value.phoneNumber,
        id_user: '11ee10a9-ee93-f6c2-89da-b05cda920d08',
        active: true,
      };

      this.accountService.saveAccount(newAccount).subscribe(
        () => {
          this.openSuccessModal();
        },
        (error) => {
          this.openErrorModal();
        }
      );

    }
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.account.controls[controlName].hasError(errorName);
  };
}
