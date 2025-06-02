import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/ui/Loader";
import { useEffect, useRef, useState } from "react";
import { ReactLenis } from "lenis/dist/lenis-react";
import {
	motion,
	useMotionTemplate,
	useScroll,
	useTransform,
} from "framer-motion";
import khoi from "./assets/images/khoi.webp";

import ParallaxSection from "./components/ParallaxSection";
import Homepage from "./pages/Homepage";
import IntroPage from "./pages/IntroPage";
import ReasonPage from "./pages/ReasonPage";
import TimelinePage from "./pages/TimelinePage";
import QuestionPage from "./pages/QuestionPage";
import InformationPage from "./pages/InformationPage";
import FormPage from "./pages/FormPage";

const App = () => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["end end", "end start"],
	});
	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
	const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
	const position = useTransform(scrollYProgress, (pos) =>
		pos >= 1 ? "relative" : "fixed"
	);

	useEffect(() => {
		const updateMousePosition = (ev) => {
			if (!targetRef.current) return;
			const { clientX, clientY } = ev;
			targetRef.current.style.setProperty("--x", `${clientX}px`);
			targetRef.current.style.setProperty("--y", `${clientY}px`);
		};

		window.addEventListener("mousemove", updateMousePosition);

		return () => {
			window.removeEventListener("mousemove", updateMousePosition);
		};
	}, []);
	const [loading, setLoading] = useState(true);
	const [progress, setProgress] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => {
				if (prev < 100) {
					return prev + 10;
				} else {
					clearInterval(interval);
					setLoading(false);
					return prev;
				}
			});
		}, 250);
		return () => clearInterval(interval);
	}, []);
	return (
		<>
			{loading && <Loader progress={progress} />}
			{!loading && (
				<div className="relative">
					<Header />
					<main
						id="main"
						ref={targetRef}
						style={{ opacity }}
						className="relative h-screen"
						// className="relative h-screen before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-primary)_0%,_transparent_100%)] before:opacity-40"
					>
						{/* <img
							className="fixed bottom-0 left-0 right-0 opacity-10 z-[1]"
							src={khoi}
							alt=""
						/> */}
						<Homepage />
						<IntroPage />
						<InformationPage />
						<ReasonPage />
						<TimelinePage />
						<QuestionPage />
						<Footer />
					</main>
				</div>
			)}
		</>
	);
};

export default App;
