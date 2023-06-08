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

  constructor(private fb: FormBuilder) {
    this.account = this.fb.group({
      holder: ['', Validators.required],
      type: ['', Validators.required],
      bank: ['', Validators.required],
      balance: ['', Validators.required],
      lastFourDigits: ['', Validators.required],
      iban: ['', Validators.required],
      phone: ['', Validators.required]
    });
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
