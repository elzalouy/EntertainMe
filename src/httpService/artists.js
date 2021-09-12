import http from './httpHandler';

const route=process.env.REACT_APP_API+'/api/';

export const getFeaturedArtists=async()=>{
    const response=await http.get(route+'featured');
    if(response.status===200){
        return response.data.artists;
    }else{}
}