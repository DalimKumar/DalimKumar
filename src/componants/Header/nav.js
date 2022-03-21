import MyLink from "../MyLink";
import Buttonurl from "../Buttonurl";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
// import { motion } from "framer-motion";

export default function Nav() {
  const router = useRouter;

  const [active, setActive] = useState(false);

  return (
    <div>
      <nav className="relative flex  items-center bg-body-dark">
        <div className="basis-1/3">
          <div className="flex justify-end p-3 ">
            <a href="/">
              <img src="/LinkLogo.png" height={150} width={150} />
            </a>
          </div>
        </div>

        <div className=" flex basis-1/3 p-3 justify-center ">
          <MyLink href="/linkbuilding-packages" passHref>
            <div className=" group inline-block relative text-white text-xl font-Roboto font-bold hidden sm:block bg-clip-text  transition-colours duration-150 hover:bg-gradient-to-br from-logo-pink via-fuscia-800 to-purple-600 hover:text-transparent">
              <button className="  inline-flex items-center">
                <span className="text-white text-xl font-Roboto font-bold  hidden sm:block bg-clip-text  transition-colours duration-150 hover:bg-gradient-to-br from-purple-600 via-fuscia-800 to-pink-500 hover:text-transparent">
                  Packages
                </span>
              </button>
              <ul className="text-sm absolute hidden text-white pt-1 text-m group-hover:block ">
                <li className="bg-clip-text  transition-colours duration-150 hover:bg-gradient-to-br from-purple-600 via-fuscia-800 to-pink-500 hover:text-transparent">
                  <div>
                    <Link
                      href="/NicheEdits"
                      passHref
                      className="  relative tesxt-sm text-white block whitespace-no-wrap sm:block bg-clip-text  transition-colours duration-150 hover:bg-gradient-to-br from-purple-600 via-fuscia-800 to-pink-500 hover:text-transparent"
                    >
                      Niche Edits
                    </Link>
                  </div>
                </li>
                <li className="bg-clip-text  transition-colours duration-150 hover:bg-gradient-to-br from-purple-600 via-fuscia-800 to-pink-500 hover:text-transparent">
                  <div>
                    <Link
                      href="/guest-posts"
                      passHref
                      className="text-xsm text-white block whitespace-no-wrap sm:block
                    bg-clip-text  transition-colours
                    duration-150 hover:bg-gradient-to-br from-purple-600
                    via-fuscia-800 to-pink-500 hover:text-transparent"
                    >
                      Guest posts
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </MyLink>

          <MyLink href="/Contact" passHref>
            <div className="px-3 text-white text-xl font-Roboto font-bold   hidden sm:block bg-clip-text  transition-colours duration-150 hover:bg-gradient-to-br from-purple-600 via-fuscia-800 to-pink-500 hover:text-transparent">
              <a>Contact</a>
            </div>
          </MyLink>
          <MyLink href="/blog" passHref>
            <div className="text-white text-xl font-Roboto font-bold  hidden sm:block bg-clip-text  transition-colours duration-150 hover:bg-gradient-to-br from-purple-600 via-fuscia-800 to-pink-500 hover:text-transparent">
              <a>Blog</a>
            </div>
          </MyLink>
        </div>

        <div className=" flex basis-1/3 p-3 justify-start ">
          <Buttonurl href="https://linkcity.spp.io/login/portal">
            <div className="test px-3 text-white text-xl font-Roboto font-bold hidden sm:block ">
              <a>Buy Now</a>
            </div>
          </Buttonurl>
          <MyLink
            href="https://linkcity.spp.io/login/portal
            passHref"
          >
            <div className="text-white font-Roboto  hidden sm:block bg-clip-text  transition-colours duration-150 hover:bg-gradient-to-br from-purple-600 via-fuscia-800 to-pink-500 hover:text-transparent"></div>
          </MyLink>
        </div>

        <div className="md:hidden sm:hidden flex items-center pr-10">
          <button
            id="btnnav"
            className="flex flex-end "
            onClick={() => setActive((state) => !active)}
          >
            <svg
              id="burger"
              className="w-6 h-6 text-gray-500"
              x-show="!showMenu"
              fill="#AB7C94"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
      <div className={`${active ? "" : "hidden"}`}>
        <div className="absolute bg-body-dark w-full h-full mt-10  z-20 flex justify-center content-center md:hidden lg:hidden  ">
          <div className=" ">
            <Link
              href="/linkbuilding-packages"
              onClick={() => setActive((state) => !active)}
              passHref
            >
              <div className="px-3 py-3 text-white text-3xl font-Roboto font-bold ">
                <a onClick={() => setActive((state) => !active)}>Packages</a>
              </div>
            </Link>
            <Link
              href="/NicheEdits"
              onClick={() => setActive((state) => !active)}
              passHref
            >
              <div className="px-3 py-3 text-white text-3xl font-Roboto font-bold ">
                <a onClick={() => setActive((state) => !active)}>Niche Edits</a>
              </div>
            </Link>
            <Link
              href="/guest-posts"
              onClick={() => setActive((state) => !active)}
              passHref
            >
              <div className="px-3 py-3 text-white text-3xl font-Roboto font-bold ">
                <a onClick={() => setActive((state) => !active)}>Guest posts</a>
              </div>
            </Link>

            <Link href="/Contact" passHref>
              <div className="px-3 py-3 text-white text-3xl font-Roboto font-bold">
                <a onClick={() => setActive((state) => !active)}>Contact</a>
              </div>
            </Link>
            <Link href="/blog" passHref>
              <div className="px-3 py-3 text-white text-3xl font-Roboto font-bold">
                <a onClick={() => setActive((state) => !active)}>Blog</a>
              </div>
            </Link>
            <br></br>
            <Link href="https://linkcity.spp.io/login/portalblog" passHref>
              <div className="test px-3 py-1 text-white text-3xl font-Roboto font-bold">
                Buy now
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

//{
// [...Array(5)].map((_, i) => );
// }
