import React, { useState } from 'react'
import { SliderData } from '../Assets/Products'
import { Carousel } from 'react-bootstrap'
function Slider() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel  className= "mt-5" activeIndex={index} onSelect={handleSelect} style={{ backgroundColor: "rgba(242, 247, 252, 0.842)", height: "30rem" }}>
      {SliderData.map((slide, index) => (
        <Carousel.Item key={index}>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, width: "100%" }}>
            <div style={{ width: "1/2", display: "flex", justifyContent: "flex-start", alignItems: "center", padding: "0 5rem" }}>
              <div>
                <h3>{slide.title}</h3>
                <p>{slide.desc}</p>
              </div>
            </div>
            <div style={{ width: "1/2" }}>
              <img src={slide.cover} alt="First slide" />
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider

