import { Card, Space } from 'antd'
import React from 'react';
import { discoutProducts} from '../Assets/Products';
export default function Discount() {
    return (
        <div style={{backgroundColor:'#e2e8f0',height:900}}>
             <h3 style={{textAlign:'center'}}>Big Discount</h3>
                    <div style={{display:'grid',gridTemplateColumns:"auto auto auto",justifyContent:"center",gap:30}}>
                        {discoutProducts.map((items,index)=>(
                         <Space direction="horizontal" size={16} key={index}>
                        <Card
                        style={{
                            width: 320,
                        }}
                        >
                        <div style={{backgroundColor:'#1e3a8a',width:50,color:'white',borderRadius:25,textAlign:'center'}}>{items.discount}%</div>
                        <div><img src={items.imgUrl} alt=""  style={{width:250,height:250,textAlign:'center'}}/></div>
                        <div><b>{items.productName}</b></div>
                        <div>
                            {Array.from({length:items.reviews[0].rating},(_,i)=>(
                                   <span className='text-warning'>&#9733;</span>
                            ))}
                        </div>
                        <h6><b>${items.price}</b></h6>
                        </Card>
                         </Space>
                    ))}
                    </div>
           
        </div>
    )
}
