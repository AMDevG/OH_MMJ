export interface User {
    id?: string;
    issueDate: Date;
    expirationDate: Date;
    daysRemainCurrFill: number;
    firstName: string;
    lastName: string;
    email: string;
    county: string;
    createdOn: any;
    updatedOn: any;
  }