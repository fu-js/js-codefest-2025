import { motion } from "motion/react";
import { cn } from "../../lib/utils";
const InfoCard = ({
	image,
	title,
	direction,
	children,
	imgClass,
	pClass,
	tClass,
}) => {
	return (
		<section
			className={cn(
				"relative border-4 min-w-[300px] h-[400px] border-[#92ACFA] bg-[#2F4F7D]/40 rounded-4xl flex flex-col justify-center items-center",
				direction === "bottom" && "lg:-translate-y-[25%]"
			)}
		>
			{direction === "top" && (
				<>
					<img
						src={image}
						alt={title}
						className={cn("absolute z-[100]", imgClass)}
					/>
					<div className="flex flex-col items-center">
						<h1
							className={cn(
								"w-full text-center text-2xl font-Treacherous tracking-wider font-bold text-[#92ACFA] uppercase max-w-[286px]",
								tClass
							)}
							dangerouslySetInnerHTML={{ __html: title }}
						></h1>
						<motion.div
							className={cn(
								"p-4 tracking-wide leading-[1.6rem] w-[300px] text-wrap",
								pClass
							)}
						>
							{children}
						</motion.div>
					</div>
				</>
			)}

			{direction === "bottom" && (
				<>
					<div className="flex flex-col-reverse md:flex-col items-center">
						<motion.div
							className={cn(
								"p-4 tracking-wide leading-[1.6rem] w-[300px] text-wrap",
								pClass
							)}
						>
							{children}
						</motion.div>

						<h1
							className={cn(
								"w-full text-center text-2xl font-Treacherous tracking-wider font-bold text-[#92ACFA] uppercase max-w-[286px]",
								tClass
							)}
							dangerouslySetInnerHTML={{ __html: title }}
						></h1>
					</div>
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
