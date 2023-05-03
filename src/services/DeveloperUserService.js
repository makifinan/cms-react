import axios from "axios";

export default class DeveloperUserService {

    getDeveloperUsers(){
       return axios.get("http://localhost:5233/api/DeveloperUsers/getall")
    }
    getById(id){
        return axios.get("http://localhost:5233/api/DeveloperUsers/getbyid?id="+id)
    }

    getByDeveloperRequest(id){
        return axios.get("http://localhost:5233/api/Requests/getbydeveloperrequest?id="+id)
    }
}