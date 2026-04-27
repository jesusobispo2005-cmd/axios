import axios from "./axios.service";

export function loginService(data: any) {
  return axios.post("users/login", data).then((response) => {
    if (!response.data.token) {
      console.log("no hay token");
      return null;
    }
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("email", response.data.usuario.email);
    return response.data.token;
  });
}

export function registerService(data: any) {
  return axios.post("users/register", data).then((response) => {
    console.log("register OK: ", response);
    return response;
  });
}

export async function userInfoService(){
    const email=localStorage.getItem("email")
    const payload={email}
    return await axios.post("users/info",payload )
}