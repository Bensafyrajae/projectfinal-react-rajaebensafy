import React from 'react';
import { MyAppContext } from '../context';
import { Images } from '../constant';

const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
};

const Cart = () => {
    const { cart, removeFromCart } = MyAppContext(); 

    if (cart.length === 0) {
        return <div>Your cart is empty</div>;
    }

    return (
        <div className="p-4">
            {cart.map((cartItem) => (
                <div key={cartItem.id} className="flex items-center gap-4 mb-4 border-b pb-4">
                    <img
                        src={Images[cartItem.images]} 
                        alt={cartItem.name}
                        className="w-[125px] h-[75px] object-cover"
                    />
                    <div className="flex-1">
                        <div className="text-lg font-medium">
                            {cartItem.name}{" "}
                            {cartItem.quantity > 1 && (
                                <span className="text-gray-500 text-sm">x{cartItem.quantity}</span>
                            )}
                        </div>
                        <div className="text-gray-500 text-sm">
                            {formatCurrency(cartItem.price)}
                        </div>
                    </div>
                    <div className="text-lg">
                        {formatCurrency(cartItem.price * cartItem.quantity)}
                    </div>
                    <button
                        className="bg-red-500 text-white p-2 rounded-full hover:bg-red-700 transition duration-300"
                        onClick={() => removeFromCart(cartItem.id)} 
                    >
                        &times;
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Cart;