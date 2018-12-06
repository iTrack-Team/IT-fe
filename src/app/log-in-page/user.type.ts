export interface User {
    name: string;
    email: string;
    password: string;
    [others: string]: any;
  }
export interface UserSignIn {
  email: string;
  password: string;
}
