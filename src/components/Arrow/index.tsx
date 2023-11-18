import ArrowIcon from "@assets/arrow.svg?react";
import { useState, useEffect, useRef } from "react";

const Arrow = () => {
  const [angle, setAngle] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const atan = Math.atan2(
        clientY - (ref.current?.offsetTop || 0),
        clientX - (ref.current?.offsetLeft || 0),
      );
      const deg = atan * (180 / Math.PI); // convert radian to degree
      setAngle(deg);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      ref={ref}
      style={{
        transform: `rotate(${angle}deg)`,
      }}
    >
      <ArrowIcon />
    </div>
  );
};

export default Arrow;
