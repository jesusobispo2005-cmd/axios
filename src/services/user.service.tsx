import axios from "./axios.service";

export function registerService(data: any) {

  axios.post("users/register", data);
}