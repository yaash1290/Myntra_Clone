import { createSlice} from "@reduxjs/toolkit";

const fetchStatusSlice=createSlice({
    name:'fetchStatus',

    initialState:{
       fetchDone:false,
       currentlyFetching:false,
    },

    reducers:{
        markFetchDone:(store)=>{
             store.fetchDone=true;
        },
        markFetching:(store)=>{
           store.currentlyFetching=true;
        },
        markFetchingFinished:(store)=>{
             store.currentlyFetching=false;
        }
    }
});

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;

