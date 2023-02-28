import React from 'react'

export default function SingleProduct({ product }) {
    console.log(product);
    const { name, category, image, price, qty } = product;
    return (
        <div className="lws-productCard">
            {/* <img className="lws-productImage" src={image} alt="product" />
            <div className="p-4 space-y-2">
                <h4 className="lws-productName">{name}</h4>
                <p className="lws-productCategory">{category}</p>
                <div className="flex items-center justify-between pb-2">
                    <p className="productPrice">BDT <span className="lws-price">{price}</span></p>
                    <p className="productQuantity">QTY <span className="lws-quantity">{qty}</span></p>
                </div>
                <button className="lws-btnAddToCart">Add To Cart</button>
            </div> */}
        </div>
    )
}
