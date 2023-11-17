import axios, { AxiosError } from 'axios';
import Notiflix from 'notiflix';
import { jwtDecode } from 'jwt-decode';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IOperationsUser, IUserState, IOperationsUserLogin } from 'helpers/types/user';
import { IAppState } from 'helpers/types/appState';


axios.defaults.baseURL = 'https://feedbacke-api-service.onrender.com';

const token = {
    set(token: string) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
    isValid(token: string) {
        if (!token || token.length === 0) return false;

        try {
            const decodedToken = jwtDecode(token);

            const currentTime = Date.now() / 1000;
            return decodedToken.exp !== undefined && decodedToken.exp > currentTime;
        } catch (e) {
            return false;
        }
    },
};

export const register = createAsyncThunk<IUserState, IOperationsUser, { rejectValue: string }>(
    'auth/register',
    async (user, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/auth/register', user);
            token.set(data.token);
            return data;
        } catch (e) {
            Notiflix.Notify.failure('Please change your email ore password and try again');
            return rejectWithValue('Please check your email and password and try again');
        }
    }
);

export const login = createAsyncThunk<IUserState, IOperationsUserLogin, { rejectValue: string }>(
    'auth/login',
    async (user, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/auth/login', user);
            token.set(data.token);
            return data;
        } catch (e) {
            Notiflix.Notify.failure('Please change your email ore password and try again');
            return rejectWithValue('Please change your email ore password and try again');
        }
    });

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.delete('/user/logout');
            token.unset();
        } catch (e) {
            if (e instanceof AxiosError) {
                return thunkAPI.rejectWithValue(e.response?.data.message);
            }
        }
    });

export const fetchingCurrentUser = createAsyncThunk<IUserState, undefined, { rejectValue: string }>(
    'auth/current',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState() as IAppState;
        const persistedToken = state.auth.token;

        try {
            if (persistedToken && !token.isValid(persistedToken)) {
                const { data } = await axios.post('/auth/refresh-token', {
                    refreshToken: persistedToken,
                });

                token.set(data.accessToken);
            }

            if (persistedToken) token.set(persistedToken);

            const { data } = await axios.get('/user/current');
            return data;

        } catch (e) {
            if (e instanceof AxiosError) {
                return thunkAPI.rejectWithValue(e.response?.data.message);
            }
        }
    }
);
