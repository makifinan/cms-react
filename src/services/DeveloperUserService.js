import axios from "axios";

export default class DeveloperUserService {

    getDeveloperUsers(){
       return axios.get("http://localhost:5233/api/DeveloperUsers/getall")
    }
}