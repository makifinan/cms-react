import axios from "axios";

export default class RequestService {
    getRequests(){
        return axios.get("http://localhost:5233/api/Requests/getall");
    }

    getById(id){
        return axios.get("http://localhost:5233/api/Requests/getbyid?id="+id)
    }
}