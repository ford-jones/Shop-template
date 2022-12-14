import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProducts } from '../apis/products'

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    return await getProducts()
  }
)

const slice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchProducts.fulfilled]: (state, { payload }) => payload,
  },
})

export const selectProducts = (state) => state.products
export default slice.reducer
