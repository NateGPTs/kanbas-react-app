import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database/database";

const initialState = {
  assignments: assignments,
};


const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, { payload }) => {
      state.assignments = payload;
    },
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: assignment._id,
        title: assignment.title,
        course: assignment.course,
        OutAt: assignment.OutAt,
        Due: assignment.Due,
        pts: assignment.pts,
        Description: assignment.Description
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
        state.assignments = state.assignments.filter(
            (a: any) => a._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment, setAssignments } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;