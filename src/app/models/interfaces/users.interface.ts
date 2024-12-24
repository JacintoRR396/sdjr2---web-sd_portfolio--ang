export interface User {
  id: number;
  urlIcon?: string;
  username: string;
  email: string;
  password: string;
  role: Role;
  isTermsOfService: boolean;
  isRemeber: boolean;
  isActive: boolean;
  atCreate: Date;
  atUpdate: Date;
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
