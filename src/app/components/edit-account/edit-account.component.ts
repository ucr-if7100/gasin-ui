import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterModule } from "@angular/router";

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
export class EditAccountComponent {

  public accountId: string
  public account: FormGroup;
  public data: any;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {

    this.accountId = this.route.snapshot.paramMap.get('accountId') as string;
    this.data = this.getAccountData(this.accountId);

    this.account = this.fb.group({
      holder: ['', Validators.required],
      type: ['', Validators.required],
      bank: ['', Validators.required],
      balance: ['', Validators.required],
      lastFourDigits: ['', Validators.required],
      iban: ['', Validators.required],
      phone: ['', [Validators.required]]
    });

    this.account.controls['iban'].disable();

    this.account.patchValue({
      holder: this.data.holder,
      type: this.data.type,
      bank: this.data.bank,
      balance: this.data.balance,
      lastFourDigits: this.data.lastFourDigits,
      iban: this.data.iban,
      phone: this.data.phone,
    });
  }

  public onSubmit() {
    if (this.account.dirty && this.account.valid) {
      console.log(this.account.value);
    }
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.account.controls[controlName].hasError(errorName);
  }

  public getAccountData(accountId: any) {
    return {
      holder: accountId,
      type: "C",
      bank: "BCR",
      balance: 0,
      lastFourDigits: "1234",
      iban: "CR12345",
      phone: "88888888"
    };
  }

}
