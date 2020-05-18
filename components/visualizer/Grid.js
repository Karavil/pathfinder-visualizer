import React, { useRef } from "react";
import styled from "styled-components";

const GridContainer = styled.div`
   display: flex;

   width: 100%;
   height: 800px;

   background: grey;
`;

const Grid = () => {
   const canvasRef = useRef();

   return (
      <GridContainer>
         <canvas
            ref={canvasRef}
            width={window.innerWidth}
            height={window.innerHeight}
         />
      </GridContainer>
   );
};

export default Grid;
