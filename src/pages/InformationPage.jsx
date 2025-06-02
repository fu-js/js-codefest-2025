// InformationPage.jsx
import bg from "../assets/images/nencover_resize.png";

import hero from "../assets/images/hero3.webp";
import bang from "../assets/images/bang2.webp";
import cong from "../assets/images/cong_coden.webp";
import {
	AnimatePresence,
	motion,
	useScroll,
	useTransform,
	useInView,
} from "motion/react";
import { TypewriterEffect } from "../components/ui/TextGenerate";
import { useEffect, useRef } from "react";
import InfoCard from "../components/ui/InfoCard";

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
		className: "font-HP tracking-wider text-secondary",
	},
];

const InformationPage = () => {
	const ref = useRef(null);
	const isViewed = useInView(ref);
	return (
		<div
			id="information"
			ref={ref}
			style={{
				backgroundImage: `url(${bg})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "fixed",
			}}
			className="w-full min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-base-200 py-18"
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
						<motion.div className="relative  lg:flex-row flex-col gap-y-44 items-center justify-center flex w-1/2 md:w-full md:gap-x-12">
							<InfoCard
								image={hero}
								title="Đối tượng tham gia"
								direction="top"
								imgClass="w-64 -translate-y-[65%]"
							>
								<ul class="pl-5 space-y-3 list-decimal marker:text-secondary font-DenkOne">
									<li>Sinh viên Đại học FPT Hà Nội</li>
								</ul>
							</InfoCard>
							<InfoCard
								image={bang}
								title="Hình thức tham gia"
								direction="bottom"
								imgClass="w-48 -translate-y-[150%] lg:-translate-y-0 lg:-bottom-[25%]"
							>
								<ul class="pl-5 space-y-3 list-decimal marker:text-secondary font-DenkOne">
									<li>
										Hình thức thi đấu: Thi đấu theo đội (3 - 4 thành viên/đội).
									</li>
									<li>
										Những thí sinh đăng ký cá nhân sẽ được BTC hỗ trợ ghép đội
										phù hợp.
									</li>
								</ul>
							</InfoCard>
							<InfoCard
								image={cong}
								title="Hình thức tham gia"
								direction="top"
								imgClass="w-[500px] -top-[35%]"
							>
								<ul class="pl-5 space-y-3 list-decimal marker:text-secondary font-DenkOne">
									<li>
										Đăng ký tham gia: Đăng ký theo đội 3 - 4 người hoặc đăng ký
										cá nhân (BTC sẽ hỗ trợ ghép đội).
									</li>
									<li>
										Vòng Training: Tham gia các buổi training Online và 1 buổi
										thi thử Offline tại Đại học FPT Hà Nội.
									</li>
									<li>
										Vòng Chung kết: Tổ chức Offline tại Đại học FPT Hà Nội.
									</li>
								</ul>
							</InfoCard>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</div>
	);
};

export default InformationPage;
