import { Card, Space } from 'antd'
import { discoutProducts } from '../Assets/Products'
export default function Discount() {

    return (
        <div style={{ backgroundColor: '#e2e8f0', height: 1000 }}>
            <h3 style={{ textAlign: 'center',lineHeight:5 }}>Big Discount</h3>
            <div style={{ display: 'grid', gridTemplateColumns: "auto auto auto", justifyContent: "center", gap: 30,lineHeight:20 }}>
                {discoutProducts.map((items) => (
                    <Space direction="horizontal" size={16} key={items.id}>
                        <Card
                            style={{
                                width: 320,
                            }}
                        >
                            <div style={{ backgroundColor: '#1e3a8a', width: 50, color: 'white', borderRadius: 25, textAlign: 'center' }}>{items.discount}%</div>
                            <div><img src={items.imgUrl} alt="" style={{ width: 250, height: 250, textAlign: 'center' }} /></div>
                            <div><b>{items.productName}</b></div>
                            <div>
                                {Array.from({ length: items.reviews[0].rating }, (_, i) => (
                                    <span key={i} className='text-warning'>&#9733;</span>
                                ))}
                            </div>
                            <div style={{display:'flex',justifyContent:"space-between"}}>
                                <h6><b>${items.price}</b></h6> 
                             <a href="cart" style={{textDecoration:'none',color:'inherit'}}><span style={{fontSize:26}}>+</span>
                             </a>
                            </div>
                        </Card>
                    </Space>
                ))}
            </div>

        </div>
    )
}
