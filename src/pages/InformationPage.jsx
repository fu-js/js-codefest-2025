// InformationPage.jsx

import hero from "/images/hero3.webp";
import bang from "/images/bang2.webp";
import cong from "/images/cong_coden.webp";
import { AnimatePresence, motion, useInView } from "motion/react";
import { TypewriterEffect } from "../components/ui/TextGenerate";
import { useRef } from "react";
import InfoCard from "../components/ui/InfoCard";

const parentVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.5,
			staggerChildren: 0.5,
			staggerDirection: 1,
			type: "spring",
		},
	},
};

const childVariants = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	visible: {
		opacity: 1,
		y: 0,
	},
};

const words = [
	{
		text: "THÔNG",
		className: "font-HP tracking-wider",
	},
	{
		text: "TIN",
		className: "font-HP tracking-wider",
	},
	{
		text: "CUỘC",
		className: "font-HP tracking-wider text-primary",
	},
	{
		text: "THI",
		className: "font-HP tracking-wider text-primary",
	},
];

const InformationPage = () => {
	const ref = useRef(null);
	const isViewed = useInView(ref, { once: true });
	return (
		<div
			id="information"
			ref={ref}
			className="pb-32 w-full min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-base-300 py-18"
		>
			<AnimatePresence mode="wait">
				{isViewed && (
					<>
						<motion.div
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 1 }}
							viewport={{ root: ref }}
							className="text-4xl md:text-6xl lg:text-8xl font-bold z-10 mb-30"
						>
							<TypewriterEffect words={words} />
						</motion.div>
						<motion.div
							variants={parentVariants}
							initial="hidden"
							whileInView="visible"
							className="relative lg:flex-row flex-col gap-y-44 items-center justify-center flex w-1/2 md:w-full md:gap-x-12"
						>
							<motion.div variants={childVariants}>
								<InfoCard
									image={hero}
									title="Đối tượng <br /> tham gia"
									imgClass="w-64 -top-1/2 animate-bounce-linear drop-shadow-2xl drop-shadow-[#ffffff55]"
								>
									<ul class="space-y-3 font-DenkOne mt-6">
										<li className="text-center text-lg">
											Sinh viên toàn miền Bắc
										</li>
									</ul>
								</InfoCard>
							</motion.div>
							<motion.div variants={childVariants}>
								<InfoCard
									image={bang}
									title="Hình thức <br /> tham gia"
									imgClass="w-52 -top-[18%] animate-bounce-linear drop-shadow-2xl drop-shadow-[#ffffff55]"
								>
									<ul className="space-y-3 font-DenkOne mt-6 text-center">
										<span className="font-bold text-secondary">
											Hình thức thi đấu:
										</span>
										<li>
											<div className="text-lg mt-3">
												Thi đấu theo đội <br /> (4 - 5 thành viên/đội)
											</div>
										</li>
										<li className="text-lg">
											Những thí sinh đăng ký cá nhân sẽ được BTC hỗ trợ ghép đội
											phù hợp.
										</li>
									</ul>
								</InfoCard>
							</motion.div>
							<motion.div variants={childVariants}>
								<InfoCard
									image={cong}
									title="Hình thức <br /> tổ chức"
									imgClass="w-[320px] -top-[26%]  animate-bounce-linear drop-shadow-2xl drop-shadow-[#ffffff55]"
								>
									<ul className="space-y-3 font-DenkOne mt-6 text-center">
										<span className="font-bold text-secondary">
											Đăng ký tham gia:
										</span>
										<li className="text-lg mt-3">
											Đăng ký theo đội 4 - 5 người hoặc đăng ký cá nhân <br />{" "}
											(BTC sẽ hỗ trợ ghép đội).
										</li>
										<span className="font-bold text-secondary">
											Vòng Chung kết:
										</span>
										<li className="text-lg mt-3">
											Tổ chức Offline tại <br /> Đại học FPT Hà Nội.
										</li>
									</ul>
								</InfoCard>
							</motion.div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</div>
	);
};

export default InformationPage;
