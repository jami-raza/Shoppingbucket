import {configureStore} from '@reduxjs/toolkit';
import {basketSlice} from './Reducer'
const store = configureStore({
    reducer:
        basketSlice.reducer,
    
})
export {store};