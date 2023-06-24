import { AccountType } from "../account-type/account-type";

export class Account {
  constructor(
    public id: string,
    public accountName: string,
    public bankName: string,
    public accountType: AccountType,
    public currentBalance: number,
    public card: string,
    public iban: string,
    public phoneNumber: string,
    public id_user: string,
    public active: boolean
  ) {}
}
