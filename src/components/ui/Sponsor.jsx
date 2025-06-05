import React from "react";


const sponsorsGold = [
  { img: "/hoctech.png", name: "Học Tech" },
  { img: "/net.png", name: "NET English" },
];

const sponsorsSilver = [
  { img: "/quickom.png", name: "Quickom" },
];

const sponsors = [
  { img: "/prd.jpg", name: "Photo Razzle Dazzle" },
  { img: "/im.png", name: "IELTS Mentor" },
];
export default function Sponsor({ img, name }) {
  return (
    <div className="flex flex-col gap-y-8 lg:flex-row justify-center items-center mt-20 mb-32"><GoldSponsor /><SilverSponsor /><NormalSponsor /></div>
  );
}

function GoldSponsor() {
  return (
    <div className="flex flex-row justify-center items-center gap-14 xl:gap-0">
      {sponsorsGold.map((sponsor) => (
        <div className="flex flex-col items-center gap-y-10 xl:px-12">
          <div className="drop-shadow-xl drop-shadow-[#fff78950] animate-bounce-linear bg-white xl:size-36 size-28 rounded-full flex flex-col items-center justify-center">
            <div className="xl:-translate-y-8 -translate-y-5 xl:w-64 w-52 aspect-square object-center bg-center bg-[url('/sponsor.png')] bg-cover flex flex-col items-center">
              <img src={sponsor.img} className="xl:w-20 w-16 xl:translate-y-28 translate-y-22" />
            </div>
          </div>
          <span className="font-bold font-HP uppercase xl:text-2xl text-xl">{sponsor.name}</span>
        </div>
      ))}
    </div>
  );
}

function SilverSponsor() {
  return (
    <div className="flex flex-row justify-center items-center">
      {sponsorsSilver.map((sponsor) => (
        <div className="flex flex-col items-center gap-y-10 lg:px-12 px-5 lg:ml-8 xl:ml-3">
          <div className="drop-shadow-xl drop-shadow-[#badeff50] animate-bounce-linear bg-white xl:size-36 size-28 rounded-full flex flex-col items-center justify-center">
            <div className="xl:-translate-y-8 -translate-y-5 xl:w-64 w-52 aspect-square object-center bg-center bg-[url('/sponsor.png')] bg-cover flex flex-col items-center">
              <img src={sponsor.img} className="xl:w-20 w-16 xl:translate-y-28 translate-y-22" />
            </div>
          </div>
          <span className="font-bold font-HP uppercase  xl:text-2xl text-xl">{sponsor.name}</span>
        </div>
      ))}
    </div>
  );
}

function NormalSponsor() {
  return (
    <div className="flex flex-row justify-center items-center gap-8 lg:gap-4 mr-4 xl:gap-0 lg:mr-0">
      {sponsors.map((sponsor) => (
        <div className="flex flex-col items-center gap-y-10 xl:px-8">
          <div className="drop-shadow-xl drop-shadow-[#fcbf8c40] animate-bounce-linear bg-white xl:size-36 size-28 rounded-full flex flex-col items-center justify-center">
            <div className="xl:-translate-y-8 -translate-y-5 xl:w-64 w-52 aspect-square object-center bg-center bg-[url('/sponsor.png')] bg-cover flex flex-col items-center">
              <img src={sponsor.img} className="xl:w-20 w-16 xl:translate-y-28 translate-y-22" />
            </div>
          </div>
          <span className="font-bold font-HP uppercase xl:text-2xl text-xl">{sponsor.name}</span>
        </div>
      ))}
    </div>
  );
}