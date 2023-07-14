import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateProduct, Product, SendProduct } from 'helpers/types/product';


export const fetchProducts = createAsyncThunk<Product[], void, { rejectValue: string }>(
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

export const createProducts = createAsyncThunk<CreateProduct, SendProduct, { rejectValue: string }>(
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