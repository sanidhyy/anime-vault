// Importing necessary dependencies
import Image from "next/image";

// Functional component representing the hero section of the application
function Hero() {
  return (
    // Header container with styling
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      {/* Left section containing logo and heading */}
      <div className="flex-1 flex flex-col gap-10">
        {/* Logo image */}
        <Image
          src="./logo.svg"
          alt="logo"
          width={101}
          height={96}
          className="object-contain"
        />
        {/* Main heading */}
        <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
          Explore The <span className="red-gradient">Diverse Realms</span> of
          Anime Magic
        </h1>
      </div>
      {/* Right section containing an anime image */}
      <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
        {/* Anime image */}
        <Image src="/anime.png" alt="anime" fill className="object-contain" />
      </div>
    </header>
  );
}

// Exporting the Hero component as the default export
export default Hero;
