import {createContext, useContext, useEffect, useState} from "react"
import ShoppingPanel from "../components/shoppingPanel";
import axios from "axios";

const ShoppingCartContext = createContext({});
const initialCartItems = localStorage.getItem("shopping-cart")
 ? JSON.parse(localStorage.getItem("shopping-cart"))
 :[];


export default function ShoppingCartProvider({children}) {
  const [isOpen,setIsOpen]=useState(false);
  const [cartItems,setCartItems] = useState(initialCartItems);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
 useEffect(()=>{
  localStorage.setItem("shopping-cart",JSON.stringify(cartItems))
 },[cartItems])
  const openCard = () =>{
    setIsOpen(true)
  }
  const closeCard = () =>{
    setIsOpen(false)
  }
  const cartQuantity = cartItems.reduce((quantity,item)=>
    item.quantity + quantity,0
  )
  const getItemsQuantity = (id) =>{
   return cartItems.find((item)=>item.id === id)?.quantity || 0 ;
  }
// Inside increaseCarteQantity function
const increaseCarteQantity = async (id) => {
  try {

    const response = await axios.get(`http://localhost:3000/v1/products/${id}`);
    const productData = response.data;
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === id);
      if (!existingItem) {
        return [...currentItems, { ...productData, id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  } catch (error) {
    // Handle error fetching product data
  }
};

  const decreaseCarteQantity = (id) =>{
    setCartItems((currentItems)=>{
      if(currentItems.find(item=>item.id === id)== null){
        return currentItems.filter((item)=>item.id !==id)
      }else{
        return currentItems.map((item)=>{
          if(item.id===id){
            return {...item,quantity:item.quantity-1}
          }else{
            return item;
          }
        })
      }
    })
  }
  const removeItemFromCart =(id)=>{
    setCartItems((currentItems)=>currentItems.filter((item)=>item.id !== id))
  }
  return (
    <ShoppingCartContext.Provider value={{
      cartItems,getItemsQuantity,
      increaseCarteQantity,decreaseCarteQantity,
      removeItemFromCart,openCard,closeCard,cartQuantity,subtotal}}>
      {children}
      <ShoppingPanel isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
}
