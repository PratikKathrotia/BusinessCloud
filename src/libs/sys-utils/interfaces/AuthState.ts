export interface AuthState {
  isLoggedIn: boolean;
  userId: number;
  accountId: number;
  env: any;
}

export const initialAuthState: AuthState = {
  isLoggedIn: false,
  userId: null,
  accountId: null,
  env: null
};
