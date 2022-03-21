// import Video from "../src/componants/Servicepage/video";

import { motion } from "framer-motion";
import MyRange from "../src/componants/Servicepage/NicheEdits/Priceslider";
import Container from "../src/componants/container";
import Bcomp1 from "../src/componants/Blog/Blogcomp1";
import { BLOG_COMP } from "../lib/wordpress/api";
import client from "../lib/apollo";
import FAQ from "../src/componants/Servicepage/NicheEdits/NicheFAQ's";
import Nicheproductpackages from "../src/componants/Servicepage/NicheEdits/Nichecards";

export default function nicheedits({ posts }) {
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
                  Our Prices For Individualy Sourced{" "}
                </h1>
                <h1 className="pb-5 text-5xl font-extrabold text-center text-transparent sm:text-5xl sm:text-6xl md:text-7xl sm:text-center md:text-center bg-clip-text bg-gradient-to-br from-[#F6AD5A] via-[#D54B58] to-[#D0246D]">
                  Niche Edits
                </h1>

                <p className="mt-8 text-sm text-left text-white sm:text-base md:text-lg md:max-w-xl md:text-center md:mx-auto">
                  Niche edits are a fantastic way of placing your content into
                  well-established domains in order to share in their authority.
                  At Link City, we secure our niche edits via means of personal
                  outreach, relationship building and, most importantly, content
                  fit.
                  <br />
                  <br /> With that in mind, utilising collective decades of
                  experience and skill, our experts will work to establish the
                  most authoritative and valuable domains in your niche before
                  constructing relevant, insightful, high-quality niche edits to
                  share with them.
                  <br />
                  <br /> In turn, these increasingly high standards ensure that
                  each niche edit draws the optimal amount of authority and
                  value back into your domain
                </p>
              </div>
            </div>
          </Container>
        </motion.div>
        <Container>
          <div className="flex content-center justify-center "></div>
        </Container>
        <div className="flex flex-wrap p-10">
          <div className="w-full  xl:w-1/4"></div>

          <div className="w-full  xl:w-1/2">
            <Nicheproductpackages />
            <MyRange />
          </div>

          <div className="w-full  xl:w-1/4"></div>
        </div>
      </section>

      <div className="bg-body-dark py-10">
        <FAQ />
      </div>
      <div className="py-10">
        <Container>
          <h3 className="flex content-center  justify-center  pb-5 text-5xl font-extrabold  text-transparent sm:text-5xl sm:text-6xl md:text-7xl  bg-clip-text bg-gradient-to-br from-[#F6AD5A] via-[#D54B58] to-[#D0246D]">
            Keep Upto date
          </h3>
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
