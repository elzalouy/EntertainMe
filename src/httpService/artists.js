import http from './httpHandler';
import _try from '../utils/try';
const route=process.env.REACT_APP_API+'/api/';

export const getFeaturedArtists=_try(async()=>{
    const response=await http.get(route+'featured');
    if(response.status===200){
        return response.data.artists;
    }else{}
});