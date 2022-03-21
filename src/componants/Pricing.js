import Link from "next/link";
export default function Pricing() {
  return (
    <section className="py-12 md:py-20 lg:py-32 bg-gradient-to-b from-bg-body-dark to-black">
      <div className="max-w-7xl mx-auto pl-10 pr-10 md:pr-0 md:pl-10">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/3 px-3 mb-10 lg:mb-0 pr-5 xl:pl-6 lg:pr-0">
            <span className="text-xs text-gray-400 font-semibold tacking-widest uppercase">
              Complete packages and individual links
            </span>
            <h2 className="mt-5 lg:mt-8 mb-6 lg:mb-10 text-5xl xl:text-6xl 2xl:text-7xl font-normal text-white tracking-tight">
              <span className="font-black block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-400 pb-2 to-blue-500">
                Lets keep
              </span>
              it simple.
            </h2>
            <p className="text-lg text-gray-300">
              Complete link building packages starting from $5000. Know what
              you’re after? View our niche edits and guest posting services.
            </p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 md:pl-4 xl:pl-10 md:pr-0 md:pb-0 pb-12">
            <div className="bg-gray-900 rounded-xl p-0.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-400 shadow-xl overflow-hidden">
              <div className="pt-12 pb-8 px-8 bg-gradient-to-b from-gray-900 to-black rounded-xl lg:text-center">
                <h3 className="mb-6 font-semibold text-gray-300">
                  Our complete link building package from
                </h3>
                <div className="flex lg:justify-center border-b border-gray-700 pb-10 mb-8">
                  <span className="self-start inline-block mr-1 text-xl font-semibold text-gray-300">
                    $
                  </span>
                  <p className="self-end text-5xl font-semibold text-white">
                    5,000
                  </p>
                </div>
                <ul className="mb-6 text-left">
                  <li className="flex items-center py-3">
                    <svg
                      className="w-6 h-6 text-green-400 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p className="font-medium text-white">10% PBNS</p>
                  </li>
                  <li className="flex items-center py-3">
                    <svg
                      className="w-6 h-6 text-green-400 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p className="font-medium text-white">20% Digital PR</p>
                  </li>
                  <li className="flex items-center py-3">
                    <svg
                      className="w-6 h-6 text-green-400 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p className="font-medium text-white">30% Niche Edits</p>
                  </li>
                  <li className="flex items-center py-3">
                    <svg
                      className="w-6 h-6 text-green-400 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p className="font-medium text-white">40% Guest Posts</p>
                  </li>
                  <li className="flex items-center py-3 mb-8">
                    <svg
                      className="w-6 h-6 text-green-400 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p className="font-medium text-white">
                      Tailored Quality Link Building
                    </p>
                  </li>
                </ul>
              </div>
              <Link href="linkbuilding-packages" passHref>
                <a
                  className="block py-5 text-center text-white font-bold leading-normal bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-400 rounded-b-xl border-gray-900 transition duration-200"
                  href=""
                >
                  Link Building Packages
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 md:pr-10 pl-0 md:pr-12 xl:pr-16">
            <div className="p-0.5 md:pl-0 bg-blue-400 rounded-xl md:rounded-l-none shadow-xl overflow-hidden">
              <div className="pt-12 pb-8 bg-gradient-to-b rounded-xl md:rounded-l-none from-gray-900 via-gray-900 to-black px-8 lg:text-center">
                <h3 className="mb-6 font-semibold text-gray-200">
                  Niche edits and guest posts from
                </h3>
                <div className="flex lg:justify-center border-b border-gray-700 text-white pb-10 mb-8">
                  <span className="self-start inline-block mr-1 text-xl font-semibold text-gray-300">
                    $
                  </span>
                  <p className="self-end text-5xl font-semibold">125</p>
                </div>
                <ul className="mb-6 text-left">
                  <li className="flex items-center py-3">
                    <svg
                      className="w-6 h-6 text-green-400 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p className="font-medium text-white">
                      100% Genuine Outreach
                    </p>
                  </li>
                  <li className="flex items-center py-3">
                    <svg
                      className="w-6 h-6 text-green-400 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p className="font-medium text-white">
                      Includes 500 Word Blog Post
                    </p>
                  </li>
                  <li className="flex items-center py-3">
                    <svg
                      className="w-6 h-6 text-green-400 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p className="font-medium text-white">
                      1 Anchor Text/Target URL
                    </p>
                  </li>
                  <li className="flex items-center py-3">
                    <svg
                      className="w-6 h-6 text-green-400 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p className="font-medium text-white">
                      Personal Campaign Manager
                    </p>
                  </li>
                </ul>
              </div>
              <Link href="/NicheEdits" passhref>
                <a
                  className="block py-5 text-center text-bold text-white font-medium leading-normal bg-blue-400 transition duration-200"
                  href="#"
                >
                  View our impact services!
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
