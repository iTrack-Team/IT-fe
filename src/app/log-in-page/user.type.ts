export interface User {
    name: string;
    email: string;
    password: string;
  }
export interface UserSignIn {
  email: string;
  password: string;
}
export interface UserCreateBoard {
  boardName: string;
  fieldCount: number;
  boardDescription: string;
}
