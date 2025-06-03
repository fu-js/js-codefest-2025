// TimelinePage.jsx
import { motion, useInView, AnimatePresence } from "motion/react";
import dragon from "../assets/images/dragon.webp";
import { TypewriterEffect } from "../components/ui/TextGenerate";
import { useRef } from "react";
import TimelineBar from "../components/ui/TimelineBar";
import {
	MouseParallaxContainer,
	MouseParallaxChild,
} from "react-parallax-mouse";

const words = [
	{
		text: "TIMELINE",
		className: "font-HP tracking-wider text-primary",
	},
	{
		text: "CHƯƠNG",
		className: "font-HP tracking-wider",
	},
	{
		text: "TRÌNH",
		className: "font-HP tracking-wider",
	},
];
const TimelinePage = () => {
	const ref = useRef(null);
	const isViewed = useInView(ref, { once: true });
	return (
		<motion.div
			id="timeline"
			ref={ref}
			className="w-full bg-base-300 relative flex flex-col items-center justify-center min-h-screen py-18"
		>
			<MouseParallaxContainer
				globalFactorX={0.1}
				globalFactorY={0.1}
				className="w-full relative flex flex-col items-center justify-center"
				style={{ width: "100%", height: "100%", overflow: "auto" }}
			>
				<AnimatePresence mode="wait">
					{isViewed && (
						<>
							<motion.div
								initial={{ opacity: 0, x: -100 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 1 }}
								viewport={{ root: ref }}
								className="absolute top-0 left-0 right-0 bottom-0 w-full h-full md:w-3/4 opacity-50"
							>
								<MouseParallaxChild factorX={0.3} factorY={0.3}>
									<motion.img
										src={dragon}
										alt="dragon"
										className="w-full h-full object-cover hidden lg:block"
									/>
								</MouseParallaxChild>
							</motion.div>
							<motion.div
								intial={{ opacity: 0, x: -100 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 1 }}
								viewport={{ root: ref }}
								className="text-4xl md:text-6xl lg:text-8xl font-bold z-10"
							>
								<TypewriterEffect words={words} />
							</motion.div>
							<div className="mt-24">
								<TimelineBar />
							</div>
						</>
					)}
				</AnimatePresence>
			</MouseParallaxContainer>
		</motion.div>
	);
};

export default TimelinePage;
