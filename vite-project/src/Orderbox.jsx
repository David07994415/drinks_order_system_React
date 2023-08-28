import './all.css'
import React from 'react';

function Orderbox({orderarg}){

    return (<div className="mt_8">
        {orderarg.length==0
        ?<div className="flex_row flex_aic flex_jcc fs_24 fw700_lh150 noorderframe">尚未發送訂單</div>
        :<div>{orderarg.map((item)=>{
            return <div key={item.id}>
                <h3>訂單編號:{item.id}</h3>
                <p>訂單備註:{item.remark}</p>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th colSpan={4} className="fs_24 fw700_lh150 width_frame_190_W py_8">訂單資訊</th>
                            </tr>
                            <tr>
                                <th className="fs_24  width_frame_190_W py_8 text_center">選購產品</th>
                                <th className="fs_24  width_frame_190_W py_8 text_center">產品單價</th>
                                <th className="fs_24  width_frame_190_W py_8 text_center">產品數量</th>
                                <th className="fs_24  width_frame_190_W py_8 text_center">選購小計</th>
                            </tr>
                                {item.cart.map(menuitem=>{
                                    return <tr key={menuitem.id}>
                                        <td className="fs_18 text_center py_8 ">{menuitem.name}</td>
                                        <td className="fs_18 text_center py_8 ">{menuitem.price}</td>
                                        <td className="fs_18 text_center py_8 ">{menuitem.qty}</td>
                                        <td className="fs_18 text_center py_8 ">{menuitem.price*menuitem.qty}</td>
                                    </tr>
                                })}
                            <tr>
                                <th colSpan={4} className="fs_24 fw700_lh150 width_frame_190_W py_8 text_center">訂單金額:{item.total}元</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        })
            
        
            }</div>
        }



    </div>)
}

export default Orderbox