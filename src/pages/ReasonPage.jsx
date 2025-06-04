// ReasonPage.jsx
import { AnimatePresence, motion, useInView } from "motion/react";
import hero from "../assets/images/hero3.webp";

import {
	AnimatedSpan,
	Terminal,
	TypingAnimation,
} from "../components/ui/Terminal";

import { TypewriterEffect } from "../components/ui/TextGenerate";
import { useRef } from "react";

const words = [
	{
		text: "VÌ",
		className: "font-HP tracking-wider",
	},
	{
		text: "SAO",
		className: "font-HP tracking-wider",
	},
	{
		text: "BẠN",
		className: "font-HP tracking-wider",
	},
	{
		text: "NÊN",
		className: "font-HP tracking-wider",
	},
	{
		text: "THAM",
		className: "font-HP tracking-wider",
	},
	{
		text: "GIA",
		className: "font-HP tracking-wider",
	},
	{
		text: "CODEFEST?",
		className: "text-primary font-HP",
	},
];

const texts = [
	"Cơ cấu giải thưởng Hấp Dẫn",

	"Cơ hội học tập và rèn luyện",

	"Nâng cao kiến thức và kĩ năng lập trình",

	"Mở rộng mạng lưới kết nối",

	"Phát triển các kỹ năng mềm",
];

const ReasonPage = () => {
	const ref = useRef(null);

	const isViewed = useInView(ref, { once: true });

	return (
		<>
			<motion.div
				ref={ref}
				id="reason"
				className="relative flex flex-col items-center justify-center min-h-screen scroll-smooth overflow-hidden bg-base-300 py-44 md:pt-0"
			>
				<motion.div className="w-full relative flex flex-col items-center justify-center">
					<motion.div
						initial={{ opacity: 0, x: -100, scale: 0.8 }}
						whileInView={{ opacity: 1, x: 0, scale: 1.5 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="absolute right-0 left-[50%] md:left-[45%] transform md:translate-x-24 bottom-0 size-72 md:size-80 lg:size-[26rem] object-cover z-10 animate-bounce-linear drop-shadow-2xl drop-shadow-[#ffffff55]"
						style={{
							backgroundImage: `url(${hero})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					/>
					<AnimatePresence mode="wait">
						{isViewed && (
							<>
								<motion.div
									intial={{ opacity: 0, x: -100 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 1 }}
									viewport={{ root: ref }}
									className="text-4xl md:text-6xl lg:text-8xl font-bold z-10 text-center text-wrap max-w-[80%] md:max-w-full"
								>
									<TypewriterEffect words={words} />
								</motion.div>
								<motion.div
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.5 }}
									className="mt-8 lg:mt-24"
								>
									<Terminal>
										<TypingAnimation>
											&gt; npx join-codefest@2025
										</TypingAnimation>

										<AnimatedSpan delay={1500} className="text-green-500">
											<span className="text-lg md:text-2xl">
												✔ Cơ cấu giải thưởng HẤP DẪN
											</span>
										</AnimatedSpan>

										<AnimatedSpan delay={2000} className="text-green-500">
											<span className="text-lg md:text-2xl">
												✔ Cơ hội HỌC TẬP và RÈN LUYỆN
											</span>
										</AnimatedSpan>

										<AnimatedSpan delay={2500} className="text-green-500">
											<span className="text-lg md:text-2xl">
												✔ Nâng cao KIẾN THỨC và KĨ NĂNG lập trình
											</span>
										</AnimatedSpan>

										<AnimatedSpan delay={3000} className="text-green-500">
											<span className="text-lg md:text-2xl">
												✔ Mở rộng mạng lưới KẾT NỐI
											</span>
										</AnimatedSpan>

										<AnimatedSpan delay={3500} className="text-green-500">
											<span className="text-lg md:text-2xl">
												✔ Phát triển các KỸ NĂNG MỀM
											</span>
										</AnimatedSpan>

										<AnimatedSpan delay={4000} className="text-green-500">
											<span className="text-lg md:text-2xl">
												✔ Installing dependencies
											</span>
										</AnimatedSpan>

										<AnimatedSpan delay={4500} className="text-blue-500">
											<span>ℹ Installed:</span>
											<span className="pl-2">- app/codefest.ts</span>
										</AnimatedSpan>

										<TypingAnimation delay={5000} className="text-base-content">
											Success! 😎.
										</TypingAnimation>

										<TypingAnimation
											delay={5500}
											className="text-base-content text-lg md:text-2xl"
										>
											Chúc bạn thi đấu thành công!
										</TypingAnimation>
									</Terminal>
								</motion.div>
							</>
						)}
					</AnimatePresence>
				</motion.div>
			</motion.div>
		</>
	);
};

export default ReasonPage;
