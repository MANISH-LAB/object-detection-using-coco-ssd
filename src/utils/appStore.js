import {configureStore} from "@reduxjs/toolkit";

import githubcontactReducer from "./githubcontactSlice";


const appStore=configureStore({
        reducer:{
          githubcontact: githubcontactReducer,
          
        },
        
})
export default appStore;
