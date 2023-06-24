import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatDialog, MatDialogRef, MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute, RouterModule } from "@angular/router";

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatDialogModule
  ]
})
export class ViewAccountComponent {

  public accountId: string
  public data: any;

  constructor(private route: ActivatedRoute, public dialog: MatDialog) {

    this.accountId = this.route.snapshot.paramMap.get('accountId') as string;
    this.data = this.getAccountData(this.accountId);
  }

  openDialog(): void {
    this.dialog.open(AccountDetailsDialogComponent, {
      width: '250px',
      enterAnimationDuration: '0ms',
      exitAnimationDuration: '0ms',
      data: this.data
    });
  }

  public getAccountData(accountId: any) {
    return {
      holder: accountId,
      type: "C",
      bank: "BCR",
      balance: -100,
      lastFourDigits: "1234",
      iban: "CR12345",
      phone: "88888888",
      active: 1
    };
  }

}

@Component({
  selector: 'account-details-dialog',
  templateUrl: './account-details-dialog.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class AccountDetailsDialogComponent {
  constructor(public dialogRef: MatDialogRef<AccountDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  public changeAccountState() {
    this.data.active = this.data.active === 1 ? 0 : 1;
  }
}
