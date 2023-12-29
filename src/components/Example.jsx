import React from 'react';
import ImageSlider from './ImageSlider';

const images = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg',
  'https://example.com/image4.jpg',
  'https://example.com/image5.jpg',
  'https://example.com/image6.jpg',
];

const YourComponent = () => {
  return (
    <div>
      <h1>Your Page Title</h1>
      <ImageSlider images={images} />
    </div>
  );
};

export default YourComponent;
