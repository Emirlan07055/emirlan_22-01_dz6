import {configureStore} from "@reduxjs/toolkit";
import productsSlice from "./slice/productsSlice";
import busketSlice from './slice/korzinaSlice'

export const store = configureStore({
    reducer: {
        productsSlice,
        busketSlice
    }
})