import { PayloadAction, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { IUserState } from 'helpers/types/user';
import { login, logout, register, fetchingCurrentUser } from './auth-operations';
import { isError } from 'redux/isError';

const initialState: IUserState = {
    token: null,
    user: {
        email: '',
        image: '',
        name: '',
        username: ''
    },
    isLogin: false,
    isLoading: false,
    error: null,
};

const extraActions = [register, login, logout, fetchingCurrentUser];

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(register.fulfilled, (state, { payload }) => {
                state.token = payload.token;
                state.user = payload.user;
                state.isLogin = true;
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.token = payload.token;
                state.user = payload.user;
                state.isLogin = true;
            })
            .addCase(logout.fulfilled, state => {
                state.token = null;
                state.isLogin = false;
                state.user = {
                    email: '',
                    image: '',
                    name: '',
                    username: ''
                };
            }).addCase(fetchingCurrentUser.fulfilled, (state, { payload }) => {
                state.token = payload.token;
                state.user = payload.user;
                state.isLogin = true;
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
                state.error = payload;
                state.isLoading = false;
                state.isLogin = false;
            });
    },
});

export const authReducer = authSlice.reducer;