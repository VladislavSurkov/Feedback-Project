import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICreateProduct, IProduct, ISendProduct } from 'helpers/types/product';


export const fetchProducts = createAsyncThunk<IProduct[], void, { rejectValue: string }>(
  '/suggestions',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/tasks');
      return data
    } catch (e) {
      if (e instanceof AxiosError) {
        return thunkAPI.rejectWithValue(e.response?.data.message);
      }
    }
  }
);

export const createProducts = createAsyncThunk<ICreateProduct, ISendProduct, { rejectValue: string }>(
  '/',
  async (product, thunkAPI) => {
    try {
      const { data } = await axios.post('/tasks', product);
      return data
    } catch (e) {
      if (e instanceof AxiosError) {
        return thunkAPI.rejectWithValue(e.response?.data.message);
      }
    }
  }
);

export const toggleUpvote = createAsyncThunk<IProduct, IProduct, { rejectValue: string }>(
  '/upvote',
  async (product, thunkAPI) => {
    try {
      const { data } = await axios.post(`/tasks/votes/${product._id}`);
      return data
    } catch (e) {
      if (e instanceof AxiosError) {
        return thunkAPI.rejectWithValue(e.response?.data.message);
      }
    }
  }
);