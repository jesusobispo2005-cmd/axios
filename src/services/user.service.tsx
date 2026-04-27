import axios from "./axios.service";

export function registerService(data: any) {

  axios.post("users/register", data)
  .then(response=>{
    console.log("login OK: ", response)
  })
  ;
}

export function loginService(data: any) {

  axios.post("users/login", data)
  .then(response=>{

    if(!response.data.token) {console.log("no hay token")}
    else{
        localStorage.setItem("token",response.data.token)
    }
    console.log(response.data.token)
  })
  ;
}

