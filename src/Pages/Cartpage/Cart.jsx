import Card from 'antd/es/card/Card';
import { products } from '../Assets/Products';
export default function Cart() {
    const data = localStorage.getItem('k');
    const data1 = JSON.parse(data)
    const s = data1.map((v) => v.id)
    const FilterData = products.filter((values) => s.includes(values.id));
    console.log(FilterData);



    return (
        <div style={{backgroundColor:'#f8fafc'}}>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', justifyContent: 'center', alignItems: 'baseline', gap: 40, marginTop: 80 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {FilterData.map((value) => (
                        <Card key={value.id}
                            style={{
                                width: 650,
                                height: 190,
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex' ,justifyContent:'center',alignItems:'center',gap:40}}>
                                    <div><img src={value.imgUrl} alt="" style={{ width: 150, height: 150 }} /></div>
                                    <div style={{lineHeight:3}}>
                                        <h6>{value.productName}</h6>
                                        <div>${value.price}</div>
                                    </div>
                                </div>
                                <div>
                                    <h6>X</h6>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
                <div>
                    <Card
                        title="Card Summary"
                        bordered={false}
                        style={{
                            width: 350,
                            height: 150
                        }}
                    >
                        <p>Total Price</p>
                    </Card>
                </div>
            </div>
        </div>
    )
}
