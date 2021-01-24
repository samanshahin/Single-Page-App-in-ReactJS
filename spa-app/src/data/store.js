import { configureStore } from '@reduxjs/toolkit'
import SpaReducer from './SpaSlice'

export default configureStore({
    reducer: {
      spaproj: SpaReducer
    },
  })
