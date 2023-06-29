import { AccountType } from "../account-type/account-type";

export class UpdateBankAccountDTO {
  constructor(

    public accountName: string,
    public card: string,
    public phoneNumber: string,
  ) {}
}
