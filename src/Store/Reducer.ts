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
                    added: true,
                    quantity: item.quantity + 1
                }
            })
        },
        remove: (state, action) => {
            return state.map(item =>{
                if (item.id !== action.payload.id){
                    return item
                }
                else if(item.quantity <= 1){

                return{
                    ...item,
                    added:false,
                    quantity: 0
                }
            }
            return{
                ...item,
                quantity: item.quantity - 1

            }

            })
        },
        clear: (state, action) => {
            return state.map(item => {
                if (item.id !== action.payload.id) {
                    return item
                }

                return {
                    ...item,
                    quantity: 0,
                    added: false,
                }
            })
        },
        addquantity:(state,action)=>{
            return state.map(item =>{
                if (item.id !== action.payload.id){
                    return item
                }
                return{
                    ...item,
                    quantity: item.quantity +1
                }
            })
        }
    }
})
export const {add, remove,addquantity,clear} = basketSlice.actions
export {basketSlice}