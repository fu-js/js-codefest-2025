import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/ui/Loader";
import { useEffect, useRef, useState } from "react";
import { ReactLenis } from "lenis/dist/lenis-react";
import { useScroll, useTransform } from "framer-motion";

import Homepage from "./pages/Homepage";
import IntroPage from "./pages/IntroPage";
import ReasonPage from "./pages/ReasonPage";
import TimelinePage from "./pages/TimelinePage";
import QuestionPage from "./pages/QuestionPage";
import InformationPage from "./pages/InformationPage";

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
					>
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
