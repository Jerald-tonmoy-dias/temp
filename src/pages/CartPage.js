import React from 'react'
import BillDetails from '../components/cart/BillDetails'
import CartItem from '../components/cart/CartItem'

export default function CartPage() {
    return (
        <div className="container 2xl:px-8 px-2 mx-auto">
            <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
            <div className="cartListContainer">
                <div className="space-y-6">
                    {/* <!-- Cart Item --> */}
                    <CartItem />
                    {/* <!-- Cart Items Ends --> */}

                </div>

                {/* <!-- Bill Details --> */}
                <div>
                    <BillDetails />
                </div>
            </div>
        </div>
    )
}
