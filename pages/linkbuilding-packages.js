import { motion } from "framer-motion";
import Container from "../src/componants/container";
// import Serviceslider from "../src/componants/Servicepage/Serviceindex.js/serviceslider";
import Bcomp1 from "../src/componants/Blog/Blogcomp1";

import { BLOG_COMP } from "../lib/wordpress/api";
import client from "../lib/apollo";
export default function Linkbuildingpackages({ posts }) {
  const post = posts;
  return (
    <div className="bg-body-dark">
      <section className="w-full bg-body-dark">
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
          <Container>
            <div className="container pt-16 mx-auto text-left md:text-center">
              <div className="relative max-w-4xl mx-auto ">
                <h1 className="pb-5 text-5xl font-extrabold text-center  sm:text-5xl sm:text-6xl md:text-7xl sm:text-center md:text-center">
                  Searching For A complete
                </h1>
                <h1 className="pb-5 text-5xl font-extrabold text-center text-transparent sm:text-5xl sm:text-6xl md:text-7xl sm:text-center md:text-center bg-clip-text bg-gradient-to-br from-logo-pink via-fuscia-800 to-purple-600">
                  link building solution?
                </h1>

                <p className="mt-8 text-sm text-left text-white sm:text-base md:text-lg md:max-w-xl md:text-center md:mx-auto">
                  Our bespoke link building campaigns are tailor-made to
                  optimise the impact of your backlinks and, crucially, your
                  ROI. <br />
                  As such, through a process refined by a team with collective
                  decades of link building experience and success, we structure
                  our link building campaigns across four verticles: niche
                  edits, guest posts, public blog networks and digital PR
                  <br />
                  <br />
                  Each vertical plays a critical role in the link building
                  process as our team places your brand, business and values at
                  the heart of every link they forge. The result is an entirely
                  unique link building service that is grounded in data-driven
                  strategy and tailored to your need, niche, product and
                  service.
                  <br />
                  <br />
                  Sound too good to be true? Well, see for yourself and check
                  out our results!
                </p>
              </div>
            </div>
          </Container>
        </motion.div>

        <div className="flex flex-wrap p-10">
          <div className="w-full  xl:w-1/4"></div>

          <div className="w-full  xl:w-1/2"></div>

          <div className="w-full  xl:w-1/4"></div>
        </div>
      </section>

      <div className="py-10">
        <h3 className="flex content-center  justify-center  pb-5 text-5xl font-extrabold  text-transparent sm:text-5xl sm:text-6xl md:text-7xl   bg-clip-text bg-gradient-to-br from-logo-pink via-fuscia-800 to-purple-600">
          Keep Upto date
        </h3>
        <Container>
          <Bcomp1 posts={post} />
        </Container>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const { data } = await client.query({
    query: BLOG_COMP,
  });

  return {
    props: {
      posts: data.posts.nodes,
    },
    revalidate: 1,
  };
}
