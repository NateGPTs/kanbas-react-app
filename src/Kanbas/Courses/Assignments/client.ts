import axios from "axios";
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const ASSIGN_API = `${REMOTE_SERVER}/api/assignments`;

const axiosWithCredentials = axios.create({
  baseURL: process.env.REACT_APP_REMOTE_SERVER,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getAssignments = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${ASSIGN_API}/course/${courseId}`);
  return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const response = await axiosWithCredentials.delete(`${ASSIGN_API}/${assignmentId}`);
  return response.data;
};

export const updateAssignment = async (assignment: any) => {
  const assignmentId = assignment._id;
  const response = await axiosWithCredentials.put(`${ASSIGN_API}/${assignmentId}`, assignment);
  return response.data;
};

export const createAssignment = async (assignment: any) => {
  const response = await axiosWithCredentials.post(ASSIGN_API, assignment);
  return response.data;
};
