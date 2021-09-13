import http from './httpHandler';
const route=process.env.REACT_APP_API+'/api/';

export const  getCategories=async()=>{
    const response=await http.get(route+'categories');
    if(response.status===200){
        return response.data;
    }else{}
}

export const  getCategory=async(id)=>{
    const response=await http.get(route+'categories/'+id);
    if(response.status===200){
        return response.data;
    }else{}
}
