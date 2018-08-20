export const sendID = (id, x) => {
  if(x === 1){
    return {
      type: 'DELETE_CART',
      id
    }
  }else if (x === 2){
    return{
      type: 'UPDATE_CART',
      id
    }
  }
}