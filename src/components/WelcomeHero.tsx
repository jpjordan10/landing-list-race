import WelcomeHeroForm from "./WelcomeHeroForm";

const WelcomeHero = () => (
  <section id="home" className="flex w-full justify-center">
    <div className="w-full relative h-[50rem] z-[1] bg-center bg-cover text-center bg-hero-image 2xl:w-10/12">
      <div className="absolute -z-[1] w-full h-full bg-custom-gray" />
      <div className="flex flex-col items-center gap-20 mx-auto px-4 pt-36">
        <div className="flex flex-col gap-4">
          <h2 className="animate-fadeInUp text-2xl md:text-[2.5rem] xl:text-5xl text-white font-bold tracking-[2.4px] leading-tight uppercase">
            Best place to find and explore
            <br />
            that all you need
          </h2>
          <p className="text-lg text-white animate-fadeInUp">
            Find Best Place, Restaurant, Hotel, Real Estate and many more things
            in just One click
          </p>
        </div>
        <WelcomeHeroForm />
      </div>
    </div>
  </section>
);

export default WelcomeHero;
