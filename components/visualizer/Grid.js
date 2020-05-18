import React, { useEffect, useState } from "react";

import { SimpleGrid } from "@chakra-ui/core";
import styled from "styled-components";

const StyledSquare = styled.div`
   background: ${(props) =>
      props.clicked ? "orange" : props.theme.colors.secondaryChrome};

   width: ${(props) => `${props.squareSide - 6}px`};
   height: ${(props) => `${props.squareSide - 6}px`};

   margin: 3px;
   border-radius: 3px;

   transition: all 0.1s ease-in-out;
   &:hover {
      transform: scale(1.3);
      cursor: pointer;
      border: ${(props) => `3px solid ${props.theme.colors.branding}`};
   }
`;

const Square = ({ data, squareSide, toggleSquare }) => {
   return (
      <StyledSquare
         key={data.position}
         clicked={data.clicked}
         squareSide={squareSide}
         onClick={() => toggleSquare(data.position)}
      />
   );
};

const Grid = ({ backgroundColor }) => {
   const [dimensions, setDimensions] = useState({
      width: 1000,
      height: 1000,
   });

   const [squareSide, setSquareSize] = useState(40);
   const [gridMap, setGridMap] = useState([]);

   const toggleSquare = (position) => {
      console.log(position);
      setGridMap((gridMap) =>
         gridMap.map((square) => {
            if (
               square.position[0] === position[0] &&
               square.position[1] === position[1]
            ) {
               console.log("equals");
               return {
                  ...square,
                  clicked: !square.clicked,
               };
            }
            return square;
         })
      );
   };

   const updateDimensions = () => {
      let preferredWidth = window.innerWidth * 0.95;
      let preferredHeight = window.innerHeight * 0.9;

      setDimensions({
         width: preferredWidth - (preferredWidth % squareSide),
         height: preferredHeight - (preferredHeight % squareSide),
      });
   };

   useEffect(() => {
      updateDimensions();

      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
   }, []);

   useEffect(() => {
      const squares = (dimensions.width * dimensions.height) / squareSide ** 2;
      // How many squares each row should hold (also the amount of columns)
      const rowSquareCount = dimensions.width / squareSide;
      const gridGeneration = [];
      for (let i = 0; i < squares; i++) {
         const xPosition = Math.floor(i / rowSquareCount);
         const yPosition = i % rowSquareCount;

         gridGeneration.push({
            position: [xPosition, yPosition],
            clicked: false,
         });
      }
      setGridMap(gridGeneration);
   }, [dimensions]);

   return (
      <SimpleGrid
         py={6}
         width={dimensions.width}
         columns={dimensions.width / squareSide}
         mx="auto"
      >
         {gridMap.map((data) => (
            <Square data={data} toggleSquare={toggleSquare} squareSide={40} />
         ))}
      </SimpleGrid>
   );
};

export default Grid;
