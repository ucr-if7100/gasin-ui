import { Component  } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators  } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterModule } from "@angular/router";

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
    RouterModule
  ]
})
export class RegisterAccountComponent {

  public account: FormGroup;
  public isBankAccount = true;

  constructor(private fb: FormBuilder) {
    this.account = this.fb.group({
      accountName: ['', Validators.required],
      bankAccountType: ['', Validators.required],
      bankName: ['', Validators.required],
      currentBalance: ['', Validators.required],
      card: ['', Validators.required],
      iban: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    });

    this.account.controls['bankAccountType'].valueChanges.subscribe(selectedValue => {
      this.isBankAccount = selectedValue === 'Cash' ? false : true;
      this.account.controls["iban"].setValidators(this.isBankAccount ? [Validators.required] : null);
      this.account.controls["iban"].updateValueAndValidity();
      this.account.controls["bankName"].setValidators(this.isBankAccount ? [Validators.required] : null);
      this.account.controls["bankName"].updateValueAndValidity();
      this.account.controls["card"].setValidators(this.isBankAccount ? [Validators.required] : null);
      this.account.controls["card"].updateValueAndValidity();
      this.account.controls["phoneNumber"].setValidators(this.isBankAccount ? [Validators.required] : null);
      this.account.controls["phoneNumber"].updateValueAndValidity();
    })
  }

  public onSubmit() {
    if (this.account.dirty && this.account.valid) {
      alert('Tu cuenta ha sido registrada correctamente!');
    }
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.account.controls[controlName].hasError(errorName);
  }

}
