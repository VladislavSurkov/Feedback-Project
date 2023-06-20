import { PayloadAction, createSlice } from '@reduxjs/toolkit';
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

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(register.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, { payload }) => {
                console.log(payload);
                state.token = payload.token;
                state.user = payload.user;
                state.error = null;
                state.isLoading = false;
            })
            .addCase(login.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.token = payload.token;
                state.user = payload.user;
                state.error = null;
                state.isLoading = false;
            })
            .addCase(logout.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(logout.fulfilled, state => {
                state.token = null;
                state.user = {
                    email: '',
                    image: '',
                    name: '',
                    username: ''
                };
                state.isLoading = false;
            })
            .addMatcher(isError, (state, { payload }: PayloadAction<string>) => {
                console.log(`rejected payload: ${payload}`);
                state.error = payload;
                state.isLoading = false;
            });
    },
});

export const authReducer = authSlice.reducer;