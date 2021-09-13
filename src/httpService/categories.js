import http from './httpHandler';
const route=process.env.REACT_APP_API+'/api/';

const api=process.env.REACT_APP_API;
export const  getCategories=async()=>{
    const response=await http.get(route+'categories');
    if(response.status===200){
        return response.data;
    }else{}
}