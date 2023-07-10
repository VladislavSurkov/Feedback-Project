import { PayloadAction, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { IUserState } from 'helpers/types/user';
import { login, logout, register, } from './auth-operations';
import { isError } from 'redux/isError';

const initialState: IUserState = {
    token: null,
    user: {
        email: '',
        image: '',
        name: '',
        username: ''
    },
    isLoading: false,
    error: null,
};

const extraActions = [register, login, logout];

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(register.fulfilled, (state, { payload }) => {
                state.token = payload.token;
                state.user = payload.user;
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.token = payload.token;
                state.user = payload.user;
            })
            .addCase(logout.fulfilled, state => {
                state.token = null;
                state.user = {
                    email: '',
                    image: '',
                    name: '',
                    username: ''
                };
            }).addMatcher(
                isAnyOf(...extraActions.map((extraAction) => extraAction.pending)),
                (state) => {
                    state.isLoading = true;
                    state.error = null;
                }
        ).addMatcher(
            isAnyOf(...extraActions.map((extraAction) => extraAction.fulfilled)),
            (state) => {
                state.isLoading = false;
                state.error = null;
            }
        ).addMatcher(isError, (state, { payload }: PayloadAction<string>) => {
                console.log(`rejected payload: ${payload}`);
                state.error = payload;
                state.isLoading = false;
            });
    },
});

export const authReducer = authSlice.reducer;