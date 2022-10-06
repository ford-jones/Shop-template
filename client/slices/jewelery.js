import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getJewelery } from '../apis/jewelery'

export const fetchJewelery = createAsyncThunk(
  'jewelery/fetchJewelery',
  async () => {
    return await getJewelery()
  }
)

const slice = createSlice({
  name: 'jewelery',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchJewelery.fulfilled]: (state, { payload }) => payload,
  },
})

export const selectJewelery = (state) => state.jewelery
export default slice.reducer
