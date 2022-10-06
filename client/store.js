import { configureStore } from '@reduxjs/toolkit'
import jewelery from './slices/jewelery'

const store = configureStore({
  reducer: {
    jewelery,
  },
})

export default store
