// ReasonPage.jsx
import {
	AnimatePresence,
	motion,
	useScroll,
	useTransform,
	useInView,
} from "motion/react";
import hero from "../assets/images/hero3.webp";

import {
	AnimatedSpan,
	Terminal,
	TypingAnimation,
} from "../components/ui/Terminal";

import { TypewriterEffect } from "../components/ui/TextGenerate";
import { useEffect, useRef } from "react";

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
				className="relative flex flex-col items-center justify-center min-h-screen scroll-smooth overflow-hidden bg-base-300 pt-44 md:pt-0"
				style={
					{
						// backgroundImage: `url(${bg})`,
						// backgroundSize: "cover",
						// backgroundPosition: "center",
						// backgroundRepeat: "no-repeat",
						// backgroundAttachment: "fixed",
						// scale,
						// y,
					}
				}
			>
				<motion.div className="w-full relative flex flex-col items-center justify-center">
					<motion.div
						initial={{ opacity: 0, x: -100, scale: 0.8 }}
						whileInView={{ opacity: 1, x: 0, scale: 1.5 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="absolute right-0 md:left-1/2 transform md:translate-x-1/2 bottom-0 size-64 object-cover z-10"
						style={{
							backgroundImage: `url(${hero})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							// y,
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
									className="text-4xl md:text-6xl lg:text-8xl font-bold z-10"
								>
									<TypewriterEffect words={words} />
								</motion.div>
								<motion.div
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.5 }}
									className="mt-24"
								>
									<Terminal>
										<TypingAnimation>
											&gt; npx join-codefest@2025
										</TypingAnimation>

										<AnimatedSpan delay={1500} className="text-green-500">
											<span>✔ Cơ cấu giải thưởng HẤP DẪN</span>
										</AnimatedSpan>

										<AnimatedSpan delay={2000} className="text-green-500">
											<span>✔ Cơ hội HỌC TẬP và RÈN LUYỆN</span>
										</AnimatedSpan>

										<AnimatedSpan delay={2500} className="text-green-500">
											<span>✔ Nâng cao KIẾN THỨC và KĨ NĂNG lập trình"</span>
										</AnimatedSpan>

										<AnimatedSpan delay={3000} className="text-green-500">
											<span>✔ Mở rộng mạng lưới KẾT NỐI</span>
										</AnimatedSpan>

										<AnimatedSpan delay={3500} className="text-green-500">
											<span>✔ Phát triển các KỸ NĂNG MỀM</span>
										</AnimatedSpan>

										<AnimatedSpan delay={4000} className="text-green-500">
											<span>✔ Installing dependencies.</span>
										</AnimatedSpan>

										<AnimatedSpan delay={4500} className="text-blue-500">
											<span>ℹ Installed:</span>
											<span className="pl-2">- app/codefest.ts</span>
										</AnimatedSpan>

										<TypingAnimation delay={5000} className="text-base-content">
											Success! 😎.
										</TypingAnimation>

										<TypingAnimation delay={5500} className="text-base-content">
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
