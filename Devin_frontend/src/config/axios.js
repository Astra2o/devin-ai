// import axios from 'axios'
// const token = localStorage.getItem('token');

// const axiosInstance = axios.create({
//     baseURL:import.meta.env.VITE_API_URL
// })

// export default axiosInstance




import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers:{
        Authorization:`bearer ${ localStorage.getItem('token')} `
    }
});

// // Add an interceptor to set the Authorization header
// axiosInstance.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

export default axiosInstance;
