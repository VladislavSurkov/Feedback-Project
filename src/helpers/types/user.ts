export interface IOperationsUser {
  email: string;
  name?: string;
  username: string;
  password: string;
}
export interface IOperationsUserLogin {
  email: string;
  password: string;
}
export interface IUser {
  email: string;
  image?: string;
  name?: string;
  username: string;
}

export interface IUserState {
  token: null | string;
  user: IUser;
  isLogin: boolean;
  isLoading: boolean;
  error: null | string;
}
