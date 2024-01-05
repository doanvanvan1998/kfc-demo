import {useState} from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const [goodWill, setGooWill] = useState([
        {
            id: 1,
            name: 'Combo Vui Vẻ fvvfvfvf',
            price: 90000,
            description: '3 Miếng Gà Rán + 1 Pepsi lon',
            image: 'https://static.kfcvietnam.com.vn/images/items/lg/combo-vui-ve.jpg?v=3QjDZL',
            quantity: 1,
            currentPrice: 90000,
        },
        {
            id: 2,
            name: 'Combo Vui Vẻ',
            price: 90000,
            description: '3 Miếng Gà Rán + 1 Pepsi lon',
            image: 'https://static.kfcvietnam.com.vn/images/items/lg/combo-vui-ve.jpg?v=3QjDZL',
            quantity: 1,
            currentPrice: 90000,
        },
        {
            id: 3,
            name: 'Combo Vui Vẻ',
            price: 90000,
            description: '3 Miếng Gà Rán + 1 Pepsi lon',
            image: 'https://static.kfcvietnam.com.vn/images/items/lg/combo-vui-ve.jpg?v=3QjDZL',
            quantity: 1,
            currentPrice: 90000,
        },
        {
            id: 4,
            name: 'Combo Vui Vẻ',
            price: 90000,
            description: '3 Miếng Gà Rán + 1 Pepsi lon',
            image: 'https://static.kfcvietnam.com.vn/images/items/lg/combo-vui-ve.jpg?v=3QjDZL',
            quantity: 1,
            currentPrice: 90000,
        },
        {
            id: 5,
            name: 'Combo Vui Vẻ',
            price: 90000,
            description: '3 Miếng Gà Rán + 1 Pepsi lon',
            image: 'https://static.kfcvietnam.com.vn/images/items/lg/combo-vui-ve.jpg?v=3QjDZL',
            quantity: 1,
            currentPrice: 90000,
        },
        {
            id: 6,
            name: 'Combo Vui Vẻ',
            price: 90000,
            description: '3 Miếng Gà Rán + 1 Pepsi lon',
            image: 'https://static.kfcvietnam.com.vn/images/items/lg/combo-vui-ve.jpg?v=3QjDZL',
            quantity: 1,
            currentPrice: 90000,
        },
    ])

    const [newFood, setNewFood] = useState([
        {
            id: 1,
            name: 'Combo Vui Vẻ',
            price: '95.000₫',
            description: '3 Miếng Gà Rán + 1 Pepsi lon',
            image: 'https://static.kfcvietnam.com.vn/images/items/lg/combo-vui-ve.jpg?v=3QjDZL',
            quantity: 1
        },
        {
            id: 2,
            name: 'Combo Vui Vẻ',
            price: '95.000₫',
            description: '3 Miếng Gà Rán + 1 Pepsi lon',
            image: 'https://static.kfcvietnam.com.vn/images/items/lg/combo-vui-ve.jpg?v=3QjDZL',
            quantity: 1
        },
        {
            id: 3,
            name: 'Combo Vui Vẻ',
            price: '95.000₫',
            description: '3 Miếng Gà Rán + 1 Pepsi lon',
            image: 'https://static.kfcvietnam.com.vn/images/items/lg/combo-vui-ve.jpg?v=3QjDZL',
            quantity: 1
        },
        {
            id: 4,
            name: 'Combo Vui Vẻ',
            price: '95.000₫',
            description: '3 Miếng Gà Rán + 1 Pepsi lon',
            image: 'https://static.kfcvietnam.com.vn/images/items/lg/combo-vui-ve.jpg?v=3QjDZL',
            quantity: 1
        },
        {
            id: 5,
            name: 'Combo Vui Vẻ',
            price: '95.000₫',
            description: '3 Miếng Gà Rán + 1 Pepsi lon',
            image: 'https://static.kfcvietnam.com.vn/images/items/lg/combo-vui-ve.jpg?v=3QjDZL',
            quantity: 1
        },
        {
            id: 6,
            name: 'Combo Vui Vẻ',
            price: '95.000₫',
            description: '3 Miếng Gà Rán + 1 Pepsi lon',
            image: 'https://static.kfcvietnam.com.vn/images/items/lg/combo-vui-ve.jpg?v=3QjDZL',
            quantity: 1
        },
    ])

    const goToDetail = (item) => {
        localStorage.setItem('itemProduct', JSON.stringify(item) )
        navigate('/detail-product')
    }

    return (
        <div className="container mx-auto">
            <div className='text-[#000000] text-[25px] font-[700] '>
                ƯU ĐÃI
            </div>
            <br/>

            <div className='grid grid-cols-4 gap-[16px]'>
                {
                    goodWill.map((itemGoodWill, indexGoodWill) => (
                        <div className='bg-[#ffffff] shadow border border-gray-200' key={indexGoodWill}>
                            <div className="p-[10px]">
                                <img src={itemGoodWill.image} alt=""/>
                            </div>

                            <div className="flex justify-between items-center px-[10px]">
                                <div className='text-[18px] font-[600] text-[#000000]'>
                                    {itemGoodWill.name}
                                </div>
                                <div className='text-[18px] font-[600] text-[#000000]'>
                                    {itemGoodWill.price}
                                </div>
                            </div>

                            <div className='px-[10px] text-gray-500 font-[500] pb-[1rem]'>
                                {itemGoodWill.description}
                            </div>

                            <div className="px-[10px]" onClick={() => goToDetail(itemGoodWill)}>
                                <button
                                    className='w-full h-[50px] text-[#ffffff] text-[18px] font-[500] rounded-[20px] mb-[1rem] px-[10px] bg-[#cccccc]'>Thêm
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>

            <br/><br/>
            <div className='text-gray-300 text-[25px] font-[700] '>
                Món Mới
            </div>
            <br/>

            <div className='grid grid-cols-4 gap-[16px]'>
                {
                    newFood.map((itemNewFood, indexNewFood) => (
                        <div className='bg-[#ffffff] shadow border border-gray-200' key={indexNewFood}>
                            <div className="p-[10px]">
                                <img src={itemNewFood.image} alt=""/>
                            </div>

                            <div className="flex justify-between items-center px-[10px]">
                                <div className='text-[18px] font-[600] text-[#000000]'>
                                    {itemNewFood.name}
                                </div>
                                <div className='text-[18px] font-[600] text-[#000000]'>
                                    {itemNewFood.price}
                                </div>
                            </div>

                            <div className='px-[10px] text-gray-500 font-[500] pb-[1rem]'>
                                {itemNewFood.description}
                            </div>

                            <div className="px-[10px]">
                                <button
                                    className='w-full h-[50px] text-[#ffffff] text-[18px] font-[500] rounded-[20px] mb-[1rem] px-[10px] bg-[#cccccc]'>Thêm
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>


            <br/><br/>
        </div>
    )
}