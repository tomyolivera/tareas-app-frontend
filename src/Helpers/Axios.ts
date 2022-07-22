import axios from "axios";

const URL_BASE = "http://localhost:5000/api"

export const AxiosGet = async (url: string, useAuth: boolean=false, base:string=URL_BASE) =>
{
    const response = await axios.get(base + url, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": useAuth ? `Bearer ${localStorage.getItem("token")}` : ""
        }
    })
    
    return response.data
}

export const AxiosPost = async (url: string, data: any, useAuth: boolean=false, base:string=URL_BASE) =>
{
    const response = await axios.post(base + url, data, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": useAuth ? `Bearer ${localStorage.getItem("token")}` : ""
        }
    })
    
    return response.data
}

export const AxiosPut = async (url: string, data: any, useAuth: boolean=false, base:string=URL_BASE) =>
{
    const response = await axios.put(base + url, data, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": useAuth ? `Bearer ${localStorage.getItem("token")}` : ""
        }
    })
    
    return response.data
}

export const AxiosDelete = async (url: string, useAuth: boolean=false, base:string=URL_BASE) =>
{
    const response = await axios.delete(base + url, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": useAuth ? `Bearer ${localStorage.getItem("token")}` : ""
        }
    })
    
    return response.data
}