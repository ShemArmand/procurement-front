import { configureStore } from "@reduxjs/toolkit";
import FormReducer from './FormSlice'

export const store = configureStore({
    reducer: {
        form: FormReducer
    }
})