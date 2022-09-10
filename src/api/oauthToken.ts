import { apiKey, secretKey } from "../utils/apiKey";
import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://api.petfinder.com/v2/',
})

axiosInstance.interceptors.response.use(async (response) => {
  const {code} = response.data
  

  if (code === 401 && (localStorage.getItem('isAuthenticated') || 'false') === 'true') {
    const data = await oauthToken()
    
    localStorage.setItem("token", data.access_token);

    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`

    return response
  }
}, console.log)


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
