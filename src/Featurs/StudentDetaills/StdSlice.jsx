import { createSlice } from "@reduxjs/toolkit";

export const StdSlice = createSlice({
  name: "Student",
  initialState: {
    stdArr: [],
    stdInfo: {
      name: "",
      age: "",
      course: "",
      batch: ""
    },
  },
  reducers: {
    addStudent: (state, action) => {
      state.stdArr.push(action.payload.state);
      return state;
    },
    editStudent: (state, action) => {
      state.stdArr[action.payload.index] = action.payload.state;
      console.log(action.payload);
      return state;
    },
  },
});
export const { addStudent, editStudent } = StdSlice.actions;
export default StdSlice.reducer;
