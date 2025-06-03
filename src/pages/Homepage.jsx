// Đây chính là Hero section
import bgImg from "../assets/images/nencover_resize.png";
import bgImg2 from "../assets/images/poster.webp";
import hero from "../assets/images/hero_back.webp";
import hrShadow from "../assets/images/hero_shadow.webp";
import land from "../assets/images/duong.webp";
import cong from "../assets/images/cong_coden.png";
import drG from "../assets/images/dragon.webp";
import stone from "../assets/images/da4.webp";
import tree1 from "../assets/images/tree22.webp";
import tree2 from "../assets/images/download.webp";
import tran from "../assets/images/anacon.png";
import da from "../assets/images/da2_bg.webp";
import font from "../assets/images/font.png";
import nut from "../assets/images/khung.png";
import light2 from "../assets/images/cloud_light.png";

import {
	MouseParallaxContainer,
	MouseParallaxChild,
} from "react-parallax-mouse";
import CountdownTimer from "../components/countdown/CountdownTimer";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const Homepage = () => {
	const ref = useRef(null);

	const { scrollY } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const scale = useTransform(scrollY, [0, 500, 1000], [1, 0.8, 0.5]);
	const scaleFont = useTransform(scrollY, [0, 500, 1000], [1, 1.2, 1.6]);
	const scaleCong = useTransform(scrollY, [0, 500, 1000], [1, 2, 2.5]);
	const y = useTransform(scrollY, [0, 500, 1000], [0, -100, -50]);
	const opacity = useTransform(scrollY, [0, 500], [1, 0.7]);
	const hidden = useTransform(scrollY, [0, 500], [1, 0]);

	return (
		<div id="homepage">
			<div className="fixed top-0 left-0 w-full h-screen z-[-1] bg-[#1D2C48]"></div>
			<MouseParallaxContainer
				globalFactorX={0.1}
				globalFactorY={0.1}
				id="home"
				ref={ref}
				className="w-full h-screen relative overflow-hidden"
			>
				<motion.div
					style={{ opacity }}
					transition={{ duration: 1, ease: "easeInOut" }}
					className="w-full h-screen"
				>
					<div
						className="bg inset-0 w-full h-full z-0 absolute hidden lg:block"
						style={{
							backgroundImage: `url(${bgImg})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							backgroundAttachment: "fixed",
						}}
					></div>
					<div
						className="bg inset-0 w-full h-full z-0 absolute block lg:hidden"
						style={{
							backgroundImage: `url(${bgImg2})`,
							backgroundSize: "cover",
							backgroundPosition: "center",

							backgroundRepeat: "no-repeat",
							backgroundAttachment: "fixed",
						}}
					></div>

					<img
						className="absolute inset-0 scale-150 w-full h-full z-10 hidden lg:block"
						style={{
							backgroundImage: `url(${light2})`,
							backgroundSize: "contain",
							backgroundPosition: "center",
						}}
					/>

					<MouseParallaxChild
						factorX={0.5}
						factorY={0.3}
						className="absolute top-[-15%] left-[-15%] w-180 h-200 z-10 hidden lg:block"
					>
						<motion.img
							src={tree2}
							alt="tree"
							style={{
								opacity: hidden,
							}}
						/>
					</MouseParallaxChild>

					<MouseParallaxChild
						factorX={0.2}
						factorY={0.4}
						className="absolute top-[10%] left-[-5%] md:left-0 w-2xl h-xl z-10 hidden lg:block"
					>
						<motion.img
							src={drG}
							alt="dragon"
							className="opacity-70 absolute"
							style={{
								opacity: hidden,
							}}
						/>
					</MouseParallaxChild>

					<MouseParallaxChild
						factorX={0.5}
						factorY={0.3}
						className="absolute top-[0%] right-[-20%] w-180 h-200 z-10 hidden lg:block"
					>
						<motion.img
							src={tree1}
							alt="tree"
							style={{
								opacity: hidden,
							}}
						/>
					</MouseParallaxChild>

					<MouseParallaxChild
						factorX={0.2}
						factorY={0.4}
						className="absolute right-0 lg:right-[15%] -translate-y-12 w-2xl h-xl z-10 hidden lg:block"
					>
						<motion.img
							src={tran}
							alt="tran"
							className="absolute inset-0"
							style={{
								opacity: hidden,
							}}
						/>
					</MouseParallaxChild>

					<MouseParallaxChild
						factorX={0.1}
						factorY={0.3}
						className="absolute right-[-5%] top-[65%] w-xl h-xl z-[15] hidden lg:block"
					>
						<motion.img src={da} alt="da" style={{ opacity: hidden }} />
					</MouseParallaxChild>

					<MouseParallaxChild
						factorX={0.5}
						factorY={0.3}
						className="absolute top-[0%] right-[-20%] w-180 h-200 z-10 hidden lg:block "
					>
						<motion.img
							src={tree1}
							alt="tree"
							style={{
								opacity: hidden,
								y,
							}}
						/>
					</MouseParallaxChild>

					<MouseParallaxChild
						factorX={0.1}
						factorY={0.3}
						className="absolute w-screen bottom-[-44%] left-0 right-0 h-180 z-10 hidden lg:block "
					>
						<motion.img
							src={stone}
							alt="stone"
							className="w-screen absolute bottom-[44%] scale-x-125
						"
						/>
					</MouseParallaxChild>

					<div className="absolute left-0 right-0 bottom-0 z-10 hidden lg:block">
						<motion.img
							src={land}
							alt="land"
							className="w-screen"
							style={{ scale: scaleCong }}
						/>

						<a href="/intro">
							<motion.img
								className="absolute w-80 left-1/2 translate-x-[-60%] md:bottom-[50%] h-auto z-10 cursor-pointer"
								src={cong}
								style={{
									scale: scaleCong,
								}}
								transition={{ duration: 0.5, ease: "easeInOut" }}
							/>
						</a>
						<motion.img
							src={hero}
							alt="hero"
							className="absolute w-32 left-1/2 bottom-[40%] translate-x-[-50%] z-[11]"
							style={{
								opacity: hidden,
								y,
							}}
						/>
						<motion.img
							style={{ y, opacity: hidden }}
							src={hrShadow}
							alt="hrShadow"
							className="absolute w-32 left-[50%] translate-x-[-60%] md:bottom-[20%] z-10"
						/>
					</div>

					<motion.div
						className="font-HP text-xl fixed left-0 right-0 bottom-[20%] md:bottom-[15%] h-30 z-[19] w-full md:flex md:justify-between"
						style={{ scale, y, opacity: hidden }}
					>
						<CountdownTimer />
					</motion.div>

					<motion.a
						href="https://docs.google.com/document/u/0/"
						target="_blank"
						className="absolute w-76 z-[20] bottom-[50%] lg:bottom-[5%] left-1/2 -translate-x-1/2"
						style={{ scale, y }}
					>
						<motion.img src={nut} alt="nut" />

						<motion.div className="absolute text-center top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 z-10 font-HP text-2xl text-[#ffffff] font-bold uppercase">
							Thể lệ cuộc thi
						</motion.div>
					</motion.a>

					<motion.img
						className="absolute w-lg left-1/2 translate-x-[-50%] lg:-translate-x-[58%] top-[15%] lg:top-[35%] z-[50]"
						src={font}
						style={{ scale: scaleFont, y }}
					/>
				</motion.div>
			</MouseParallaxContainer>
		</div>
	);
};

export default Homepage;
