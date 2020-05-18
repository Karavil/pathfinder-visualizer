import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";

const Grid = ({ width = 1000, height = 1000 }) => {
   const canvas = useRef(null);
   const [pixelRatio, setPixelRatio] = useState(1);

   useLayoutEffect(() => {
      setPixelRatio(window.devicePixelRatio);

      const context = canvas.current.getContext("2d");
      context.save();
      context.scale(pixelRatio, pixelRatio);
      context.fillStyle = "hsl(0, 0%, 95%)";
      context.fillRect(0, 0, width, height);

      context.strokeStyle = "black";
      context.beginPath();
      context.arc(width / 2, height / 2, width / 4, 0, Math.PI * 2);
      context.stroke();
      context.restore();
   }, [pixelRatio]);

   const dw = Math.floor(pixelRatio * width);
   const dh = Math.floor(pixelRatio * height);
   const style = { width, height };

   return <canvas ref={canvas} width={dw} height={dh} style={style} />;
};

export default Grid;
