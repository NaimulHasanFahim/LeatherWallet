import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000/api' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.token;


// const userRequest = axios.create({
//     baseURL: 'http://localhost:5000',
//     header: { token: `Bearer ${TOKEN}` },
//   });


export const getAllTransactionByUser = (id) => API.get(`/transaction/alltransaction/${id}`);
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const signOut = (formData) => API.post('/user/signout', formData);
export const getUsersById = (id) => API.get(`/profile/${id}`);
export const updateUserProfile = (id, userData) => API.patch(`/user/update/${id}`, userData);