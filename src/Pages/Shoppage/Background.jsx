import React, { useState } from 'react';
import './shop.css';
import { Dropdown, Input, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons'
import Card from 'antd/es/card/Card';
import { products } from '../Assets/Products';
const tableImg = require('../Assets/Images/table.jpg');

export default function Background() {
  const[selectedSection,setSelectedSection] = useState('sofa');
  const[searchInput,setSearchInput] = useState('');
 const handleSectionClick = (section) =>{
  setSelectedSection(section);
};
const items = [
  {
    label:(
      <div className='DropDown_Section' onClick={() => handleSectionClick('sofa')}>Sofa</div>
    ),
    key:'0',
  },
  {
    label:(
      <div className='DropDown_Section' onClick={() =>{console.log('clicked chair'); handleSectionClick('chair')}}>Chair</div>
    ),
    key:'1',
  },
  {
    label:(
      <div className='DropDown_Section' onClick={() => handleSectionClick('watch')}>Watch</div>
    ),
    key:'2',
  },
  {
    label:(
      <div className='DropDown_Section' onClick={() => handleSectionClick('mobile')}>Mobile</div>
    ),
    key:'3',
  },
  {
    label:(
      <div className='DropDown_Section' onClick={() => handleSectionClick('wireless')}>Wireless</div>
    ),
    key:'4',
  },
];
  return (
    <div>
      <div className='image-container'>
        <img src={tableImg} alt="table" id='tableImg' />
        <div className='background-text'><b>Product</b></div>
      </div>

      <div className='Filter_Data'>
        <Dropdown
          menu={{
            items,
          }}
          
          trigger={['click']}
        >
          <a href=' #' className='DropDown_Section' onClick={(e) => e.preventDefault()}>
            <Space style={{ backgroundColor: '#1e3a8a', textDecoration: 'none', color: "white",lineHeight:2}}>
              Filter By Category
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <Input
          placeholder="Search products"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          style={{ width: 200 }}
        />
      </div>

       <div style={{display:"grid",gridTemplateColumns:'auto auto auto',justifyContent:'center',alignItems:'center',gap:35}}>
        {products.map((product)=>(
              selectedSection===product.category ? (
                <Space direction="vertical" size={16} key={product.id} >
                <Card
                  style={{
                    width:"100%",
                    boxShadow:'box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px'
                  }}
                >
                  <div><img src={product.imgUrl} alt="" style={{ width: 250, height: 250 }} /></div>
                            <div><b>{product.productName}</b></div>
                            <div>{Array.from({ length: product.reviews[0].rating }, (_, i) => (
                                <span key = {i}className='text-warning'>&#9733;</span>
                            ))}</div>
                            <h6><b>${product.price}</b></h6>
                </Card>
              </Space>
              ) :null
      )
      )}
       </div>
    </div>
  );
}
