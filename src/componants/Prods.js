import { motion } from "framer-motion";

import Link from "next/link";
import Image from "next/image";

export default function Products({
  img,
  url,
  description,

  price,
}) {
  const text = description;

  return (
    <div className="rounded-xl bg-black rounded-xl bg-opacity-25 space-between  h-50 m-2">
      <motion.div className="  flex justify-center flex items-center">
        <Link href={url} passHref>
          <Image ahref={url} src={img} width={500} height={250} />
        </Link>
      </motion.div>

      <div className="relative py-4  flex justify-content justify-center jusitfy-content-center font-bold p-2 text-white text-4xl text-bold  ">
        <p className="text-sm">from</p>£{price}
      </div>
      <div className="h-full">
        <p className=" p-3 overflow-hidden">{text}</p>
        <div className=" flex justify-center content-center"></div>
      </div>
    </div>
  );
}

{
  /* <div className="rounded-xl bg-black rounded-xl bg-opacity-25 space-between  h-50 m-2">
      <motion.div className=" border-4 flex justify-center flex items-center">
        <motion.h1
          layoutId="title"
          className="absolute z-10 font-xl font-bold "
        >
          hello
        </motion.h1>

        <Link href={url}>
          <Image ahref={url} src={img} width={500} height={250} />
        </Link>
      </motion.div>
      <p className="p-2">{description}</p>
    </div>
  );
} */
}
