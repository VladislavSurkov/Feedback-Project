import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IOperationsUser, IUserState,IOperationsUserLogin } from 'helpers/types/user';
import { IAppState } from 'helpers/types/appState';


axios.defaults.baseURL = 'https://feedbacke-api-service.onrender.com';

const setAuthHeader = (token: string) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};


export const register = createAsyncThunk<IUserState, IOperationsUser, { rejectValue: string }>(
    'auth/register',
    async (user, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/auth/register', user);
            setAuthHeader(data.token);
            return data;
        } catch (e) {
            return rejectWithValue('Please check your email and password and try again');
        }
    }
);

export const login = createAsyncThunk<IUserState, IOperationsUserLogin, { rejectValue: string }>(
    'auth/login',
    async (user, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/auth/login', user);
            setAuthHeader(data.token);
            console.log(data);
            return data;
        } catch (e) {
            return rejectWithValue('Please change your email ore name and try again');
        }
    });

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.delete('/user/logout');
            clearAuthHeader();
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

        if (persistedToken) {
            setAuthHeader(persistedToken);
        }
        try {
            const { data } = await axios.get('/user/current');
            return data;
        } catch (e) {
            if (e instanceof AxiosError) {
                return thunkAPI.rejectWithValue(e.response?.data.message);
            }
        }
    }
);
