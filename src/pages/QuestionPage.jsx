// QuestionPage.jsx
import { motion, useInView, AnimatePresence } from "motion/react";
import { MessengerFAQ } from "../components/ui/FAQChat.jsx";
//import bg from "../assets/images/reasons/bg/2.png";
import bg from "../assets/images/nencover_resize.png";
import hero from "../assets/images/hero2.webp";
import dragon from "../assets/images/dragon.webp";
import anaconda from "../assets/images/anacon.png";

import { TypewriterEffect } from "../components/ui/TextGenerate";
import { useRef, useState } from "react";

const words = [
	{
		text: "CÂU",
		className: "font-HP tracking-wider text-primary",
	},
	{
		text: "HỎI",
		className: "font-HP tracking-wider text-primary",
	},
	{
		text: "THƯỜNG",
		className: "font-HP tracking-wider",
	},
	{
		text: "GẶP",
		className: "font-HP tracking-wider",
	},
];
const QuestionPage = () => {
	const ref = useRef(null);
	const isViewed = useInView(ref, { once: true });
	return (
		<motion.div
			id="question"
			ref={ref}
			style={
				{
					// backgroundImage: `url(${bg})`,
					// backgroundSize: "cover",
					// backgroundPosition: "center",
					// backgroundRepeat: "no-repeat",
					// backgroundAttachment: "fixed",
				}
			}
			className="min-h-screen w-full relative flex flex-col items-center justify-center bg-base-300 py-36"
		>
			<AnimatePresence mode="wait">
				{isViewed && (
					<>
						<motion.div className="hero">
							<div className="hero-content flex-col gap-12">
								<div className="text-center overflow-hidden">
									<motion.div
										intial={{ opacity: 0, x: -100 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 1 }}
										viewport={{ root: ref }}
										className="text-4xl md:text-6xl lg:text-8xl font-bold z-10 m-8"
									>
										<TypewriterEffect words={words} />
									</motion.div>
								</div>
								<MessengerFAQ />
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

export default QuestionPage;
