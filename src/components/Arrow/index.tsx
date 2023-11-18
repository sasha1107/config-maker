import ArrowIcon from "@assets/arrow.svg?react";
import { useState, useEffect } from "react";

const Arrow = () => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const atan = Math.atan2(
        clientY - window.innerHeight / 2,
        clientX - window.innerWidth / 2,
      );
      const deg = -atan * (180 / Math.PI) + 180 + 90; // convert radian to degree and adjust for arrow pointing down
      setAngle(deg);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      style={{
        transform: `rotate(${angle}deg)`,
      }}
    >
      <ArrowIcon />
    </div>
  );
};

export default Arrow;
