import { Role, RoleType, User } from "../interfaces/app-users.interface";

export const ROLES: Role[] = [
  {
    id: 1,
    name: 'ROLE VIEWER',
    type: RoleType.ROLE_VIEWER,
    description: 'The role viewer only ...'
  }
  ,
  {
    id: 2,
    name: 'ROLE USER',
    type: RoleType.ROLE_USER,
    description: 'The role user can ...'
  }
  ,
  {
    id: 3,
    name: 'ROLE ADMIN',
    type: RoleType.ROLE_ADMIN,
    description: 'The role admin is the one who manages the website'
  }
]

const roles: Role[] = ROLES;
export const USERS: User[] = [
  {
    id: 1,
    urlIcon: '/assets/images/web/common/male_avatar.svg',
    username: 'SDJR2',
    email: 'balbino_v12@hotmail.com',
    password: '12345Aa$',
    role: RoleType.ROLE_USER,
    isTermsOfService: true,
    isActive: true,
    atCreate: new Date('2024-11-24T15:29:00'),
    atUpdate: new Date('2024-11-28T16:21:00'),
    atLastAccess: new Date('2024-11-28T16:21:00'),
  },
  {
    id: 2,
    urlIcon: '/assets/images/web/common/female_avatar.svg',
    username: 'MAR',
    email: 'marviso@gmail.com',
    password: '12345Aa$',
    role: RoleType.ROLE_USER,
    isTermsOfService: true,
    isActive: true,
    atCreate: new Date('2024-11-24T15:29:00'),
    atUpdate: new Date('2024-11-28T16:21:00'),
    atLastAccess: new Date('2024-11-28T16:21:00'),
  }
];
