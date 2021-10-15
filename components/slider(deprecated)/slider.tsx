import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import style from './Slider.module.css'
import { images } from '../../constants/sliderImages';


export default function SimpleSlider() {
  const slider = useRef(null)
  const [loop, setLoop] = useState(null)
  let position = 1
  useEffect(() => {
    setLoop(setInterval(() => {
      slider.current.childNodes.forEach((element) => {
        element.style = `transform: translateX(-${position}px)`
        position += 0.1
      })
    }, 100))
    return clearInterval(loop)

  }, [])
  return (
    <div className={style.sliderWrapper} ref={slider}>
      {images.map((image, index) => (
        <div key={index} className={style.slide}>
          <Image
            src={image.src}
            alt="Picture of the author"
            width={268}
            height={267}
          />
        </div>
      ))}
    </div>
  );
}
