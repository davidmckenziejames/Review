import { Meteors } from "./meteors";

export default function CTA() {
  return (
    <>
      <div className="xs:w-full md:w-2/3 relative mt-[20px] shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
        <h1 className="font-bold text-2xl text-white mb-4 relative z-50">
          Save time & make more money
        </h1>

        <p className="font-normal  w-3/4 text-base text-center text-white mb-4 relative z-50">
          Reduce overhead, ramp up revenue and provide a superior guest
          experience with VIPFLOW’s innovative online reservation system.
        </p>

        <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/90 px-5 py-3 text-40 font-medium text-white backdrop-blur-3xl">
            REQUEST ACCESS
          </div>
        </span>
        {/* Meaty part - Meteor effect */}
        <Meteors number={20} />
      </div>
    </>
  );
}
