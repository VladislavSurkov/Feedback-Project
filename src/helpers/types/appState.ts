import { ITodoState } from "./product";
import { IUserState } from "./user";


export interface IAppState {
    auth: IUserState,
    todo: ITodoState,
}