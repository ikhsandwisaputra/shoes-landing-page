import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

import image1 from '../assets/img/1.jpg'
import image2 from '../assets/img/2.jpg'
import image3 from '../assets/img/3.jpg'
import image4 from '../assets/img/4.jpg'
import image5 from '../assets/img/2.jpg'
import image6 from '../assets/img/6.png'

export default function Section3() {
  const shoesData = [
    {
      id: 1,
      imgSrc: image1,
      title: 'Nike 1',
      stock: 999,
      price: 100,
    },
    {
      id: 2,
      imgSrc: image2,
      title: 'Nike 2',
      stock: 999,
      price: 100,
    },
    {
      id: 3,
      imgSrc: image3,
      title: 'Nike 3',
      stock: 999,
      price: 100,
    },
    {
      id: 4,
      imgSrc: image4,
      title: 'Nike 1',
      stock: 999,
      price: 100,
    },
    {
      id: 5,
      imgSrc: image5,
      title: 'Nike 2',
      stock: 999,
      price: 100,
    },
    {
      id: 6,
      imgSrc: image6,
      title: 'Nike 3',
      stock: 999,
      price: 100,
    },
    // Add more items as needed
  ];
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const carousel = useRef();

  const [dragConstraints, setDragConstraints] = useState({
    left: -width,
    right: 0,
  });

  useEffect(() => {
    const updateDragConstraints = () => {
      if (window.innerWidth < 768) {
        setDragConstraints({ left: -1200, right: 300 });
      } else {
        setDragConstraints({ left: -1000, right: 0 });
      }
    };

    updateDragConstraints();

    window.addEventListener('resize', updateDragConstraints);

    return () => {
      window.removeEventListener('resize', updateDragConstraints);
    };
  }, [shoesData.length]);
    
  return (
    <section className='flex flex-col items-center justify-center w-full h-fit py-16'>
      <div className='text-slate-950 font-redHatDisplay text-center'>
        <h1 className='text-3xl capitalize font-semibold'>
          More Options Nice Shoes
        </h1>
        <p className='text-lg'>Lorem ipsum dolor sit amet.</p>
      </div>
      <motion.div className=' carousel w-[920px] overflow-hidden'>
        <motion.div
          drag='x'
          dragConstraints={dragConstraints}
          ref={carousel}
          dragCursor='grab'
          whileDrag={{ cursor: 'grabbing' }}
          className='inner-carrousel flex gap-2'
                //   dragElastic={0.1}
        >
          {shoesData.map((shoe) => (
            <motion.div
              key={shoe.id}
              className='items min-w-[300px] h-fit   text-center flex flex-col items-center justify-center'
            >
              <div className='w-full h-[300px]  '>
                <motion.img
                  src={shoe.imgSrc}
                  alt={shoe.title}
                  className='pointer-events-none w-full h-full object-cover'
                />
              </div>
              <h1 className='font-semibold font-redHatDisplay text-3xl capitalize'>
                {shoe.title}
              </h1>
              <p className='font-redHatDisplay font-normal text-md'>
                Stock : {shoe.stock}
              </p>
              <p className='font-semibold text-2xl text-purple-800 font-redHatDisplay'>
                ${shoe.price}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
