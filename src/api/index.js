import axios from "axios";
 
// const url = "http://localhost:8000/todos";
const url = "https://todo-backserv.herokuapp.com/"
 
export const getTodos = () => axios.get(url);
 
export const createTodo = (newTodo) => axios.post(url, newTodo); 
//export const deleteTodos = (id) => axios.post(url, id);  //forma 1 de eliminar
export const deleteTodos = (id) => axios.delete(`${url}/${id}`); //forma 2 de eliminar

