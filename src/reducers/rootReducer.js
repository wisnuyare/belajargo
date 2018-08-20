const initState = {
    carts : [
      { name: 'Brio', qty: 15, brand: 'Honda', id: 1},
      { name: 'Yaris', qty: 20, brand: 'Toyota', id: 2 },
      { name: 'Swift', qty: 5, brand: 'Suzuki', id: 3 }
    ],
    //checked : false,
    updateId: null,
    updateCarts: {
        name: null,
        qty: null,
        brand: null,
        id: null
    }
  }

const rootReducer = ( state = initState, action) => {
    //console.log(action.type)
    // console.log(state.updateCarts)
    // console.log(state.carts)   
    if(action.type === 'DELETE_CART'){
        console.log(state.carts)
        let carts = state.carts.filter(carts => {
            return carts.id !== action.id
        });
        return {
          ...state,
          carts: carts
        }
    }if(action.type === 'ADDTO_CART'){
        action.id = state.carts.length+1
        let carts = [...state.carts, action.state];
        return{
            carts: carts
        }
    }if(action.type === 'UPDATE_CART'){
        // console.log(state.carts[action.id-1])
        // console.log('atas gua isi')        
        let updateCarts = state.carts[action.id-1]
        let carts = state.carts.filter(carts => {
            return carts.id !== action.id
        });
        return {
            ...state,
            carts: carts,
            updateId: action.id,
            updateCarts: updateCarts
        }             
    }if(action.type === 'SUBMIT_UPDATE'){
        console.log(action.state)        
        let cartsReal = [...state.carts, action.state];
        let carts = cartsReal.sort((start,end)=>{return start.id - end.id})
        return{
            carts: carts
        }
        
        // console.log('deleted')
        //   let cartsReal = [...carts, action.cart]
        //   let cartsSort = cartsReal.sort((start,end)=>{return start.id - end.id})
        //   state.setState({
        //     carts: cartsSort,
        //     updateId: null
        //   });
        // let carts = state.carts.filter(carts => {
        //     return carts.id !== action.carts.id
        // });
        // return {
        //   ...state,
        //   carts: carts
        // }   
    }
    return state;
}

export default rootReducer