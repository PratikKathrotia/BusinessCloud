export interface AuthState {
  isEmailVerified: boolean;
  isLoggedIn: boolean;
  currentUid: string;
}

export const initialAuthState: AuthState = {
  isEmailVerified: false,
  isLoggedIn: false,
  currentUid: null
};

