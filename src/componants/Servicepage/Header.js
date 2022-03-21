import Image from "next/image";
import Video from "./video";
export default function Servicehero() {
  return (
    <section class="relative">
      <div class="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-30">
        <Image src="/NICHE EDITS.JPG" width={1000} height={300} />
      </div>

      <div class="relative z-20 px-4 py-24 mx-auto text-center text-white max-w-7xl lg:py-32">
        <div class="flex flex-wrap text-white">
          <div class="relative w-full px-4 mx-auto text-center xl:flex-grow-0 xl:flex-shrink-0">
            <h1 class="mt-0 mb-2 text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
              Search Directory
            </h1>
            <p class="mt-0 mb-4 text-base text-white sm:text-lg lg:text-xl">
              Find the best places to eat, drink, and shop nearest to you.
            </p>
          </div>
        </div>
      </div>

      <div class="content-center relative z-30 h-48 px-10 body-dark lg:h-32">
        <Video />
      </div>
    </section>
  );
}

// <div class="relative w-full px-4 mx-auto text-center xl:flex-grow-0 xl:flex-shrink-0">
//   <h1 class="mt-0 mb-2 text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
//     Search Directory
//   </h1>
//   <p class="mt-0 mb-4 text-base text-white sm:text-lg lg:text-xl">
//     Find the best places to eat, drink, and shop nearest to you.
//   </p>
// </div>;
