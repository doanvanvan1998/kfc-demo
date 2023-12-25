import  {useState} from "react";

// const [menu,setMenu] = useState([
//     {
//         id:1,
//         name: 'menu1',
//     },
//     {
//         id:2,
//         name: 'menu2',
//     },
//     {
//         id:3,
//         name: 'menu2',
//     },
//     {
//         id:4,
//         name: 'menu2',
//     },
//     {
//         id:5,
//         name: 'menu4',
//     },
//     {
//         id:6,
//         name: 'menu6',
//     },
//     {
//         id:7,
//         name: 'menu7',
//     },
// ])

// const [elActive,setElactive] = useState(1)
// const activeMenu = (elActive)=> {
//     setElactive(elActive)
// }
export default function Header() {
    return (
        <div className="">
            <div className="grid grid-cols-3  py-[1rem] items-center  container">
                <div className="col-span-2 ">
                    <div className="flex justify-start items-center gap-x-[16px]">
                        <div className="w-[78px] h-[78px] overflow-hidden">
                            <img className="w-full h-full object-cover"
                                 src="	https://static.kfcvietnam.com.vn/images/web/kfc-logo.svg?v=5.0" alt=""/>
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
                        <div className="cursor-pointer">
                            <i className="fa-solid fa-cart-shopping text-3xl"></i>
                        </div>
                        <div className="cursor-pointer">
                            <i className="fa-solid fa-bars text-3xl"></i>
                        </div>
                    </div>
                </div>
            </div>

            <hr/>


            <div className='container'>
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
