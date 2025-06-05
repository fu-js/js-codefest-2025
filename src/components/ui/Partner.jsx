import React from "react";

export default function Partner() {
  return (
    <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 justify-center items-center lg:items-start py-20 mb-6">
      <div className="flex flex-col items-center gap-y-10 drop-shadow-xl drop-shadow-[#00000067]">
        <div className="animate-bounce-linear bg-white size-36 lg:size-48 rounded-full flex flex-col items-center justify-center">
          <div className="-translate-y-8 w-64 lg:w-74 aspect-square object-center bg-center bg-[url('/framee.webp')] bg-cover flex flex-col items-center">
            <img src="/fpt.png" className="lg:w-32 w-24 lg:translate-y-36 translate-y-32" />
          </div>
        </div>
        <span className="font-bold font-HP uppercase lg:text-2xl text-xl text-center">
          Đại học FPT <br /> Hà Nội
        </span>
      </div>
      <div className="flex flex-col items-center gap-y-10 drop-shadow-xl drop-shadow-[#00000067]">
        <div className="animate-bounce-linear bg-white size-36 lg:size-48 rounded-full flex flex-col items-center justify-center">
          <div className="-translate-y-8 w-64 lg:w-74 aspect-square object-center bg-center bg-[url('/framee.webp')] bg-cover flex flex-col items-center">
            <img src="/icpdp.png" className="lg:w-32 w-24 lg:translate-y-40 translate-y-36" />
          </div>
        </div>
        <span className="font-bold font-HP uppercase lg:text-2xl text-xl text-center">
          Phòng Hợp tác Quốc tế & <br /> Phát triển Cá nhân ICPDP FPTU
        </span>
      </div>
    </div>
  );
}
