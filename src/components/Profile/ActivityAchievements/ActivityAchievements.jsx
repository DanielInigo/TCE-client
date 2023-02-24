import Pie from "../pie";

const ActivityAchievements = () => {
  var arr = [
    "Won First prize on Smart TCE Hackathon",
    "Won Third on Apti Killer",
    "Won Second prize on Ideathon",
    "Won Third prize on Logic Cracker",
  ];

  return (
    <div className="mt-10 flex flex-col justify-between">
      <div className="items-center bg-gray-600 rounded-lg border shadow-md md:flex-row md:max-w-xl h-[410px] w-[600px]">
        <h5 className="mb-3 mt-2 text-4xl text-center font-bold tracking-tight dark:text-white">
          Activity
        </h5>
        <Pie className="" />
      </div>
      <div className="relative bottom-[3rem] items-center bg-gray-600 rounded-lg border shadow-md md:flex-row md:max-w-xl h-[370px] w-[600px]">
        <h5 className="mb-3 mt-2 text-4xl text-center font-bold tracking-tight dark:text-white">
          Achievements
        </h5>
        <div className="my-5 ml-5 text-xl tracking-tight dark:text-white">
          {arr.map((element, index) => {
            return <li className="mt-3" key={index}>{element}</li>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ActivityAchievements;
