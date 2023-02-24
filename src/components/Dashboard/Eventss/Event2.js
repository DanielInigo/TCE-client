import Gif2 from "../../../images/apti.gif";

function Event2() {
  return (
    <div>
      <a
        href="/dashboard"
        className="flex flex-col mb-5 items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 hover:scale-105"
      >
        <img
          className="object-cover w-full h-full rounded-t-lg md:h-40 md:w-40 md:rounded-none md:rounded-l-lg"
          src={Gif2}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Apti Killer CSEA
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here is a day with Aptitude. Dont miss the opportunity
          </p>
        </div>
        <div className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Register
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </a>
    </div>
  );
}
export default Event2;
