import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/ui/Loader";
import { useEffect, useState } from "react";

import Homepage from "./pages/Homepage";
import IntroPage from "./pages/IntroPage";
import ReasonPage from "./pages/ReasonPage";
import TimelinePage from "./pages/TimelinePage";
import QuestionPage from "./pages/QuestionPage";
import InformationPage from "./pages/InformationPage";

const App = () => {
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
					<main id="main" className="relative h-screen">
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
