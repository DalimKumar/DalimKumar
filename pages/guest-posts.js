import { motion } from "framer-motion";
import GuestFAQ from "../src/componants/Servicepage/Guestposts/GuestpostsFAQ's";
import Bcomp1 from "../src/componants/Blog/Blogcomp1";

import { BLOG_COMP } from "../lib/wordpress/api";
import client from "../lib/apollo";
//import MyRangeGuest from "../src/componants/Servicepage/Guestposts/PricesliderGuest";
// import { PricingHero } from "../src/componants/Servicepage/Priceslider";
import Container from "../src/componants/container";

export default function Guest({ posts }) {
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
          <div className="text-6xl  text-center  sm:text-5xl sm:text-6xl md:text-7xl sm:text-center md:text-center ">
            <Container>
              <div className="container pt-16 mx-auto text-left md:text-center">
                <div className="relative max-w-4xl mx-auto ">
                  <h1 className="pb-5 text-5xl font-extrabold text-center  sm:text-5xl sm:text-6xl md:text-7xl sm:text-center md:text-center">
                    Our Prices For Individualy Sourced
                  </h1>
                  <h1 className="pb-5 text-5xl font-extrabold text-center text-transparent sm:text-5xl sm:text-6xl md:text-7xl sm:text-center md:text-center bg-clip-text bg-gradient-to-br from-[#1CDEA1] via-[#069BB3] to-[#0468C8]">
                    Guest Posts
                  </h1>

                  <p className="mt-8 text-sm text-left text-white sm:text-base md:text-lg md:max-w-xl md:text-center md:mx-auto">
                    Guest posts are a fantastic way to expose your brand to a
                    whole new audience by securing backlinks on incredibly
                    relevant, authoritative domains.
                    <br /> <br /> More specifically, they enable us to tap into
                    a domain’s audience by strategically placing relevant,
                    high-quality content that captures a reader’s attention and,
                    ultimately, draws them back through to your site. Crucially,
                    this also helps domain authority and ‘link juice’ to flow
                    back into your domain, thus increasing its authority
                    further.
                    <br /> <br /> Our host domains have an average domain rating
                    of 60+ and 100+ organic visitors on the page that contains
                    your link.
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </motion.div>

        <div className="flex flex-wrap p-10">
          <div className="w-full  xl:w-1/4"></div>

          <div className="w-full  xl:w-1/2"></div>

          <div className="w-full  xl:w-1/4"></div>
        </div>
      </section>

      <div className="bg-body-dark py-10">
        <GuestFAQ />
      </div>
      <div className="py-10">
        <h3 className="flex content-center  justify-center  pb-5 text-5xl font-extrabold  text-transparent sm:text-5xl sm:text-6xl md:text-7xl  bg-clip-text bg-gradient-to-br from-[#1CDEA1] via-[#069BB3] to-[#0468C8]">
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

//  <Video />

//     <div className="relative max-w-7xl mx-auto">
//       <Bcomp1 posts={post} />
//     </div>
