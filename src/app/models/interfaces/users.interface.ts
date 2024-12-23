export interface User {
  id: number;
  urlIcon?: string;
  username: string;
  email: string;
  password: string;
  isTermsOfService: boolean;
  isRemeber: boolean;
  isActive: boolean;
  atCreate: Date;
  atUpdate: Date;
}
