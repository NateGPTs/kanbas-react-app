import axios from "axios";
import store from "../store";
import { getCurrentUser } from "../Account/reducer";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const axiosWithCredentials = axios.create({ 
  baseURL: process.env.REACT_APP_REMOTE_SERVER,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const updateModule = async (module: any) => {
    const { data } = await axiosWithCredentials.put(`${MODULES_API}/${module._id}`, module);
    return data;
  };
  
export const fetchAllCourses = async () => {
  const { data } = await axiosWithCredentials.get(COURSES_API);
  return data;
};

export const findModulesForCourse = async (courseId: string) => {
    const response = await axiosWithCredentials
      .get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
  };

  export const createModuleForCourse = async (courseId: string, module: any) => {
    const response = await axiosWithCredentials.post(
      `${COURSES_API}/${courseId}/modules`,
      module
    );
    return response.data;
  };
  
  export const deleteModule = async (moduleId: string) => {
    const response = await axiosWithCredentials.delete(`${MODULES_API}/${moduleId}`);
    return response.data;
   };
   
   export const createCourse = async (course: any) => {

      const state = store.getState();
      const user = getCurrentUser(state);
      const response = await axiosWithCredentials.post(
        `${COURSES_API}/${user._id}`, 
        course
      );
      return response.data;
  };

  export const deleteCourse = async (courseId: string) => {
    try {
      const response = await axiosWithCredentials.delete(
        `${COURSES_API}/${courseId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error deleting course:", error);
      throw error;
    }
  };

  export const updateCourse = async (course: any) => {
    const { data } = await axiosWithCredentials.put(`${COURSES_API}/${course._id}`, course);
    return data;
  };

  // client.ts
export const getAvailableCourses = async (userId: string) => {
  try {
      const response = await axios.get(
          `${ENROLLMENTS_API}/${userId}`
      );
      return response.data;
  } catch (error) {
      console.error("Error fetching available courses:", error);
      throw error;
  }
};
  

  