import { motion } from "motion/react";
import { cn } from "../../lib/utils";
const InfoCard = ({ image, title, direction, children, imgClass }) => {
	return (
		<section
			className={cn(
				"relative border-4 min-w-[300px] h-[400px] border-[#92ACFA] bg-[#2F4F7D]/40 rounded-4xl flex flex-col justify-center items-center",
				direction === "bottom" && "lg:-translate-y-[25%]"
			)}
		>
			{direction === "top" && (
				<>
					<h1 className="w-full text-center text-2xl font-EasyCome tracking-wider font-bold text-[#92ACFA] uppercase max-w-1/2">
						{title}
					</h1>
					<img
						src={image}
						alt={title}
						className={cn("absolute z-[100]", imgClass)}
					/>
					<motion.div className="p-4 tracking-wide leading-[1.6rem] w-[300px] text-wrap">
						{children}
					</motion.div>
				</>
			)}

			{direction === "bottom" && (
				<>
					<motion.div className="p-4 tracking-wide leading-[1.6rem] w-[300px] text-wrap">
						{children}
					</motion.div>
					<h1 className="w-full text-center text-2xl font-EasyCome tracking-wider font-bold text-[#92ACFA] uppercase max-w-1/2">
						{title}
					</h1>
					<img
						src={image}
						alt={title}
						className={cn("absolute z-[100]", imgClass)}
					/>
				</>
			)}
		</section>
	);
};

export default InfoCard;
