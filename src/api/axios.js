import axios from "axios";

export const api = axios.create({
    baseURL : "http://medicalbrain-001-site1.etempurl.com/api/admin/",
    headers : {
        "Accept" : "application/json"
    }
})



