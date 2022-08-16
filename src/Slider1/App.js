import React, { useState } from 'react'
import "./App.scss"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import "swiper/css/bundle"

import Slide1 from "./images/slide1.jpg"
import Slide2 from "./images/slide2.jpg"
import Slide3 from "./images/slide3.jpg"
import Slide4 from "./images/slide4.jpg"
import Slide5 from "./images/slide5.jpg"
import Slide6 from "./images/slide6.jpg"

import { Swiper,SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Thumbs } from "swiper";

export default function App() {
  
  const [arr,setSlide] = useState([
    {
      id: 1,
      theme: "slide1",
      url: Slide1
    },
    {
      id: 2,
      theme: "slide2",
      url: Slide2
    },
    {
      id: 3,
      theme: "slide3",
      url: Slide3
    },
    {
      id: 4,
      theme: "slide4",
      url: Slide4
    },
    {
      id: 5,
      theme: "slide5",
      url: Slide5
    },
    {
      id: 6,
      theme: "slide6",
      url: Slide6
    }
  ])
  const [value,setValue] = useState(arr[0].url)

  const handleChange = (e) => {
    setValue(e)
  }

  console.log(arr.map(elem => elem.url))
  return (
    <div style={{
      maxWidth: "1500px",
      margin: "0 auto", 
      borderRadius: "8px",
      height: "82vh",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      position: "relative"
    }}>
      <img src={value} alt="" className='img-edit'/>
      <span className='delete-btn'>
        <p>&#10006;</p>
      </span>
      <div className='Content'>
        <h1>Recommendations</h1>
        <p>You can pay slightly higher for Mazda 3's as the margins on purchases last week exceeds your desired purchase price.</p>
      </div>
      <div style={{
        width: "60%",
        height: "180px",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        position: "relative",
      }}>
        <Swiper
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          navigation={true}
          modules={[Navigation, Thumbs]}
          className="Slides"
        >
        
        {arr && arr.map(elem => {
          return (
            <SwiperSlide key={elem.id} >
              <img src={elem.url} onClick={(e) => handleChange(elem.url)} style={{
                width: "180px",
                height: "120px",
                borderRadius: "8px",
                cursor: "pointer",
              }}/>
            </SwiperSlide>
          )
        })}
      </Swiper>
      </div>
    </div>
  )
}

