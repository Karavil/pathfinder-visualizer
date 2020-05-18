import React, { useLayoutEffect, useEffect, useRef, useState } from "react";

import styled from "styled-components";
import { Flex } from "@chakra-ui/core";

const StyledCanvas = styled.canvas`
   position: absolute;
   z-index: -1;
`;

const drawGrid = (ctx, width, height, squareSide) => {
   ctx.beginPath();
   ctx.lineWidth = 0.5;
   ctx.strokeStyle = "white";

   for (let i = 0; i <= height; i = i + squareSide) {
      ctx.moveTo(0, i);
      ctx.lineTo(width, i);
      ctx.stroke();
   }
   for (let j = 0; j <= width; j = j + squareSide) {
      ctx.moveTo(j, 0);
      ctx.lineTo(j, height);
      ctx.stroke();
   }
};

const Grid = ({ backgroundColor }) => {
   const canvas = useRef(null);

   const [pixelRatio, setPixelRatio] = useState(1);
   const [dimensions, setDimensions] = useState({
      width: 1000,
      height: 1000,
   });
   const [squareSide, setSquareSize] = useState(40);

   const updateDimensions = (window) => {
      setDimensions({
         width: window.innerWidth - (window.innerWidth % squareSide),
         height: window.innerHeight - (window.innerHeight % squareSide),
      });
   };

   useEffect(() => {
      updateDimensions(window);
      setPixelRatio(window.devicePixelRatio);
      window.addEventListener("resize", () => updateDimensions(window));
      return () => {
         window.removeEventListener("resize", () => updateDimensions(window));
      };
   }, []);

   useEffect(() => {
      const ctx = canvas.current.getContext("2d");
      const { width, height } = dimensions;

      ctx.save();
      ctx.scale(pixelRatio, pixelRatio);
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);

      drawGrid(ctx, width, height, squareSide);
   }, [pixelRatio, dimensions, squareSide]);

   const dw = Math.floor(pixelRatio * dimensions.width);
   const dh = Math.floor(pixelRatio * dimensions.height);

   console.log(dimensions);
   return (
      <Flex w="100%" justifyContent="center" height="100vh">
         <StyledCanvas ref={canvas} width={dw} height={dh} style={dimensions} />
      </Flex>
   );
};

export default Grid;
