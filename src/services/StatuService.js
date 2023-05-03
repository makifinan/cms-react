import axios from "axios";

export default class StatuService {
    getListStatu(){
        return axios.get("http://localhost:5233/api/Status/getall")
         
    }
}