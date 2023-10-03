import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/moiveSlicet";


export default  configureStore(
    {
        

       reducer:cartReducer
    }
)