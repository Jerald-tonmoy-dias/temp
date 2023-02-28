import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addproduct } from '../../redux/product/action';

export default function AddProduct() {
    const [productDetails, setproductDetails] = useState({
        name: '',
        category: '',
        image: '',
        price: 0,
        qty: 0,

    });
    const dispatch = useDispatch();

    // handle onchange
    const handlOnchange = (e) => {
        setproductDetails({
            ...productDetails,
            [e.target.name]: e.target.value
        })
    }

    // add product
    const handleAddProduct = (e) => {
        e.preventDefault();
        dispatch(addproduct(productDetails));
    }
    return (
        <div className="formContainer">
            <h4 className="formTitle">Add New Product</h4>
            <form onSubmit={handleAddProduct} className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
                {/* <!-- product name --> */}
                <div className="space-y-2">
                    <label htmlFor="lws-inputName">Product Name</label>
                    <input name='name' onChange={handlOnchange} className="addProductInput" id="lws-inputName" type="text" required />
                </div>
                {/* <!-- product category --> */}
                <div className="space-y-2">
                    <label htmlFor="lws-inputCategory">Category</label>
                    <input name='category' onChange={handlOnchange} className="addProductInput" id="lws-inputCategory" type="text" required />
                </div>
                {/* <!-- product image url --> */}
                <div className="space-y-2">
                    <label htmlFor="lws-inputImage">Image Url</label>
                    <input name='image' onChange={handlOnchange} className="addProductInput" id="lws-inputImage" type="text" required />
                </div>
                {/* <!-- price & quantity container --> */}
                <div className="grid grid-cols-2 gap-8 pb-4">
                    {/* <!-- price --> */}
                    <div className="space-y-2">
                        <label htmlFor="ws-inputPrice">Price</label>
                        <input name='price' onChange={handlOnchange} className="addProductInput" type="number" id="lws-inputPrice" required />
                    </div>
                    {/* <!-- quantity --> */}
                    <div className="space-y-2">
                        <label htmlFor="lws-inputQuantity">Quantity</label>
                        <input name='qty' onChange={handlOnchange} className="addProductInput" type="number" id="lws-inputQuantity" required />
                    </div>
                </div>
                {/* <!-- submit button --> */}
                <button type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
            </form>
        </div>
    )
}
