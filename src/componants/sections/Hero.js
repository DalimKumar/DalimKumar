import Link from "next/link";
import Container from "../container";
const Hero = () => {
  return (
    <Container>
      <div class="container pt-9 mx-auto text-left md:text-center">
        <div class="relative max-w-4xl mx-auto ">
          <h1 className="pb-5 text-5xl font-extrabold text-center  sm:text-5xl sm:text-6xl md:text-7xl sm:text-center md:text-center">
            Individualy Sourced Quality Backlinks{" "}
          </h1>
          <h2 class="pb-5 text-5xl font-extrabold text-center text-transparent sm:text-5xl sm:text-6xl md:text-7xl sm:text-center md:text-center bg-clip-text bg-gradient-to-br from-logo-pink via-fuscia-800 to-purple-600">
            Links Built The Right Way
          </h2>

          <p class=" text-center   flex mt-8 text-sm text-left text-white sm:text-base md:text-lg md:max-w-xl md:text-center md:mx-auto">
            A UK-based link building agency that delivers affordable,
            high-quality links that get that needle moving!
          </p>
          <Link href="/linkbuilding-packages" passhref>
            <button className="btn absolute blur bg-red-300 w-full px-12 py-5 mt-8 text-xl rounded font-semibold leading-5 text-center text-white capitalize bg-gray-900 md:w-auto hover:bg-gray-800 focus:outline-none focus:bg-gray-800 rounded-xl md:mx-0">
              Increase My rankings!
            </button>
          </Link>
          <Link href="/linkbuilding-packages" passhref>
            <button className="relative w-full px-12 py-5 mt-8 text-xl font-semibold leading-5 text-center text-white capitalize bg-gray-900 md:w-auto hover:bg-gray-800 focus:outline-none focus:bg-gray-800 md:mx-0 rounded-xl">
              Increase My rankings
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
