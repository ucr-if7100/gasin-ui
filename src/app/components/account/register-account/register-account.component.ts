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
import { AccountService } from 'src/app/services/account-service/account.service';



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

  constructor(private fb: FormBuilder, private accountService: AccountService) {



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
      const newAccount = {
        accountName: this.account.value.accountName,
        bankAccountType: this.account.value.bankAccountType,
        bankName: this.account.value.bankName,
        currentBalance: this.account.value.currentBalance,
        card: this.account.value.card,
        iban: this.account.value.iban,
        phoneNumber: this.account.value.phoneNumber,
        id_user: '11ee10a9-ee93-f6c2-89da-b05cda920d08',
        active: true
      };

      console.table(newAccount)
      console.log(newAccount)

      this.accountService.saveAccount(newAccount).subscribe(
        () => {
          alert('¡Tu cuenta ha sido registrada correctamente!');
        },
        (error) => {
          console.error('Error al registrar la cuenta:', error);
          alert('Error al registrar la cuenta. Por favor, inténtalo de nuevo.');
        }
      );

    }
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.account.controls[controlName].hasError(errorName);
  }

}
