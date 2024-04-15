const CartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { id, Products, amount } = action.payload;
        let {images} = Products;
        let img = `http://127.0.0.1:8000/${images}`;

        // console.log(Products);

        let existingProducts = state.cart.find((curItem) => curItem.id === id);

        if (existingProducts) {
            let updatedProducts = state.cart.map((curEl) => {
                if (curEl.id === id) {
                    let newAmount = curEl.amount + amount;
                    return {
                        ...curEl,
                        amount: newAmount,
                    };
                } else {
                    return {
                        ...curEl,
                    }
                }
            });

            return {
                ...state,
                cart: updatedProducts,

            }

        } else {
            let cartProduct = {
                id: id,
                name: Products.product_name,
                image: img,
                price: Products.price,
                amount: amount,

            };

            return {
                ...state,
                cart: [...state.cart, cartProduct],
            };

        }
    }


    

    if (action.type === "SET_DECREASE") {
        let updatedProduct = state.cart.map((curEl) => {
            if (curEl.id === action.payload) {
                let decAmount = curEl.amount - 1;

                if(decAmount <= 1) {
                    decAmount = 1;
                }

                return {
                    ...curEl,
                    amount: decAmount,
                };
            } else {
                return{curEl}
            }
        });
        return {...state, cart: updatedProduct};
        
    }

    if (action.type === "SET_INCREASE") {
        let updatedProduct = state.cart.map((curEl) => {
            if (curEl.id === action.payload) {
                let InAmount = curEl.amount + 1;

                if(InAmount >= curEl.max) {
                    InAmount = curEl.max;
                }

               

                return {
                    ...curEl,
                    amount: InAmount,
                };
            } else {
                return{curEl}
            }
        });
        return {...state, cart: updatedProduct};
        
    }

    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter((curEl) => curEl.id !== action.payload);
        return {
            ...state,
            cart: updatedCart,
        }
    }

    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: [],
        }
    }

    if(action.type==="CART_TOTAL_ITEM"){
        let updatedItemVal =  state.cart.reduce((total, curEl)=>{
            let {amount} = curEl;


            total += amount;
            return total;
    }, 0);

        return {
            ...state,
            total_item: updatedItemVal,
        }
    }

    if(action.type ==="CART_TOTAL_PRICE"){
        let total_amount = state.cart.reduce((initialVal,curEl)=>{
            let {price,amount} = curEl;

            initialVal = initialVal + (price * amount);
            return initialVal;
        },0);

        return {
            ...state,
            total_amount,
        };
    }

   
    return state;
}


export default CartReducer;