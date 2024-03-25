import { useEffect, useState } from "react";
import { CartItemsContext } from "./CartItemsContext";

const CartItemsProvider=(props) => {

    const [cartItems, setCartItems]=useState([])
    const [totalAmountOfItems, setTotalAmountOfItems]=useState(0)

    const addToCartHandler=(item, quantity) => {
        const { _id, name, price, image, category, size }=item;
        removeFromCartHandler(item)
        setCartItems((prevItems) => [...prevItems, { _id, name, price, image, category, itemQuantity: quantity, size }])
    }
    const addToCartHandlerr=(item, quantity) => {
        const { _id, brand, name, price, image,size }=item;
        removeFromCartHandler(item)
        setCartItems((prevItems) => [...prevItems, { _id, brand, name, price, image, itemQuantity: quantity,size }])
    }

    const removeFromCartHandler=(item) => {
        setCartItems(cartItems.filter((prevItem) => prevItem._id!==item._id))
    }

    const calculateTotalAmount=(currentCartItems) => {
        let total=0
        currentCartItems.forEach((item) => {
            total=total+(item.price*item.itemQuantity)
        })

        setTotalAmountOfItems(total)
    }

    const quantityHandler=(itemId, action) => {
        if (action==='INC') {
            setCartItems(cartItems.map((item) => {
                if (item.id===itemId) {
                    item.itemQuantity+=1
                }
                return item
            }))
        }
        else {
            setCartItems(cartItems.map((item) => {
                if (item.id===itemId) {
                    item.itemQuantity-=1
                }
                return item
            }))
        }
    }

    useEffect(() => {
        calculateTotalAmount(cartItems)
    }, [cartItems])


    const cartItemCtx={
        items: cartItems,
        totalAmount: totalAmountOfItems,
        addItem: addToCartHandler,
        addShoes: addToCartHandlerr,
        removeItem: removeFromCartHandler,
        quantity: quantityHandler
    }

    return (
        <CartItemsContext.Provider value={cartItemCtx}>
            {props.children}
        </CartItemsContext.Provider>
    );
}

export default CartItemsProvider;