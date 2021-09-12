/**
 * onChangeFeaturedArtits()
 * 
 * 
 * change the state and replace the featured artitis.
 * 
 * 
 * @param {payload} action Payload to be changed in the state.
 */

export const onChangeFeaturedArtists=(state,action)=>{
    state.featuredArtists=action.payload.data;
}
const exports={
    onChangeFeaturedArtists:onChangeFeaturedArtists
}

export default exports;