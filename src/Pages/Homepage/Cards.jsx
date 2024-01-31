import { faCar, faCreditCard, faHeadphones, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Space } from 'antd';
import React from 'react';
function Cards() {
    return (
        <div>
            <Space direction='horizontal' size={16} style={{display:'flex',justifyContent:'center',height:350}}>
                <Card
                    style={{
                        width: 270,
                        backgroundColor:'#fff1f2',
                        textAlign:'center'
                    }}
                >
                    <p><FontAwesomeIcon icon={faCar} /></p>
                    <h6>Free Shipping</h6>
                    <p>Lorem ipsum dolor sit amet</p>
                </Card>
                <Card
                    style={{
                        width: 270,
                        backgroundColor:'#ccfbf1',
                        textAlign:'center'
                    }}
                >
                    <p><FontAwesomeIcon icon={faCreditCard} /></p>
                    <h6>Safe Payment</h6>
                    <p>Lorem ipsum dolor sit amet</p>
                </Card>
                <Card
                    style={{
                        width: 270,
                        backgroundColor:'#d9f99d',
                        textAlign:'center'
                    }}
                >
                    <p><FontAwesomeIcon icon={faShieldHalved} /></p>
                    <h6>Secure Payment</h6>
                    <p>Lorem ipsum dolor sit amet</p>
                </Card>
                <Card
                    style={{
                        width: 270,
                        backgroundColor:'#e0e7ff',
                        textAlign:'center'
                    }}
                >
                    <p><FontAwesomeIcon icon={faHeadphones} /></p>
                    <h6>Back Guarantee</h6>
                    <p>Lorem ipsum dolor sit amet</p>
                </Card>
            </Space>
        </div>
    );


}
export default Cards;

