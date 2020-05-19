import React, { useEffect, useState } from "react";

import { SimpleGrid } from "@chakra-ui/core";
import styled from "styled-components";

import Matrix from "../../utils/algos/matrix";

const StyledSquare = styled.div`
   background: ${(props) => {
      if (props.clicked) return props.theme.colors.inverseBranding;
      return props.theme.colors.secondaryChrome;
   }};

   width: ${(props) => `${props.squareSide - 6}px`};
   height: ${(props) => `${props.squareSide - 6}px`};

   margin: 3px;
   border-radius: 3px;

   user-select: none;

   &:hover {
      transition: transform 0.04s ease-in-out;
      background: ${({ theme }) => theme.colors.inverseBranding};
      transform: scale(1.2);
      transform: ${(props) => {
         if (props.clicked) return "scale(1)";
         return "scale(1.3)";
      }};

      box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
      cursor: pointer;
   }
   &:active {
      transition: transform 0.1s ease-in-out;
      transform: scale(0.9);
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

   const solveMaze = () => {
      const grid = new Matrix(gridMap);
      animateSteps(grid.dfs(0, 0, 19, 10).solution);
   };

   const animateSteps = (steps) => {
      console.log(steps.length);
      for (let i = 1; i < steps.length; i++) {
         setTimeout(() => {
            console.log(steps[i]);
            toggleSquare(steps[i]);
         }, 100 * i);
      }
   };

   const toggleSquare = (position) => {
      setGridMap((gridMap) => {
         const squareData = gridMap[position[0]][position[1]];
         gridMap[position[0]][position[1]] = {
            ...squareData,
            clicked: !squareData.clicked,
         };
         return [...gridMap];
      });
   };

   const updateDimensions = () => {
      let preferredWidth = window.innerWidth * 0.985;
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
      const gridGeneration = [[]];
      for (let i = 0; i < squares; i++) {
         const column = Math.floor(i / rowSquareCount);
         const row = i % rowSquareCount;

         if (column > gridGeneration.length - 1) gridGeneration.push([]);
         gridGeneration[column].push({
            position: [column, row],
            clicked: false,
         });
      }
      setGridMap(gridGeneration);
   }, [dimensions]);

   return (
      <>
         <SimpleGrid
            py={6}
            width={dimensions.width}
            columns={dimensions.width / squareSide}
            mx="auto"
         >
            {gridMap.map((row) =>
               row.map((squareData) => (
                  <Square
                     key={squareData.position}
                     data={squareData}
                     squareSide={40}
                     toggleSquare={toggleSquare}
                  />
               ))
            )}
         </SimpleGrid>
         <button onClick={solveMaze}>Solve</button>
      </>
   );
};

export default Grid;
