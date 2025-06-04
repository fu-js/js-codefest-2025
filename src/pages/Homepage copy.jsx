// Đây chính là Hero section
import bgImg from "/images/nencover_resize.png";
import bgImg2 from "/images/poster.webp";
import hero from "/images/hero_back.webp";
import hrShadow from "/images/hero_shadow.webp";
import land from "/images/duong.webp";
import cong from "/images/cong_coden.png";
import drG from "/images/dragon.webp";
import stone from "/images/da4.webp";
import tree1 from "/images/tree22.webp";
import tree2 from "/images/download.webp";
import tran from "/images/anacon.png";
import da from "/images/da2_bg.webp";
import da2 from "/images/da3.webp";
import font from "/images/font.png";
import light2 from "/images/cloud_light.png";

import {
	MouseParallaxContainer,
	MouseParallaxChild,
} from "react-parallax-mouse";
import CountdownTimer from "../components/countdown/CountdownTimer";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import LongBtn from "../components/ui/LongBtn";

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
						className="bg inset-0 w-full h-full z-0 absolute hidden min-[1025px]:block"
						style={{
							backgroundImage: `url(${bgImg})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							backgroundAttachment: "fixed",
						}}
					></div>
					<div
						className="bg inset-0 w-full h-full z-0 absolute block min-[1025px]:hidden opacity-75"
						style={{
							backgroundImage: `url(${bgImg2})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							backgroundAttachment: "fixed",
						}}
					></div>

					<img
						className="absolute inset-0 scale-150 w-full h-full z-10 hidden min-[1025px]:block"
						style={{
							backgroundImage: `url(${light2})`,
							backgroundSize: "contain",
							backgroundPosition: "center",
						}}
					/>

					<MouseParallaxChild
						factorX={0.2}
						factorY={0.3}
						className="absolute top-[-15%] xl:left-[-15%] left-[-11%] w-180 h-200 z-10 hidden min-[1025px]:block opacity-50"
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
						className="absolute top-[2%] left-[-5%] md:left-16 w-2xl h-xl z-10 hidden xl:block opacity-80"
					>
						<motion.img
							src={drG}
							alt="dragon"
							className="absolute"
							style={{
								opacity: hidden,
							}}
						/>
					</MouseParallaxChild>

					<MouseParallaxChild
						factorX={0.4}
						factorY={0.2}
						className="absolute top-[-5%] xl:right-[-8%] right-[-4%] w-180 h-200 z-10 hidden min-[1025px]:block opacity-40 -scale-x-100"
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
						factorX={0.3}
						factorY={0.3}
						className="absolute right-0 min-[1025px]:right-[12%] -translate-y-36 w-3xl h-xl z-10 hidden xl:block"
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
						factorY={0.1}
						className="absolute right-[-5%] top-[65%] w-xl h-xl z-[12] hidden min-[1025px]:block"
					>
						<motion.img src={da} alt="da" style={{ opacity: hidden }} />
					</MouseParallaxChild>
					<div className="absolute left-0 top-52 w-lg h-xl z-[20] hidden min-[1025px]:block translate-x-[-20%] xl:translate-x-0">
						<motion.img src={da2} alt="da" style={{ opacity: hidden }} />
					</div>

					<div className="absolute top-[5%] xl:right-[-28%] right-[-36%] w-180 h-200 z-10 hidden min-[1025px]:block">
						<motion.img
							src={tree1}
							alt="tree"
							style={{
								opacity: hidden,
								y,
							}}
						/>
					</div>

					<MouseParallaxChild
						factorX={0.1}
						factorY={0}
						className="absolute top-[5%] xl:left-[-28%] left-[-36%] w-180 h-200 z-10 hidden min-[1025px]:block -scale-x-100"
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
						className="absolute w-screen bottom-[-44%] left-0 right-0 h-180 z-10 hidden min-[1025px]:block "
					>
						<motion.img
							src={stone}
							alt="stone"
							className="w-screen absolute bottom-[44%] scale-x-125"
						/>
					</MouseParallaxChild>

					<div className="absolute left-0 right-0 bottom-0 z-10 hidden min-[1025px]:block drop-shadow-lg drop-shadow-black">
						<motion.img
							src={land}
							alt="land"
							className="w-screen"
							style={{ scale: scaleCong }}
						/>

						<a href="/intro">
							<motion.img
								className="drop-shadow-sm drop-shadow-black absolute w-64 min-[1025px]:w-[320px] xl:w-[370px] left-1/2 translate-x-[-59%] md:bottom-[45%] h-auto z-10 cursor-pointer"
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
							className="absolute w-40 left-1/2 bottom-[30%] translate-x-[-50%] z-[11]"
							style={{
								opacity: hidden,
								y,
							}}
						/>
						<motion.img
							style={{ y, opacity: hidden }}
							src={hrShadow}
							alt="hrShadow"
							className="absolute w-44 left-[50%] translate-x-[-60%] md:bottom-0 z-10"
						/>
					</div>

					<motion.div
						className="font-HP text-xl fixed left-0 right-0 bottom-[20%] md:bottom-[15%] h-30 z-[19] w-full md:flex md:justify-between"
						style={{ scale, y, opacity: hidden }}
					>
						<CountdownTimer />
					</motion.div>

					<motion.div
						className="absolute z-[20] bottom-[55%] min-[1025px]:top-[52%] left-[48%] -translate-x-1/2 flex items-center md:gap-4"
						style={{ scale, y }}
					>
						<a href="#" className="drop-shadow-lg drop-shadow-black">
							<LongBtn>Thể lệ cuộc thi</LongBtn>
						</a>
						<a href="#" className="drop-shadow-lg drop-shadow-black">
							<LongBtn>Đăng ký</LongBtn>
						</a>
					</motion.div>

					<motion.img
						className="absolute w-lg md:w-xl min-[1025px]:w-2xl left-1/2 translate-x-[-50%] min-[1025px]:-translate-x-[55%] top-[10%] min-[1025px]:top-[20%] z-[50]"
						src={font}
						style={{ scale: scaleFont, y }}
					/>
				</motion.div>
			</MouseParallaxContainer>
		</div>
	);
};

export default Homepage;
