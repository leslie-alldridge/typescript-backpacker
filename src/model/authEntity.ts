export interface AuthEntity {
  isFetching: boolean;
  isAuthenticated: () => void;
  user: () => void;
  errorMessage: string;
}
