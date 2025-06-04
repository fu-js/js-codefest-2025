import congden from "/images/cong_coden.webp";
import cong from "/images/cong.webp";
import cloud from "/images/cloud_light.png";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const congImgs = [cong, congden];
const variants = {
	hidden: { opacity: 0, scale: 0.8 },
	animate: { opacity: 1, scale: 1 },
	exit: { opacity: 0, scale: 0.8 },
};
const Loader = ({ progress }) => {
	const [step, setStep] = useState(0);
	useEffect(() => {
		if (progress > 60) {
			setStep(1);
		}
	}, [progress]);
	return (
		<div
			id="loader"
			className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#1D2C48] to-[#f9f9f9]"
		>
			<AnimatePresence mode="wait">
				<motion.img
					src={congImgs[step]}
					variants={variants}
					initial="hidden"
					animate="animate"
					exit="exit"
					transition={{ duration: 0.8, type: "tween", ease: "easeInOut" }}
					alt="Congden"
					className="
             h-64 md:h-72 lg:h-96 mb-4"
				/>
			</AnimatePresence>
			<img
				src={cloud}
				className="absolute top-0 left-0 w-full h-full object-cover animate-pulse"
				alt="Cloud background"
			/>
			<div className="w-3/4 md:w-4xl mb-4 p-1 bg-gray-200">
				<div
					className="bg-[#92ACFA] h-2.5 transition-all duration-500 ease-in-out"
					style={{ width: `${progress}%` }}
					aria-label="Loading progress"
				/>
			</div>
			<p className="animate-pulse text-2xl md:text-4xl font-HP text-[#1D2C48]">
				Loading...
			</p>
		</div>
	);
};

export default Loader;
