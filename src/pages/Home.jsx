import {
  Hero,
  Banner,
  Prices,
  Testimonials,
  Video,
  Brands,
  Shop,
  Socials
} from "../components";


const Home = () => {
  return (
    <>
      <Hero />
      <Banner />
      <Prices />
      {/* <Testimonials /> */}
      <Video />
      <Brands />
      <Shop />
      <Socials />
    </>
  );
};

export default Home;
