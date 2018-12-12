export interface User {
  id: any;
  name: string;
  surname: string;
  email: string;
}
export interface UserSignIn {
  email: string;
  password: string;
}
export interface UserGetNewPassword {
  email: string;
}
export interface ChangePassword {
  oldPass: string;
  newPass: string;
  password: string;
}
