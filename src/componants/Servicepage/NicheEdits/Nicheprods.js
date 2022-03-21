import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { myContext } from "../../../../Context/Context";

export default function NicheProductCard({ img, click }) {
  // const [Selected, setSelected] = useState(0);
  // console.log({ Selected });
  const { value, setState } = myContext();
  console.log(img);

  return (
    <div className="rounded-xl bg-black rounded-xl bg-opacity-25 space-between  h-50 m-2">
      <motion.div className="  flex justify-center flex items-center">
        <button onClick={() => setState([2])}>
          <Image src={img} width={500} height={250} />
        </button>
      </motion.div>

      <div className="relative py-4  flex justify-content justify-center jusitfy-content-center font-bold p-2 text-white text-4xl text-bold  "></div>
      <div className="h-full">
        <p className=" p-3 overflow-hidden"> </p>
        <div className=" flex justify-center content-center"></div>
      </div>
    </div>
  );
}
