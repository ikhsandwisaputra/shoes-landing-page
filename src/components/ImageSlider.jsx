import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';

const Carousel = () => {
  const images = [
    'https://placekitten.com/800/400',
    'https://placekitten.com/801/400',
    'https://placekitten.com/802/400',
    'https://placekitten.com/803/400',
    'https://placekitten.com/804/400',
    'https://placekitten.com/805/400',
  ];

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useLayoutEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className="mx-[20%]">
      <motion.div className="carousel bg-red-600 mx-auto overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="innerCarousel flex gap-1"
          ref={carousel}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="items min-w-[200px] h-[300px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.img
                src={image}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-full pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Carousel;
