import bg from "../assets/images/nencover_resize.png";
import map from "../assets/images/bang4.webp";
import hero from "../assets/images/hero2.webp";
import dragon from "../assets/images/dragon.webp";
import anaconda from "../assets/images/anacon.png";

// import ParallaxSection from "../components/ParallaxSection";
import { useRef } from "react";
import {
	motion,
	useScroll,
	useTransform,
	useInView,
	AnimatePresence,
} from "motion/react";
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
	{
		text: "VÀNG",
		className: "font-HP text-[#FFD700]",
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
		className: "font-HP text-secondary",
	},
];

const IntroPage = () => {
	const ref = useRef(null);
	const { scrollY } = useScroll({ target: ref });
	const isViewed = useInView(ref);
	return (
		<>
			<motion.div
				id="intro"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, ease: "easeInOut" }}
				ref={ref}
				className="relative flex flex-col justify-center items-center w-full min-h-screen scroll-smooth py-36"
				style={{
					backgroundImage: `url(${bg})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundAttachment: "fixed",
				}}
			>
				<motion.div className="min-h-[70vh]">
					<p className="font-HP text-7xl uppercase w-full flex flex-col items-center justify-center">
						Nhà tài trợ
					</p>
				</motion.div>

				{isViewed && (
					<motion.div
						intial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 1 }}
						viewport={{ root: ref }}
						className="text-4xl md:text-6xl lg:text-8xl font-bold z-10"
					>
						<TypewriterEffect words={words2} />
					</motion.div>
				)}
				<div className="w-full">
					<div className="max-w-5xl mx-auto">
						{/* <motion.img src={map} alt="map" className="min-w-md" />

					<motion.div className="absolute max-w-[400px] lg:max-w-3/4 top-[40%] bottom-[25%] font-DenkOne text-sm md:text-2xl font-medium leading-[1.75rem]">
						CODEFEST là một sự kiện học thuật được tổ chức bởi JS Club với mong
						muốn lan tỏa niềm đam mê lập trình tới tất cả sinh viên trường đại
						học FPT. Tham gia cuộc thi, các đội sẽ sử dụng ngôn ngữ Java tạo ra
						những con bot để tranh tài với nhau. Đây là cơ hội cho các đội thi
						được tham gia trải nghiệm sân chơi vừa vui vẻ vừa ly kỳ, hứa hẹn sẽ
						đem lại nhiều niềm vui bên cạnh những giá trị học thuật bổ ích.
					</motion.div> */}
						<div className="chat chat-start">
							<div className="chat-image avatar">
								<div className="w-36 rounded-full">
									<img src={hero} />
								</div>
							</div>
							<div className="chat-header text-secondary text-lg">Player</div>
							<div className="chat-bubble max-w-xl max-w-xl font-DenkOne">
								CODEFEST là một sự kiện học thuật được tổ chức bởi JS Club với
								mong muốn lan tỏa niềm đam mê lập trình tới tất cả sinh viên
								trường đại học FPT.
							</div>
						</div>
						<div className="chat chat-end">
							<div className="chat-image avatar">
								<div className="w-36 rounded-full">
									<img src={dragon} />
								</div>
							</div>
							<div className="chat-header text-secondary text-lg">Boss 1</div>
							<div className="chat-bubble max-w-xl font-DenkOne">
								Đây là cơ hội cho các đội thi được tham gia trải nghiệm sân chơi
								vừa vui vẻ vừa ly kỳ, hứa hẹn sẽ đem lại nhiều niềm vui bên cạnh
								những giá trị học thuật bổ ích.
							</div>
						</div>
						<div className="chat chat-start">
							<div className="chat-image avatar">
								<div className="w-36 rounded-full">
									<img src={anaconda} />
								</div>
							</div>
							<div className="chat-header text-secondary text-lg">Boss 2</div>
							<div className="chat-bubble max-w-xl font-DenkOne">
								Tham gia cuộc thi, các đội sẽ sử dụng ngôn ngữ Java tạo ra những
								con bot để tranh tài với nhau.
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default IntroPage;
