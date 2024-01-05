
import {useState} from "react";
import formatPrice from "../hooks/formatPrice.jsx";
import {useNavigate} from "react-router-dom";
export default function Cart() {

    const navigate = useNavigate();
    const [dataCart, setDataCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const delCart = (id) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const index = cart.findIndex(item => item.id === id);
        if (index === -1) {
            return
        } else {
            cart.splice(index,1)
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        setDataCart(cart);
    }


    const handlePlus = () => {
        console.log(dataCart,'vfvjfn')
        dataCart.filter(item => {
            if (item.id === dataCart.id) {
                item.quantity += 1;
            }
         console.log(item,'item')
            return item;
        })
    }

    const handleMinus = () => {
        // if(dataCart.quantity === 1) return
        // setDataCart({...dataCart, quantity: dataCart.quantity - 1, price: dataCart.price - dataCart.currentPrice})
        // localStorage.setItem('itemProduct', JSON.stringify(dataCart))
    }

    const handlePayment = () => {
        localStorage.setItem('cart', JSON.stringify([]));
        navigate('/payment-success')
    }


    return (
        <div className='container mx-auto'>
            <h1 className='text-[30px] font-bold text-gray-700 my-[1rem]'>GIỎ HÀNG CỦA TÔI</h1>

            <div className='grid grid-cols-10  relative gap-[15px]'>


                {
                    dataCart.map((itemCart, indexCart) => (

                        <div className='col-span-7'>
                            <div className='bg-[#ffffff] shadow-lg border border-gray-200'>
                                <div className='p-[1rem]'>
                                    <div className='grid grid-cols-3 gap-[2rem]'>
                                        <div className='grid grid-cols-3 gap-x-[1rem] col-span-2  '>

                                            <div className='col-span-2'>
                                                <div className='h-[250px] w-full overflow-hidden'>
                                                    <img className='w-full h-full object-cover'
                                                         src={itemCart.image}
                                                         alt=""/>
                                                </div>

                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center  h-full items-start flex-col'>
                                                    <div className='text-[20px] font-[500] text-gray-500'>
                                                        {itemCart.name}
                                                    </div>
                                                    <br/>
                                                    <div className='text-gray-400 text-[16px] font-[500]'>
                                                        {itemCart.description}
                                                    </div>
                                                    <br/>
                                                    <div onClick={()=>delCart(itemCart.id)} className='text-gray-800 cursor-pointer font-[500] text-[20px]'>
                                                        Xóa
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                        <div className='col-span-1'>
                                            <div className="flex  h-full    justify-between items-center">
                                                <div className='flex w-full h-full  justify-end items-center gap-x-[8px]'>
                                                    <div onClick={()=> handleMinus(itemCart.id)}>
                                                        <i
                                                            className="fa-solid fa-circle-minus cursor-pointer text-gray-300 text-[30px]"></i>
                                                    </div>
                                                    <div>
                                                        {itemCart.quantity}
                                                    </div>
                                                    <div onClick={() => handlePlus(itemCart.id)}>
                                                        <i className="fa-solid fa-circle-plus cursor-pointer text-gray-300 text-[30px]"></i>
                                                    </div>
                                                    <div>
                                                        {formatPrice(itemCart.price)}
                                                    </div>
                                                </div>


                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                        ))
                }








                <div className='col-span-3 absolute top-0 left-[75%] right-0 '>
                    <div className='bg-[#ffffff] shadow-lg border border-gray-200'>
                        <div className='p-[1rem]'>
                            <div className='text-gray-700 font-bold text-[20px]'>
                                1 MÓN
                            </div>
                            <br/>
                            <hr/>
                            <div>
                                <br/>
                                <div>
                                    Bạn có Mã giảm giá?
                                </div>
                                <br/>
                             <div>
                                 Tổng đơn hàng
                             </div>
                                <br/>
                               <div className='text-gray-700 font-bold text-[16px]'>
                                   Tổng thanh toán
                               </div>
                                <br/>

                                <div className='w-full'>
                                    <button
                                        onClick={handlePayment}
                                        className='w-full h-[50px] text-[#ffffff] text-[15px] font-[500] rounded-[20px] mb-[1rem] px-[10px] bg-[#E4002b]'>
                                        thanh toán
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <br/><br/>
        </div>
    )
}