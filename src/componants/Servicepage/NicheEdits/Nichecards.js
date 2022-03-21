import { motion } from "framer-motion";
import Image from "next/image";
import { myContext } from "../../../../Context/Context";
export default function Nicheproductpackages() {
  const { value, setState, cardArray } = myContext();

  return (
    <div className="flex py-3 m-2 mt-12 lg:grid-cols-3 lg:max-w-none">
      {cardArray.map((el, i) => (
        <div
          className="rounded-xl bg-black rounded-xl bg-opacity-25 space-between  h-50 m-2"
          key={i}
        >
          <motion.div className="  flex justify-center flex items-center">
            <button onClick={() => setState([el.click])}>
              <Image src={el.img} width={500} height={250} />
            </button>
          </motion.div>

          <div className="relative py-4  flex justify-content justify-center jusitfy-content-center font-bold p-2 text-white text-4xl text-bold  "></div>
          <div className="h-full">
            <p className=" p-3 overflow-hidden"> </p>
            <div className=" flex justify-center content-center"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
