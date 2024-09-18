import axios from "axios";

const axiosMain = axios.create({
  baseURL: "https://abcbackend.donative.in:3000/",

  headers: {
    "Content-Type": "application/json",
  },
});
// Add a response interceptor
axiosMain.interceptors.response.use(
  (response) => {
    // Return the response if it's successful
    return response;
  },
  (error) => {
    // Check if the error is due to a cookie expiration message
    if (error.response && error.response.status === 401) {
      // Redirect to the login page
      // window.location.href = "/";
      // Replace with the actual login page URL
      localStorage.clear();
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    }

    // If it's not a 401 error, you can handle other errors here
    return Promise.reject(error);
  }
);
export default axiosMain;
