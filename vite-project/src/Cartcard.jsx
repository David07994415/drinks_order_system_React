import './all.css'
import React from 'react';

//右側cart元件+加總total
function Cartcard({ cartarg, totalarg, btn, trash}) {
    const totallocal=totalarg.toLocaleString();
    return (<div className="">
        {cartarg.length === 0
            ? <div className="flex_row flex_aic flex_jcc fs_24 fw700_lh150 nochoseframe text-primary">尚未選擇飲品</div>
            : <table className="choseframe">
                <tbody>
                    <tr>
                        <th colSpan={4} className="text_center fs_24 fw700_lh150">購物車</th>
                    </tr>
                    <tr>
                        <th className="fs_24 fw700_lh150 width_frame_190_W py_8 text_center">選購產品</th>
                        <th className="fs_24 fw700_lh150 width_frame_190_W py_8 text_center">產品單價</th>
                        <th className="fs_24 fw700_lh150 width_frame_190_W py_8 text_center">購買數量</th>
                        <th className="fs_24 fw700_lh150 width_frame_190_W py_8 text_center">選購小計</th>
                    </tr>
                    {cartarg.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td className="fs_24 text_center py_8 ">{item.name}</td>
                                <td className="fs_24 text_center py_8 ">{item.price}</td>
                                <td className="fs_24 text_center py_8 ">
                                    <button className='mr_8' type='button' onClick={()=>{trash(item)}}>
                                        <span className='material-icons fs_12'>delete</span>
                                    </button>
                                    <button className='mr_8' type='button' onClick={()=>{btn(item,'min')}}>-</button>
                                    {item.qty}
                                    <button className='ml_8' type='button' onClick={()=>{btn(item,'add')}}>+</button>
                                </td>
                                <td className="fs_24 text_center py_8 ">{item.price*item.qty}</td>
                            </tr>
                        )
                    })}
                    <tr>
                        <th colSpan={4} className="fs_24 fw700_lh150 width_frame_190_W py_8 text_center ">購物車總計為:{totallocal}元
                        </th>
                    </tr>
                </tbody>
            </table>
        }
    </div>)
};

export default Cartcard