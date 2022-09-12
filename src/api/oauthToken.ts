import { apiKey, secretKey } from "../utils/apiKey";
import axios from 'axios'

export const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

axiosInstance.interceptors.request.use((config) => {
  
  if (!config?.headers) {
    throw new Error(`Expected 'config' and 'config.headers' not to be undefined`);
}
  config.headers.Authorization  = `Bearer ${localStorage.getItem('token')}`;

  return config
}, function(error) {
  return Promise.reject( error);
})

axiosInstance.interceptors.response.use((response) => {

  return response
},async (error) => {
  
  const originalRequest = error.config;
  if (error.response.status === 401 && (localStorage.getItem('isAuthenticated') || 'false') === 'true') {
    const data = await oauthToken()
    localStorage.setItem("token", data);

    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data}`
    return axiosInstance(originalRequest)
    
  }
  
})


const oauthToken = async () => {
  const params = new URLSearchParams();

  params.append("grant_type", "client_credentials");
  params.append("client_id", apiKey);
  params.append("client_secret", secretKey);
  try {
    const petfinderRes = await fetch(
      "https://api.petfinder.com/v2/oauth2/token",
      {
        method: "POST",
        body: params,
      }
    );
    const data = await petfinderRes.json();
    

    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`
    localStorage.setItem('isAuthenticated', "true");
    
    return data.access_token;
  } catch (error) {
    throw error;
  }
};

export default oauthToken;
