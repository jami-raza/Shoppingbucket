import {createSlice} from '@reduxjs/toolkit'
import { INITIAL_STATE } from '../State'

const basketSlice = createSlice({
    name: "basket",
    initialState: INITIAL_STATE,
    reducers:{
        add:(state, action) =>{
            return state.map(item => {
                if (item.id !== action.payload.id){
                    return item
                }

                return{
                    ...item,
                    added: true
                }
            })
        },
        remove: (state, action) => {
            return state.map(item =>{
                if (item.id !== action.payload.id){
                    return item
                }

                return{
                    ...item,
                    added:false
                }
            })
        }
    }
})
export const {add, remove} = basketSlice.actions
export {basketSlice}