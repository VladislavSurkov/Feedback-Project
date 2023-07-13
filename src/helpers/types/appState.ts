import { ItodoState } from "./product";
import { IUserState } from "./user";


export interface IAppState {
    auth: IUserState,
    todo: ItodoState,
}