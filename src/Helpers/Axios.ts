import axios from "axios";

let dev = "http://localhost:5000/api";
let prod = "https://task-api-node-ts-prisma.herokuapp.com/api";
let URL_BASE = dev

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