import {createSlice} from "@reduxjs/toolkit";
const githubcontactSlice=createSlice({
    name:"githubcontact",
    initialState:{
        id:[],
    },
    reducers:{
        updateList:(state,action)=>{
            state.id.push(action.payload);
        },
    }
})



export default githubcontactSlice.reducer;
export const {updateList}= githubcontactSlice.actions;