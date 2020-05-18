import Head from "next/head";

import Footer from "../components/Footer";
import Grid from "../components/visualizer/Grid";

import GlobalStyle, { CSSReset } from "../style/GlobalStyle";

const Home = () => (
   <>
      <Head>
         <title>Pathfinder Visualized</title>
         <link rel="icon" href="/favicon.ico" />
      </Head>

      <CSSReset />
      <GlobalStyle />

      <main>
         <Grid />
      </main>

      <Footer />
   </>
);

export default Home;
