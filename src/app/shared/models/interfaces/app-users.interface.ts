export interface User {
  id: number;
  urlIcon?: string;
  username: string;
  email: string;
  password: string;
  role: RoleType;
  isTermsOfService: boolean;
  isActive: boolean;
  atCreate: Date;
  atUpdate: Date;
  atLastAccess: Date;
}

export interface Role {
  id: number;
  name: string;
  type: RoleType;
  description: string;
}

export enum RoleType {
  ROLE_VIEWER, ROLE_USER, ROLE_ADMIN
}
