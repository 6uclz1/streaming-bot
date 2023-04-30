import React, { useState, useEffect } from 'react';
import charactor from "./charactor.png";
import charactor2 from "./charactor2.png";
import "../../App.css";

const style: React.CSSProperties = {
  position: "absolute",
  top: "60px",
  left: "1160px",
  height: "934px",
  objectFit: "cover",
};

function Charactor() {
  const images = [
    { src: charactor, displayTime: 6000 },
    { src: charactor2, displayTime: 400 },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, images[currentImageIndex].displayTime*Math.random());

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <img style={style} src={images[currentImageIndex].src} alt="animated image" />
  );
}

export default Charactor;
