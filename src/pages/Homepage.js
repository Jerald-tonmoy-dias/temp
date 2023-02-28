import React from 'react'
import AddProduct from '../components/product/AddProduct'
import SingleProduct from '../components/product/SingleProduct'
import { useSelector } from 'react-redux'
export default function Homepage() {

    const products = useSelector((state) => state.products.products);
    return (
        <div className="productWrapper">
            {/* <!-- products container --> */}
            <div className="productContainer" id="lws-productContainer">
                {/* <!-- product item --> */}

                {products.length > 0 ? products.map((item) => {
                    return <SingleProduct product={item} key={item.id} />
                }) :
                    (<h2>No Product Found</h2>)
                }
                {/* <SingleProduct />
                <SingleProduct /> */}
                {/* <!-- product item ends --> */}
            </div>
            {/* <!-- products container ends --> */}
            <div>
                {/* <!-- Product Input Form --> */}
                <AddProduct />
                {/* <!-- Product Input Form Ends --> */}
            </div>
        </div>
    )
}
