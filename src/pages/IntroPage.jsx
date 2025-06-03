import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { TypewriterEffect } from "../components/ui/TextGenerate";

const words = [
	{
		text: "NHÀ",
		className: "font-HP text-[#FFFFFF]",
	},
	{
		text: "TÀI",
		className: "font-HP text-[#FFFFFF]",
	},
	{
		text: "TRỢ",
		className: "font-HP text-[#FFFFFF]",
	},
];
const words2 = [
	{
		text: "GIỚI",
		className: "font-HP text-[#FFFFFF]",
	},
	{
		text: "THIỆU",
		className: "font-HP text-[#FFFFFF]",
	},
	{
		text: "CUỘC",
		className: "font-HP text-primary",
	},
	{
		text: "THI",
		className: "font-HP text-primary",
	},
];

const IntroPage = () => {
	const ref = useRef(null);
	const isViewed = useInView(ref, { once: true });
	return (
		<>
			<motion.div
				id="intro"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, ease: "easeInOut" }}
				ref={ref}
				className="relative flex flex-col justify-center items-center w-full min-h-screen bg-base-300"
			>
				<motion.div className="w-full h-full overflow-hidden">
					<motion.div>
						{isViewed && (
							<>
								<motion.div className="min-h-[70vh] text-4xl md:text-6xl lg:text-8xl font-bold z-10">
									<TypewriterEffect words={words} />
								</motion.div>
								<motion.div
									intial={{ opacity: 0, x: -100 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 1 }}
									viewport={{ root: ref }}
									className="text-4xl md:text-6xl lg:text-8xl font-bold z-10"
								>
									<TypewriterEffect words={words2} />
								</motion.div>
							</>
						)}
					</motion.div>
				</motion.div>
			</motion.div>
		</>
	);
};

export default IntroPage;
