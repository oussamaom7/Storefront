import {createContext, useContext, useState} from "react"

const ShoppingCartContext = createContext({});



export default function ShoppingCartProvider({children}) {
  const [cartItems,setCartItems] = useState([]);
  const getItemsQuantity = (id) =>{
   return cartItems.find((item)=>item.id === id)?.quantity || 0 ;
  }
  const increaseCarteQantity = (id) =>{
    setCartItems((currentItems)=>{
      if(currentItems.find(item=>item.id === id)== null){
        return [...currentItems,{id,quantity:1}]
      }else{
        return currentItems.map((item)=>{
          if(item.id===id){
            return {...item,quantity:item.quantity+1}
          }else{
            return item
          }
        })
      }
    })
  }
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
    <ShoppingCartContext.Provider value={{cartItems,getItemsQuantity,increaseCarteQantity,decreaseCarteQantity,removeItemFromCart}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
}
