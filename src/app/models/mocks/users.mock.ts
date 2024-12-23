import { User } from "../interfaces/users.interface";

export const USERS: User[] = [
  {
    id: 1,
    urlIcon: 'web/common/male_avatar.svg',
    username: 'Balbino V12',
    email: 'balbino.v12@gmail.com',
    password: '1234',
    isTermsOfService: true,
    isRemeber: true,
    isActive: true,
    atCreate: new Date(),
    atUpdate: new Date()
  }
];
