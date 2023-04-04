import axios from "axios";

export default class ProductService {

    getRequests(){
        
        return axios.get("http://localhost:5233/api/Requests/getall")
        
    }


}