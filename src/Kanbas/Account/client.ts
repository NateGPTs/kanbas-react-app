import store from '../store'; 
import { getCurrentUser } from './reducer';
import axios from "axios";
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;
export const COURSE_API = `${REMOTE_SERVER}/api/courses`;

const axiosWithCredentials = axios.create({ 
  baseURL: process.env.REACT_APP_REMOTE_SERVER,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const findMyCourses = async () => {
  try {
    const state = store.getState();
    const user = getCurrentUser(state);
    console.log("Attempting to fetch courses...");
    const { data } = await axiosWithCredentials.get(`${USERS_API}/${user._id}/courses`);  
    console.log("Server response:", data);
    return data;
  } catch (error: any) {
    // More detailed error logging
    console.error("Error fetching courses:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    })
  }
};
  
  export const createCourse = async (course: any) => {
    const state = store.getState();
    const user = getCurrentUser(state);
    const { data } = await axiosWithCredentials.post(`${COURSE_API}/${user._id}`, course);
    return data;
  };

export const signin = async (credentials: any) => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
    localStorage.setItem('currentUser', JSON.stringify(response.data));
    return response.data;
  };
  export const profile = async () => {
    const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
    return response.data;
  };
  export const signup = async (user: any) => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
    return response.data;
  };
  export const signout = async () => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
    localStorage.removeItem('currentUser');
    return response.data;
  };
  export const updateUser = async (user: any) => {
    try {
      const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  };

 
  