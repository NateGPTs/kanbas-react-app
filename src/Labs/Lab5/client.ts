import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const TODOS_API = `${REMOTE_SERVER}/lab5/todos`;
const MODULE_API = `${REMOTE_SERVER}/lab5/module`;

export const removeTodo = async (todo: any) => {
    const response = await axios.get(`${TODOS_API}/${todo.id}/delete`);
    return response.data;
  };
  
  export const createTodo = async () => {
    const response = await axios.get(`${TODOS_API}/create`);
    return response.data;
  };
  
  export const postTodo = async (todo: any) => {
    const response = await axios.post(`${TODOS_API}`, todo);
    return response.data;
  };

  export const deleteTodo = async (todo: any) => {
    const response = await axios.delete(`${TODOS_API}/${todo.id}`);
    return response.data;
  };
  
  export const updateTodo = async (todo: any) => {
    const response = await axios.put(`${TODOS_API}/${todo.id}`, todo);
    return response.data;
  };
  
  
export const fetchWelcomeMessage = async () => {
  const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
  return response.data;
};
const ASSIGNMENT_API = `${REMOTE_SERVER}/lab5/assignment`;
export const fetchAssignment = async () => {
  const response = await axios.get(`${ASSIGNMENT_API}`);
  return response.data;
};
export const updateTitle = async (title: string) => {
  const response = await axios.get(`${ASSIGNMENT_API}/title/${title}`);
  return response.data;
};

export const fetchTodos = async () => {
  const response = await axios.get(TODOS_API);
  return response.data;
};


export const fetchModule = async () => {
    const response = await axios.get(MODULE_API);
    return response.data;
};

export const fetchModuleName = async () => {
    const response = await axios.get(`${MODULE_API}/name`);
    return response.data;
};

export const updateModuleName = async (name: string) => {
    const response = await axios.get(`${MODULE_API}/name/${name}`);
    return response.data;
};

export const updateModuleDescription = async (description: string) => {
    const response = await axios.get(`${MODULE_API}/description/${description}`);
    return response.data;
};

