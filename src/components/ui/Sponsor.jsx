import React from "react";

const sponsors = [
  { img: "/prd.jpg", name: "Photo Razzle Dazzle" },
  { img: "/im.png", name: "IELTS Mentor" },
  { img: "/net.png", name: "NET English" },
  { img: "/quickom.png", name: "Quickom" },
];
export default function Sponsor({ img, name }) {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap gap-20 lg:gap-32 justify-center items-center mt-24 mb-32">
      {sponsors.map((sponsor) => (
        <div className="flex flex-col items-center gap-y-10 drop-shadow-xl drop-shadow-[#00000067]">
          <div className="animate-bounce-linear bg-white size-48 rounded-full flex flex-col items-center justify-center">
            <div className="-translate-y-8 w-80 aspect-square object-center bg-center bg-[url('/framee.webp')] bg-cover flex flex-col items-center">
              <img src={sponsor.img} className="w-24 translate-y-36" />
            </div>
          </div>
          <span className="font-bold font-HP uppercase text-2xl">{sponsor.name}</span>
        </div>
      ))}
    </div>
  );
}
