import { AnyAction } from "redux";

export function isError(action: AnyAction) {
    return action.type.endsWith('rejected');
}