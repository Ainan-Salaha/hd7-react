import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from '../Featurs/StudentDetaills/StdSlice'

export default configureStore({
    reducer:{
        Student:StudentReducer
    }
})