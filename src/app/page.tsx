import Head from "next/head";
import Blog from "../components/Blog";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ListTopics from "../components/ListTopics";
import Reviews from "../components/Reviews";
import Statistics from "../components/Statistics";
import Subscription from "../components/Subscription";
import TopArea from "../components/TopArea";
import WelcomeHero from "../components/WelcomeHero";
import Works from "../components/Works";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Directory Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      {/* <TopArea /> */}
      {/* <WelcomeHero /> */}
      {/* <ListTopics /> */}
      <Works />
      <Explore />
      {/* <Reviews /> */}
      <Statistics />
      <Blog />
      <Subscription />
      <Footer />
    </div>
  );
};
export default Home;
