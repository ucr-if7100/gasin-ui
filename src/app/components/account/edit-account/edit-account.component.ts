import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterModule } from "@angular/router";
import { AccountService } from 'src/app/services/account-service/account.service';
import { UpdateBankAccountDTO } from 'src/app/domain/UpdateBankAccountDTO/UpdateBankAccountDTO';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css'],
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
export class EditAccountComponent implements OnInit{

  public accountId: any
  public account: FormGroup;
  public data: any;
  public error = false;
  public isBankAccount = true;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private accountService: AccountService) {
    this.account = this.fb.group({
      accountName: ['', Validators.required],
      bankAccountType: ['', Validators.required],
      bankName: ['', Validators.required],
      currentBalance: ['', Validators.required],
      card: ['', Validators.required],
      iban: ['', Validators.required],
      phoneNumber: ['', [Validators.required]]
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

    this.account.controls['bankAccountType'].disable();
    this.account.controls['iban'].disable();

    this.account.controls['currentBalance'].disable();

  }

  ngOnInit(): void {
    this.accountId = this.route.snapshot.paramMap.get('accountId') as string;
    this.accountId="11ee12d5-d176-7514-9a35-a8a1591622fa"; //Prueba
    this.loadAccount(this.accountId);

  }

  public onSubmit() {
    const requestBody = new UpdateBankAccountDTO(this.account.controls['accountName'].value, this.account.controls['card'].value,this.account.controls['phoneNumber'].value);

    this.accountService.updateAccount(this.accountId,requestBody).subscribe(() => {
      console.log('Solicitud PUT enviada correctamente');
    }, error => {
      console.error('Error al enviar la solicitud PUT:', error);
    });

  }

  public hasError = (controlName: string, errorName: string) => {
    return this.account.controls[controlName].hasError(errorName);
  }

  async loadAccount(accountId: string): Promise<void> {
    try {
      const account = await this.accountService.getAccount(accountId).toPromise();
      if (account) {
        this.data = account;
        this.account.patchValue({
          accountName: this.data.accountName,
          bankAccountType: this.data.bankAccountType,
          bankName: this.data.bankName,
          currentBalance: this.data.currentBalance,
          card: this.data.card,
          iban: this.data.iban,
          phoneNumber: this.data.phoneNumber,
        });
      }
    } catch (error) {
      this.error = true;
    }
  }


}
