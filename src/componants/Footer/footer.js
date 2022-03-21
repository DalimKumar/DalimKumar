import Link from "next/link";

const Footer = () => {
  return (
    <section className="py-10 bg-body-dark">
      <div className="px-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <a
            href=""
            className="flex items-center justify-center w-10 h-10 mr-3 rounded-lg mb-7"
          >
            <img src="..\LinkLogo.png" width={150} height={100} />
          </a>

          <div className="flex flex-row justify-center mb-4 -ml-4 -mr-4">
            {" "}
            <a
              href="https://www.facebook.com/linkcityseo"
              className="p-4 text-gray-700 hover:text-gray-400"
            >
              {" "}
              <svg
                className="fill-current"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"></path>
              </svg>{" "}
            </a>{" "}
            <a
              href="https://twitter.com/LinkCityco"
              className="p-4 text-gray-700 hover:text-gray-400"
            >
              {" "}
              <svg
                className="fill-current"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"></path>
              </svg>{" "}
            </a>{" "}
          </div>
        </div>
        <div className="flex flex-col justify-between text-center md:flex-row">
          <ul className="flex flex-row justify-center pb-3 -ml-4 -mr-4 text-sm">
            <li className="px-2 text-white">
              <Link href="/linkculding-packages" passHref>
                Services
              </Link>
            </li>
            <li className="text-white">
              <Link href="/NicheEdits" passHref>
                NicheEdits
              </Link>
            </li>
            <li className="px-2 text-white">
              <Link href="/guest-posts" passHref>
                GuestPosts
              </Link>
            </li>
            <li className=" text-white">
              <Link href="/Contact" passHref>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
