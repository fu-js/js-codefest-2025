
import bg from "../assets/images/nencover_resize.png";
import map from "../assets/images/bang4.webp";
import hero from "../assets/images/hero3.webp";

// import ParallaxSection from "../components/ParallaxSection";
import React, { useState, useEffect } from "react";
import { useRef } from "react";
import {
	motion,
	useScroll,
	useTransform,
	useInView,
	AnimatePresence,
} from "motion/react";


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
				// whileInView={{ opacity: isViewed ? 1 : 0 }}
				transition={{ duration: 1, ease: "easeInOut" }}
				ref={ref}
				className="relative grid place-content-center w-full h-screen scroll-smooth"
				style={{
					backgroundImage: `url(${bg})`,
					backgroundSize: "cover",
					// backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundAttachment: "fixed",
					minHeight: "calc(100% + 550px)",
				}}
			>
				{/* <AnimatePresence mode="wait">
					{isViewed && (
						<motion.img
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: [-100, 0] }}
							transition={{ duration: 1, ease: "easeInOut" }}
							className="w-[768px]"
							src={map}
						/>
					)}
				</AnimatePresence> */}
				{/* <Intro /> */}
			</motion.div>
			
			<motion.div>
				<p
					className="absolute top-[80%] font-HP text-7xl uppercase min-h-screen w-full flex flex-col items-center justify-center"
				>Nhà tài trợ</p>
			</motion.div>

			<div>
				<motion.div
					className="absolute top-[180%] bottom-0  h-[96%] bg-cover bg-center flex flex-col items-center justify-center"
					style={{ backgroundImage: `url(${map})`, width: "100%", maxWidth: 1050, marginLeft: "15.6%" }}
				>
				</motion.div>
				
				<motion.div
					className="absolute top-[194%] font-HP text-6xl"
					style={{ marginLeft: "49.6%" }}
				>Giới thiệu CUỘC THI</motion.div>

				<motion.div
					className="absolute top-[220%] font-sans hidden md:block text-l text-2xl font-medium leading-[1.75rem]"
					style={{ marginLeft: "23.6%", marginRight: "46%" }}
				>CODEFEST là một sự kiện học thuật được tổ chức bởi JS Club 
				với mong muốn lan tỏa niềm đam mê lập trình tới tất cả sinh 
				viên trường đại học FPT. Tham gia cuộc thi, các đội sẽ sử dụng 
				ngôn ngữ Java tạo ra những con bot để tranh tài với nhau. 
				Đây là cơ hội cho các đội thi được tham gia trải nghiệm sân 
				chơi vừa vui vẻ vừa ly kỳ, hứa hẹn sẽ đem lại nhiều niềm vui
				 bên cạnh những giá trị học thuật bổ ích.</motion.div>

				 <motion.div
					className="absolute top-[188%] h-136 w-136 z-10"
					style={{ marginLeft: "46%", marginRight: "23.6%", backgroundImage: `url(${hero})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
				></motion.div>
			</div>
		</>

	);
};

export default IntroPage;
