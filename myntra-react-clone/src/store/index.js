import {configureStore} from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice"
import bagSlice from "./bagSlice";


const myntraSTore=configureStore({
    reducer:{
       items: itemsSlice.reducer,
       fetchStatus: fetchStatusSlice.reducer,
       bag: bagSlice.reducer,
    }
})

export default myntraSTore;