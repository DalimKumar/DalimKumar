// import Video from "../src/componants/Servicepage/video";
//  import Image from "next/image";
import Container from "../src/componants/container";
import { motion } from "framer-motion";
export default function Pr() {
  return (
    <div className="bg-body-dark h-full">
      <section className="w-full h-full bg-body-dark">
        <motion.div
          initial="pageInitial"
          exit={{ opacity: 0 }}
          animate="pageAnimate"
          className="py-11 flex justify-center text-white"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
        >
          <div className="text-6xl h-full text-center  sm:text-5xl sm:text-6xl md:text-7xl sm:text-center md:text-center ">
            <Container>
              <div className="container pt-16 mx-auto text-left md:text-center">
                <div className="relative max-w-4xl mx-auto ">
                  <h1 className="pb-5 text-5xl font-extrabold text-center  sm:text-5xl sm:text-6xl md:text-7xl sm:text-center md:text-center">
                    Digital PR
                  </h1>
                  <h1 className="pb-5 text-5xl font-extrabold text-center text-transparent sm:text-5xl sm:text-6xl md:text-7xl sm:text-center md:text-center bg-clip-text bg-gradient-to-br from-[#1CDEA1] via-[#069BB3] to-[#0468C8]">
                    Coming Soon
                  </h1>

                  <p className="mt-8 text-sm text-left text-white sm:text-base md:text-lg md:max-w-xl md:text-center md:mx-auto">
                    Aligning your business values with a digital press release
                    strategy is a great way to connect with your audience by
                    translating your ethos into consumable media across relevant
                    social channels.
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
