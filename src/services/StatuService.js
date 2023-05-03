import axios from "axios";

export default class StatuService {
    getListStatu(){
        axios.get("http://localhost:5233/api/Status/getall")
    }
}