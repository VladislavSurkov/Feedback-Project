import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateProduct, Product } from 'helpers/types/product';


// axios.defaults.baseURL = 'https://my-json-server.typicode.com/VLadIslavSurkov/json';

export const fetchProducts = createAsyncThunk<Product[], void, { rejectValue: string }>(
  '/suggestions',
  async (_, thunkAPI) => {
    console.log(axios.defaults);
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

export const createProducts = createAsyncThunk<CreateProduct, void, { rejectValue: string }>(
  '/',
  async (product, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/tasks', product);
      return data
    } catch (e) {
      const err = e as AxiosError
      return rejectWithValue(err.message);
    }
  }
);