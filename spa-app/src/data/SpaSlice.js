import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createRef } from 'react'

import products from './products'
import orders from './orders'

const SpaSlice = createSlice({
  name: 'spaproj',
  initialState: {
    prodData: products,
    orderData: orders,
    elems: createRef(),
    AdminCode: '7788',
  },
  reducers: {
    orderAdded(state, action) {
      state.orderData.push(action.payload)
    },
    orderDeleted(state,action) {
      state.orderData.pop(action.payload)
    }
  }
})

export const { orderAdded, orderDeleted } = SpaSlice.actions

export const AdminCode = state => state.spaproj.AdminCode
export const elems = state => state.spaproj.elems
export const prodData = state => state.spaproj.prodData
export const orderData = state => state.spaproj.orderData


export default SpaSlice.reducer