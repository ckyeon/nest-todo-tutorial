export const USER_ROLES = ['admin', 'member'] as const;
export type UserRoleType = typeof USER_ROLES[number];

export interface User {
  email: string;
  password: string;
  // name: string;
  // role: UserRoleType;
}
