// InformationPage.jsx

import hero from "../assets/images/hero3.webp";
import bang from "../assets/images/bang2.webp";
import cong from "../assets/images/cong_coden.webp";
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
			staggerDirection: -1,
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
	const isViewed = useInView(ref);
	return (
		<div
			id="information"
			ref={ref}
			className="w-full min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-base-300 py-18"
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
									imgClass="w-56 -top-1/2"
								>
									<ul class="space-y-3 font-DenkOne mt-6">
										<li className="text-center">Sinh viên toàn miền Bắc</li>
									</ul>
								</InfoCard>
							</motion.div>
							<motion.div variants={childVariants}>
								<InfoCard
									image={bang}
									title="Hình thức <br /> tham gia"
									imgClass="w-48 -top-[15%]"
								>
									<ul className="space-y-3 font-DenkOne mt-6">
										<li className="text-center">
											Thi đấu theo đội <br /> (4 - 5 thành viên/đội)
										</li>
									</ul>
								</InfoCard>
							</motion.div>
							<motion.div variants={childVariants}>
								<InfoCard
									image={cong}
									title="Hình thức <br /> tổ chức"
									imgClass="w-[500px] -top-[25%]"
								>
									<ul className="space-y-3 font-DenkOne mt-6">
										<li className="text-center">
											<span className="font-bold text-secondary">
												Đăng ký tham gia:
											</span>
											<br />
											Đăng ký theo đội từ
											<br />4 - 5 người
										</li>

										<li className="text-center">
											<span className="font-bold text-secondary">
												Vòng Chung kết:
											</span>
											<br />
											Tổ chức Offline tại ĐH <br /> FPT Hà Nội.
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
