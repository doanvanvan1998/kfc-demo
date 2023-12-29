import {useEffect, useState} from "react";
import formatPrice from "../hooks/formatPrice";
export default function DetailProduct() {
    const [itemProduct, setItemProduct] = useState(null)
    const[flag, setFlag] = useState(false)


    const getDataFromLocalStorage = () => {
        const data = JSON.parse(localStorage.getItem('itemProduct'))
        setItemProduct({...data, quantity: 1})
        console.log(data,'vfvfvf')
    }

    const handlePlus = () => {
       setItemProduct({...itemProduct, quantity: itemProduct.quantity + 1})
    }
    const handleMinus = () => {
        if(itemProduct.quantity === 1) return
       setItemProduct({...itemProduct, quantity: itemProduct.quantity - 1})
    }

    useEffect(() => {
        getDataFromLocalStorage()
    }, [])


    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || []
        const index = cart.findIndex(item => item.id === itemProduct.id)
        if(index === -1){
        cart.push(itemProduct)
        }else{
            cart[index].quantity += itemProduct.quantity
        }
        localStorage.setItem('cart', JSON.stringify(cart))
        localStorage.setItem('countProduct', JSON.stringify(cart.length))
    }

    return (
        <div>
            <div className='container mx-auto'>
                <h1 className='text-4xl font-bold my-[2rem]'>Detail Product</h1>


                {
                    itemProduct && (
                        <div className="grid grid-cols-2 gap-x-[3rem]">
                            <div>
                                <img src={itemProduct.image} alt=""/>
                            </div>

                            <div className='border border-gray-200 shadow-lg'>
                                <div className='p-[18px]'>
                                    <div className='text-3xl font-bold my-[1rem]'>
                                        {itemProduct.name}
                                    </div>
                                    <div className='text-[14px] my-[2rem] font-bold text-gray-300'>
                                        {itemProduct.description}
                                    </div>
                                    <div className='h-[1px] bg-gray-200'>

                                    </div>
                                    <div className='text-[14px] my-[2rem] font-bold text-gray-300'>
                                   price:      {parseInt(itemProduct.price)}
                                    </div>
                                    <div className='h-[1px] bg-gray-200'>

                                    </div>

                                    <div className="flex  mt-[2rem] justify-between items-center">
                                        <div className='flex justify-start items-center gap-x-[8px]'>
                                            <div onClick={handleMinus}>
                                                <i
                                                    className="fa-solid fa-circle-minus cursor-pointer text-gray-300 text-[30px]"></i>
                                            </div>
                                            <div>
                                                {itemProduct.quantity}
                                            </div>
                                            <div onClick={handlePlus}>
                                                <i className="fa-solid fa-circle-plus cursor-pointer text-gray-300 text-[30px]"></i>
                                            </div>
                                        </div>

                                        <button
                                            onClick={addToCart}
                                            className='w-auto h-[50px] text-[#ffffff] text-[15px] font-[500] rounded-[20px] mb-[1rem] px-[10px] bg-[#E4002b]'>
                                            Thêm vào giỏ hàng
                                        </button>

                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                }

            </div>
            <br/><br/>
        </div>
    )
}