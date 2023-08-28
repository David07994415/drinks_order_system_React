import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import data from './data';
import Menucard from './Menucard';
import Cartcard from './Cartcard';
import Orderbox from './Orderbox';
import './all.css';
// import 'bootstrap/dist/css/bootstrap.min.css'; // 導入 Bootstrap CSS
// import { Modal } from 'bootstrap';


function Showmepage() {
    const [product] = useState(data);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [remark, setRemark] = useState("");
    const [order, setOrder] = useState([]);
    // const myModal = useRef(null);

    // 綁定Boostsrip Modal
    // useEffect(() => {
    //     myModal.current = new bootstrap.Modal(myModal.current);
    // }, []);


    //點擊觸發菜單加入購物車陣列+是否重複點選選的邏輯
    const addtoCart = (item) => {
        const conformIndex = cart.findIndex((cartItem) => item.id === cartItem.id);
        if (conformIndex === -1) {
            const tempCart = [
                ...cart, // [] 淺拷貝
                {
                    ...item,
                    qty: 1, // 數量預設為 1
                },
            ];
            setCart(tempCart);
        }
        else {
            const tempCart = cart.map((cartItem) => {
                return item.id === cartItem.id
                    ? {
                        ...cartItem,
                        qty: cartItem.qty < 10 ? cartItem.qty + 1 : cartItem.qty,
                    }
                    : { ...cartItem };
            });
            setCart(tempCart);
        }
    };


    //購物車刪除
    const trash = (item) => {
        const tempCart = cart.filter((cartItem) => {
            return item.id !== cartItem.id;
        });
        setCart(tempCart);
    };


    //購物選單加(+)減(-)
    const btn = (cartitem, idd) => {

        if (cartitem.qty === 0) {
            const tempCart = cart.filter((cartItem) => {
                return cartitem.id !== cartItem.id;
            });
            setCart(tempCart);
        }
        else {
            const updatecartitem = cart.map((updateitem) => {
                return cartitem.id == updateitem.id
                    ? {
                        ...updateitem, qty: idd === 'add'
                            ? (updateitem.qty < 10 ? (updateitem.qty += 1) : (updateitem.qty))
                            : (updateitem.qty > 0 ? (updateitem.qty -= 1) : (updateitem.qty))
                    }
                    : { ...updateitem }
            })
            setCart(updatecartitem);
        }
    };


    //加總的判斷
    useEffect(() => {
        const totalPrice = cart.reduce((prev, curr) => {
            return prev + curr.price * curr.qty;
        }, 0);
        setTotal(totalPrice);
    }, [cart]);


    //備註的判斷
    const remarktext = (e) => {
        setRemark(e)
    }


    

    //送出訂單
    const createOder = () => {
        const tempOrder = [
            ...order,
            {
                id: new Date().getTime(),
                cart,
                remark,
                total,
            },
        ];
        setOrder(tempOrder);
        setCart([]);
        setRemark("");
    };

    //show出Modal
    // const shmedal = () => {
    //     myModal.current.show();
    // };

    // const sendorder = () => {
    //     createOder();
    //     shmedal();
    // };

    // const openModal = () => {
    //     myModal.current.show();
    // };
 

    //頁面總和的return
    return (<div className="flex_row flex_jcc mt_30">
        <div className="width_frame_1024_W flex_row">
            <Menucard productarg={product} addtoCartarg={addtoCart} />
            <div className="flex_column ml_18">
                <Cartcard cartarg={cart} totalarg={total} btn={btn} trash={trash} />
                <textarea placeholder="備註" className="mt_8" onChange={(e) => remarktext(e.target.value)}></textarea>
                <button className='flex_ase menuchose fs_24 fw700_lh150 mt_8' onClick={() => { createOder() }}>送出訂單</button>
                <Orderbox orderarg={order} />


                {/* <button type="button" className="btn btn-primary" onClick={openModal}>開啟 Modal</button>
                <div className='modal fade' ref={myModal}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                    Modal title
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">...</div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button type="button" className="btn btn-primary">
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    </div>);

};

export default Showmepage


