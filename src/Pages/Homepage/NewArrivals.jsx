import { Card, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { products } from '../Assets/Products'
import { Link } from 'react-router-dom';
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
    }, [])
    return (
        <div >
            <h3 style={{ textAlign: 'center', lineHeight: 5 }}>New Arrival Data</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', justifyContent: 'center', gap: 30, }}>
                {items.map((values) => (
                    <Link to={`/product/${values.id}`}>

                        <Space direction="vertical" size={16} key={values.id}>
                            <Card
                                style={{
                                    width: 320,
                                    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
                                }}
                            >
                                <div><img src={values.imgUrl} alt="" style={{ width: 250, height: 250 }} /></div>
                                <div><b>{values.productName}</b></div>
                                <div>{Array.from({ length: values.reviews[0].rating }, (_, i) => (
                                    <span key={i} className='text-warning'>&#9733;</span>
                                ))}</div>
                                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                    <h6><b>${values.price}</b></h6>
                                    <a href="cart" style={{ textDecoration: 'none', color: 'inherit' }}><span style={{ fontSize: 26 }}>+</span>
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
