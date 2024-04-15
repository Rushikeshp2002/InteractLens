import { useCartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import FormatPrice from "../Helper/FormatPrice";

const Cart =()=>{
    const { cart, clearCart,total_amount,shipping_fee } = useCartContext();
    // console.log(cart); 
    if(cart.length === 0){
        return(
            <div className="w-1/4 h-4/5 flex m-auto flex-col justify-center align-middle">
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png" alt="img"/>
                <h1 className="text-center text-2xl font-medium">No Item in the Cart😓</h1>
                <div className="m-5"></div>
            </div>
        )
    }
    return(
        <div className="table  md:w-4/6 md:h-[100vh] m-auto bg-white">
            <div className="cart_heading place-items-center grid grid-cols-4 my-10 ">
               <p>Items</p> 
               <p>Price</p>
               <p>Quantity</p>
               <p>Remove</p>
            </div>
            <hr className="-my-5 "/>

            <div>
                {
                    cart.map((curEl)=>{
                        return <CartItem key={curEl.id} {...curEl}/>;
                    })
                }
            </div>
            <hr className="-my-5 "/>
            <div className="flex md:w-4/6 justify-between align-bottom h-auto my-10">
                 <Link to="/AllProducts">
                   <button className="bg-indigo-500 text-white rounded  p-2">Continue Shopping</button>
                 </Link>
                 <button onClick={clearCart}  className="bg-rose-500 text-white rounded  p-2">Clear Cart</button>
            </div>


        <div className="container w-72 h-28 grid bg-gray-100 items-center px-5 py-1 rounded-sm shadow-md absolute right-64">
                <div className="grid grid-cols-2">
                    <p>Subtotal</p>
                    <p className=" grid place-items-end"><FormatPrice price={total_amount}/></p>
                </div>
                <div className="grid grid-cols-2">
                    <p>Shipping fee:</p>
                    <p className=" grid place-items-end"><FormatPrice price={shipping_fee}/></p>
                </div>
                <hr />
                <div className="grid grid-cols-2">
                    <p>Order total:</p>
                    <p className=" grid place-items-end"><FormatPrice price={shipping_fee+total_amount}/></p>
                </div>
                
            </div>
           
        </div>
        
    )
}
export default Cart;