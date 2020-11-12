export interface User {
    id?: string;
    issueDate: Date;
    expirationDate: Date;
    daysRemainCurrFill: number;
    firstName: string;
    lastName: string;
    email: string;
    county: string;
    userId: string;
    createdOn: any;
    updatedOn: any;
  }