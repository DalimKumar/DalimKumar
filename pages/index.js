import Hero from "../src/componants/sections/Hero";
import Bcomp1 from "../src/componants/Blog/Blogcomp1";
import { BLOG_COMP, REVIEWS } from "../lib/wordpress/api";
import client from "../lib/apollo";
// import fetcher from "../lib/wordpress/fetcher";
import Pricing from "../src/componants/Pricing";
import Productcard from "../src/componants/Prodcard";
import Video from "../src/componants/Servicepage/video";
import Reviews from "../src/componants/Slices/ReviewCarousel";
import Container from "../src/componants/container";
import Image from "next/image";
import CTA from "../src/componants/CTA";
import FAQ from "../src/componants/FAQ's";

// import { gql } from "@apollo/client";
// import Productcard from "../src/componants/Prodcard";
export default function Home({ posts, customerreview }) {
  const post = posts;

  return (
    <div className="bg-body-dark ">
      <section id="home" className="bg-body-dark">
        <Hero />
      </section>
      <div className="mt-8 py-12">
        <Reviews reviews={customerreview} />
      </div>
      <div className="py-12">
        <Container className="">
          <div className=" relative flex align-center ">
            <div className="rotate-90 py-14 pr-8 opacity-10 absolute align-center">
              <Image src="/LinkLogo.png" height={300} width={450} alt="Logo" />
            </div>

            <Video />
          </div>
        </Container>
      </div>
      <Container className="">
        <Productcard className="py-8" />
      </Container>
      <CTA />

      <Pricing />
      <FAQ />

      <div className="relative max-w-7xl mx-auto">
        <h4 className="flex content-center  justify-center  pb-5 text-5xl font-extrabold  text-transparent sm:text-5xl sm:text-6xl md:text-7xl  bg-clip-text bg-gradient-to-br from-[#1CDEA1] via-[#069BB3] to-[#0468C8]">
          Keep Upto date
        </h4>
        <Container>
          <Bcomp1 posts={post} />
        </Container>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const { data: post } = await client.query({
    query: BLOG_COMP,
  });

  const { data: review } = await client.query({
    query: REVIEWS,
  });

  return {
    props: {
      posts: post.posts.nodes,
      customerreview: review.reviews.nodes,
    },
  };
}
