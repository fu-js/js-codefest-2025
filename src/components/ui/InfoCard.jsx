import { motion } from "motion/react";
import { cn } from "../../lib/utils";
const InfoCard = ({ image, title, children, imgClass }) => {
	return (
		<section
			className={cn(
				"relative border-4 xl:min-w-[320px] min-w-[300px] h-[440px] border-[#92ACFA] bg-[#2F4F7D]/40 rounded-4xl flex flex-col justify-center items-center"
			)}
		>
			<img
				src={image}
				alt={title}
				className={cn("absolute z-[100]", imgClass)}
			/>
			<div className="flex flex-col items-center justify-center h-[400px]">
				<h1
					className={cn(
						"w-full text-center text-3xl font-HP tracking-wider font-bold text-[#92ACFA] uppercase max-w-[286px]"
					)}
					dangerouslySetInnerHTML={{ __html: title }}
				></h1>
				<motion.div
					className={cn(
						"tracking-wide leading-[1.6rem] text-xl w-[240px] text-wrap"
					)}
				>
					{children}
				</motion.div>
			</div>
		</section>
	);
};

export default InfoCard;
