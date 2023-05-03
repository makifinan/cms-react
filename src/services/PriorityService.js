import axios from "axios";

export default class PriorityService {

    getPriorities(){
        return axios.get("http://localhost:5233/api/Priorities/getall");
    }
}