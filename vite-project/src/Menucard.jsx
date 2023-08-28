import './all.css'
import React from 'react';

//左側菜單選單(有包含按鈕標籤)
function Menucard({productarg,addtoCartarg}) {
    return (<ul className="">{productarg.map((productitems) => {
        return (
            <li key={productitems.id} className="flex_column border_all_lightgreen pxy_8 menuchose" onClick={() => addtoCartarg(productitems)}>
                <div className="flex_row flex_jcsb flex_aic mb_8">
                    <h3 className="fs_24 fw700_lh150">{productitems.name}</h3>
                    <p className="fs_24">{productitems.price}$</p>
                </div>
                <p className="text_center fs_12">{productitems.description}</p>
            </li>
        )
    })}</ul>)
};

export default Menucard