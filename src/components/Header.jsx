import {useEffect, useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
export default function Header() {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const navigate = useNavigate();
    const [countProduct, setCountProduct] = useState(0);
    const [items , setItems] = useState([])
    useEffect(() => {
        const count = JSON.parse(localStorage.getItem('cart')) || [];
        setCountProduct(count.length)
    }, [])

    const goToCart = ()=> {
        if(cart.length > 0){
        navigate('/cart')
        } else {
            alert('Giỏ hàng trống')
        }
    }

    return (
        <div className="">
            <div className="grid grid-cols-3 py-[1rem] items-center mx-auto  container">
                <div className="col-span-2 ">
                    <div className="flex justify-start items-center gap-x-[16px]">
                        <div className="w-[78px] h-[78px] overflow-hidden">
                            <img className="w-full h-full object-cover"
                                 src="https://static.kfcvietnam.com.vn/images/web/kfc-logo.svg?v=5.0" alt=""/>
                        </div>
                        <div className="text-[#000000]  hover:text-[#e4002b] cursor-pointer font-[700] text-[18px]">
                            THỰC ĐƠN
                        </div>
                        <div className="text-[#000000]  hover:text-[#e4002b]  cursor-pointer font-[700] text-[18px]">
                            KHUYẾN MÃI
                        </div>
                        <div className="text-[#000000]  hover:text-[#e4002b] cursor-pointer font-[700] text-[18px]">
                            DỊCH VỤ TIỆC
                        </div>
                        <div className="text-[#000000] hover:text-[#e4002b]  cursor-pointer font-[700] text-[18px]">
                            HỆ THỐNG NGÂN HÀNG
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="flex justify-end items-center gap-x-[18px]">
                        <div className="text-[#000000] font-[700] text-[16px]">
                            English
                        </div>
                        <div className="cursor-pointer ralitave ">
                            <i onClick={()=>goToCart()} className="fa-solid  fa-cart-shopping text-3xl">
                                <span className='text-[14px] font-bold'>{countProduct}</span>
                            </i>
                        </div>
                        <div className="cursor-pointer">
                            <i className="fa-solid fa-bars text-3xl"></i>
                        </div>
                    </div>
                </div>
            </div>

            <hr/>


            <div className='container mx-auto'>
                <div
                    className='flex py-[1rem] text-gray-600 font-[600] text-[20px] cursor-pointer justify-start items-center gap-x-[16px]'>
                    <div>
                        ƯU ĐÃI
                    </div>
                    <div>
                        MÓN MỚI
                    </div>
                    <div>
                        COMBO 1 NGƯỜI
                    </div>
                    <div>
                        COMBO NHÓM
                    </div>
                    <div>
                        GÀ RÁN GA QUAY
                    </div>
                    <div>
                        MÓN MỚI
                    </div>
                    <div>
                        MÓN MỚI
                    </div>
                </div>
            </div>

        </div>
    )
}
