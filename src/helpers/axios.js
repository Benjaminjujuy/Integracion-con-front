import axios from "axios";
const token = JSON.parse(sessionStorage.getItem('token')) 

const clienteAxios = axios.create({
    baseURL:`${import.meta.env.VITE_URL_BACK_LOCAL}/api`
})

export const configHeaders = {
    Headers:{
        "content-type" : "application/json",
        "auth": `${token}`
    }
};

export const configHeadersImagen = {
    Headers:{
        "content-type" : "multipart/form-data",
    }
};


export default clienteAxios