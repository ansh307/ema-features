import Cta from "@/components/Insights-page/Cta";
import Hero from "@/components/Insights-page/Hero";
import ImageContainer from "@/components/Insights-page/ImageContainer";
import WhatSection from "@/components/Insights-page/WhatSection";

const Home = () => {
  return (
    <main>
      <Hero />
      <WhatSection />
      <ImageContainer />
      <Cta />
    </main>
  );
};

export default Home;
