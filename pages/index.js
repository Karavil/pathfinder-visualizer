import Head from "next/head";

import Footer from "../components/Footer";
import Grid from "../components/visualizer/Grid";

import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import styled from "styled-components";

import GlobalStyle from "../style/GlobalStyle";
import theme from "../style/theme/theme";

const MainPage = styled.main`
   display: flex;
   flex-direction: column;

   width: 100%;
   height: 100vh;

   position: absolute;
   z-index: 1;
`;

const Home = () => (
   <ThemeProvider theme={theme}>
      <Head>
         <title>Pathfinder Visualized</title>
         <link rel="icon" href="/favicon.ico" />
         <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
            rel="stylesheet"
         />
      </Head>

      <CSSReset />
      <GlobalStyle />

      <Grid backgroundColor={theme.colors.primary} />
      <MainPage>
         <Footer />
      </MainPage>
   </ThemeProvider>
);

export default Home;
