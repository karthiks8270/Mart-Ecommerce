import React, { useEffect, useState } from 'react'
import { products } from '../Assets/Products'
import { Card, Space } from 'antd';
import { Link } from 'react-router-dom';
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
                 <Link to={`/product/${values.id}`}>
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
                   <div style={{display:'flex',justifyContent:"space-between"}}>
                                <h6><b>${values.price}</b></h6> 
                             <a href="cart" style={{textDecoration:'none',color:'inherit'}}><span style={{fontSize:26}}>+</span>
                             </a>
                            </div>
                    </Card>
                    </Space>
                 </Link>
               ))}
        </div>
    </div>
  )
}
