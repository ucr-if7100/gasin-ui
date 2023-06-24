import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatDialog, MatDialogRef, MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute, RouterModule } from "@angular/router";
import { AccountService } from 'src/app/services/account-service/account.service';

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
export class ViewAccountComponent implements OnInit{

  public accountId: any
  public data: any;
  public error = false;

  constructor(private route: ActivatedRoute, public dialog: MatDialog, private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountId = this.route.snapshot.paramMap.get('accountId') as string;
    this.loadAccount(this.accountId);
  }

  openDialog(): void {
    this.dialog.open(AccountDetailsDialogComponent, {
      width: '250px',
      enterAnimationDuration: '0ms',
      exitAnimationDuration: '0ms',
      data: this.data
    });
  }

  async loadAccount(accountId: string): Promise<void> {
    try {
      const account = await this.accountService.getAccount(accountId).toPromise();
      if (account) {
        this.data = account;
        console.log(this.data);
      }
    } catch (error) {
      this.error = true;
    }
  }
}

@Component({
  selector: 'account-details-dialog',
  templateUrl: './account-details-dialog.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule,],
})
export class AccountDetailsDialogComponent {
  public title: string;
  public content: string;
  public showActions: boolean;

  constructor(public dialogRef: MatDialogRef<AccountDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private accountService: AccountService) {
    this.title = `${data.active ? 'Desactivar' : 'Activar'} cuenta`;
    this.content = `¿Seguro que desea ${ data.active ? 'desactivar' : 'activar' } la cuenta?`;
    this.showActions = true;
  }

  async changeAccountState(): Promise<void> {
    try {
      await this.accountService.updateAccountState(this.data.id, !this.data.active).toPromise();

      this.title = `Cuenta ${this.data.active ? 'desactivada' : 'activada'}`;
      this.content = `La cuenta se ${this.data.active ? 'desactivó' : 'activó'} correctamente`;
      this.data.active = !this.data.active;
    } catch (error) {
      this.title = `Ups!`;
      this.content = `Ha ocurrido un error al ${this.data.active ? 'desactivar' : 'activar'} la cuenta`;
    }finally{
      this.showActions = false;
    }
  }
}
