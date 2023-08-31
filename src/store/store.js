import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../reducers/loginSlice";



//이함수의 결과물이 store다
export default configureStore({
    reducer : {  
        login:loginSlice
    }
})
