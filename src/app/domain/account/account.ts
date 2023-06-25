import { AccountType } from "../account-type/account-type";

export class Account {
  constructor(
    public accountName: string,
    public bankName: string,
    public bankAccountType: AccountType,
    public currentBalance: number,
    public card: string,
    public iban: string,
    public phoneNumber: string,
    public id?: string,
    public id_user?: string,
    public active?: boolean
  ) {}
}
