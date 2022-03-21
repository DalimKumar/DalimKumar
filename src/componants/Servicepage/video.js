import Container from "../container";
// import Image from "nex/image";

export default function video() {
  return (
    <div class="    max-w-4xl mx-auto   w-full  rounded-lg cursor-pointer   ">
      <div className="relative group">
        <div className="absolute group-hover:opacity-100 group-hover:duration-300 transition duration-1000   opacity-75   -inset-0.5     bg-gradient-to-br from-pink-600  to-purple-600 rounded-lg blur-xl"></div>

        <div className="relative max-w-7xl mx-auto">
          <span>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/SXiXQ7zdvgc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </span>
        </div>
      </div>
    </div>
  );
}
