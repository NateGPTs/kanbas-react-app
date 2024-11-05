import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "./Database/database";
const initialState = {
  enrollmentList: enrollments,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollInCourse: (state, { payload: courseInfo}) => {
      
      const newEnrollment: any = {

        "_id": courseInfo._id,
        "user": courseInfo.user,
        "course": courseInfo.course

      }

      state.enrollmentList = [...state.enrollmentList, newEnrollment] as any;
    },
    unenrollFromCourse: (state, { payload: courseInfo }) => {
      state.enrollmentList = state.enrollmentList.filter(
        (m: any) => !(m.user === courseInfo.user && m.course === courseInfo.course)
        );
    },
  },
});
export const { enrollInCourse, unenrollFromCourse } =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;