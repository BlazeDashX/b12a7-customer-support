import leftImg from "../assets/vector1.png";

const Hero = ({taskInProgress,resolveTask}) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 pt-5 md:pt-15">
      <div className="relative py-10 md:py-0 h-48 md:h-64 flex-1 overflow-hidden rounded-xl bg-linear-to-r from-[#7038E0] to-[#9F5CF0]">

        <img
          src={leftImg}
          alt=""
          className="absolute left-0 top-0 w-1/2 md:w-3/7 h-full "
        />

        <img
          src={leftImg}
          alt=""
          className="absolute right-0 bottom-0 w-1/2 md:w-3/7 h-full scale-x-[-1]"
        />

        <div className="relative z-10 flex h-full flex-col items-center justify-center ">
          <h1 className="text-xl md:text-2xl font-bold text-white">
            In-Progress
          </h1>

          <span className="text-4xl md:text-6xl font-bold text-white">
            {taskInProgress?.length}
          </span>
        </div>
      </div>

        <div className="relative py-10 md:py-0 h-48 md:h-64 flex-1 overflow-hidden rounded-xl bg-linear-to-r from-[#56D067] to-[#0D8372]">

        <img
          src={leftImg}
          alt=""
          className="absolute left-0 top-0 w-1/2 md:w-3/7 h-full "
        />

        <img
          src={leftImg}
          alt=""
          className="absolute right-0 bottom-0 w-1/2 md:w-3/7 h-full scale-x-[-1]"
        />

        <div className="relative z-10 flex h-full flex-col items-center justify-center ">
          <h1 className="text-xl md:text-2xl font-bold text-white">
            Resolved
          </h1>

          <span className="text-4xl md:text-6xl font-bold text-white">
            {resolveTask?.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;