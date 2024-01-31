import { Card, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { products } from '../Assets/Products'
export default function NewArrivals() {
    const [items, setItem] = useState(products);
    const getData = () => {
        let productData = items;
        let filterData = productData.filter((values) => (
            values.category === 'mobile' || values.category === 'wireless'
        ));
        setItem(filterData);
    }
    useEffect(() => {
        getData();
    },[])
    return (
        <div style={{display:'flex',flexDirection:"column",gap:60}}>
             <h3 style={{textAlign:'center'}}>New Arrival Data</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', justifyContent: 'center', gap: 30 ,}}>
                {items.map((values, index) => (
                    <Space direction="vertical" size={16} key={index}>
                        <Card
                            style={{
                                width: 320,
                                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
                            }}
                        >
                            <div><img src={values.imgUrl} alt="" style={{ width: 250, height: 250 }} /></div>
                            <div><b>{values.productName}</b></div>
                            <div>{Array.from({ length: values.reviews[0].rating }, (_, i) => (
                                <span className='text-warning'>&#9733;</span>
                            ))}</div>
                            <h6><b>${values.price}</b></h6>
                        </Card>
                    </Space>
                ))}

            </div>
        </div>


    )
}
