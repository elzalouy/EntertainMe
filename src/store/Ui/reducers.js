const onChangeModel=(state,action)=>{
    action.payload.forEach(item => {
        state[item.element]=item.value;
    });
}
const exports={onChangeModel};
export default exports;