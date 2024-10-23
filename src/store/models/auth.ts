export interface IAuth {
  userId?: number;
  name?: string;
  lastName?: string;
  email?: string;
  avatar?: string;
  lastLogin?: string;
  phoneNumber?: string;
  token: string | null;
  error?: string | null;
}

export const AuthEmptyState: IAuth = {
  token: null,
  error: null,
};
