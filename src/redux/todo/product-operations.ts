import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from 'helpers/types/product';


// axios.defaults.baseURL = 'https://my-json-server.typicode.com/VLadIslavSurkov/json';

export const fetchProducts = createAsyncThunk<Product[], void, { rejectValue: string }>(
  '/suggestions',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/productRequests');
      return data
    } catch (e) {
      const err = e as AxiosError
      return rejectWithValue(err.message);
    }
  }
);