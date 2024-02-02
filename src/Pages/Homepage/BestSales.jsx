import React, { useEffect, useState } from 'react'
import { products } from '../Assets/Products'
import { Card, Space } from 'antd';
export default function BestSales() {
  const[items,setItems]=useState(products);
  const getData =() => {
    let productItems= items;
    let filterData = productItems.filter((values) =>(values.category==='sofa'));
    setItems(filterData);
  }
  useEffect(() =>{
      getData();
  },[])
  return (
    <div style={{backgroundColor:'#e2e8f0',}}>
        <h3 style={{textAlign:'center',lineHeight:5}}>Best Sales</h3>
        <div style={{display:'grid',gridTemplateColumns:'auto auto auto',justifyContent:'center',gap:30}}>
               {items.map((values)=>(
                   <Space direction="vertical" size={16} key={values.id}>
                   <Card
                       style={{
                           width: 320,
                       }}
                   >
                    <div><img src={values.imgUrl} alt="bestSales" style={{width:250,height:250}}/></div>
                    <div><b>{values.productName}</b></div>
                    <div>{Array.from({ length: values.reviews[0].rating }, (_, i) => (
                                <span key={i}className='text-warning'>&#9733;</span>
                            ))}</div>
                    <div><b>${values.price}</b></div>
                    </Card>
                    </Space>
               ))}
        </div>
    </div>
  )
}
