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
			style={
				{
					// backgroundImage: `url(${bg})`,
					// backgroundSize: "cover",
					// backgroundPosition: "center",
					// backgroundRepeat: "no-repeat",
					// backgroundAttachment: "fixed",
				}
			}
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
						<motion.div className="relative lg:flex-row flex-col gap-y-44 items-center justify-center flex w-1/2 md:w-full md:gap-x-12">
							<InfoCard
								image={hero}
								title="Đối tượng <br /> tham gia"
								tClass="text-4xl mt-12"
								pClass="text-xl"
								direction="top"
								imgClass="w-56 -translate-y-[65%]"
							>
								<ul class="space-y-3 font-DenkOne mt-6">
									<li className="text-center">Sinh viên toàn miền Bắc</li>
								</ul>
							</InfoCard>
							<InfoCard
								image={bang}
								title="Hình thức <br /> tham gia"
								tClass="text-4xl mt-12"
								pClass="text-xl mt-6"
								direction="bottom"
								imgClass="w-48 -translate-y-[150%] lg:-translate-y-8 lg:-bottom-[25%]"
							>
								<ul class="space-y-3 font-DenkOne mb-6">
									<li className="text-center">
										Thi đấu theo đội <br /> (4 - 5 thành viên/đội)
									</li>
								</ul>
							</InfoCard>
							<InfoCard
								image={cong}
								title="Hình thức <br /> tổ chức"
								tClass="text-4xl "
								pClass="text-xl"
								direction="top"
								imgClass="w-[500px] -top-[35%]"
							>
								<ul class="space-y-3 font-DenkOne">
									<li className="text-center">
										<span className="font-bold text-secondary">
											Đăng ký tham gia:
										</span>
										<br />
										Đăng ký theo đội 4 - 5 người
									</li>
									<li className="ml-8">
										<ul className="list-disc marker:text-secondary">
											<li>Tham gia các buổi training Online</li>

											<li>1 buổi thi thử Online</li>
										</ul>
									</li>
									<li className="text-center">
										<span className="font-bold text-secondary">
											Vòng Chung kết:
										</span>
										<br />
										Tổ chức Offline tại Đại học FPT Hà Nội.
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
