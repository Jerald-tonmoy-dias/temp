import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { togglepage } from '../../redux/global/action';
export default function Header() {

    // const 
    const dispatch = useDispatch();
    const isHome = useSelector((state) => state.global.value);
    const handleTogglepage = () => {
        dispatch(togglepage());
    }
    return (
        <nav className="bg-[#171C2A] py-4">
            <div className="navBar">
                <a href="index.html">
                    <img src="./images/logo.png" alt="LWS" className="max-w-[140px]" />
                </a>

                <div onClick={handleTogglepage} className="flex gap-4">
                    <a href="#home" className="navHome" id="lws-home"> {!isHome ? 'Home' : "Cart"} </a>
                    <a href="#" className="navCart" id="lws-cart">
                        <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                        <span id="lws-totalCart">0</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}
