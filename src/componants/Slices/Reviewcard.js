export default function Reviewcard({ stars, title, Review, Name }) {
  return (
    <div className="w-full max-w-sm mx-10 px-4  mx-auto bg-body-dark rounded-md shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-body-dark dark:text-gray-400">
          Our reviews
        </span>
        <span className="test px-3 py-1 text-xs  text-black uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
          {stars} stars
        </span>
      </div>

      <div>
        <h1 className="mt-2 text-lg font-semibold text-white dark:text-white">
          {title}
        </h1>
        <p className="mt-2 text-sm text-white dark:text-gray-300">{Review}</p>
      </div>

      <div>
        <div className="flex items-center mt-2 " />
        <span className="text-white">{Name}</span>
      </div>
    </div>
  );
}
