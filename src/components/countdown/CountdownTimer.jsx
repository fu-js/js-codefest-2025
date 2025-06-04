import { useEffect, useMemo, useState } from "react";
import khung from "/images/square.webp";

const TimeBlock = ({ children, label }) => (
	<div
		className="drop-shadow-lg drop-shadow-black text-center size-30 lg:size-38 flex flex-col items-center justify-center"
		style={{ backgroundImage: `url(${khung})`, backgroundSize: "cover" }}
	>
		<p className="text-white text-stroke font-HP font-extrabold text-4xl lg:text-5xl drop-shadow-[4px_4px_#1D2C48]">
			{children}
		</p>
		<p className="text-[#92ACFA] text-stroke font-Neusa text-md lg:text-l uppercase">
			{label}
		</p>
	</div>
);

export default function Countdown() {
	const deadline = useMemo(() => new Date("2025-07-30T23:59:59").getTime(), []);
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hrs: 0,
		mins: 0,
		secs: 0,
	});
	useEffect(() => {
		const timer = setInterval(() => {
			const now = new Date().getTime();
			const distance = deadline - now;

			if (distance > 0) {
				setTimeLeft({
					days: Math.floor(distance / (1000 * 60 * 60 * 24)),
					hrs: Math.floor((distance / (1000 * 60 * 60)) % 24),
					mins: Math.floor((distance / 1000 / 60) % 60),
					secs: Math.floor((distance / 1000) % 60),
				});
			} else {
				setTimeLeft({
					days: 0,
					hrs: 0,
					mins: 0,
					secs: 0,
				});
				clearInterval(timer);
			}
		}, 1000);

		return () => clearInterval(timer);
	}, [deadline]);
	return (
		<div className="flex justify-center gap-44 lg:justify-between items-center w-full max-w-4xl lg:max-w-7xl mx-auto mb-10">
			<div className="flex flex-col lg:flex-row justify-between items-center">
				<TimeBlock label="Ngày">{timeLeft.days}</TimeBlock>
				<TimeBlock label="Giờ">{timeLeft.hrs}</TimeBlock>
			</div>
			<div className="flex flex-col lg:flex-row justify-between items-center">
				<TimeBlock label="Phút">{timeLeft.mins}</TimeBlock>
				<TimeBlock label="Giây">{timeLeft.secs}</TimeBlock>
			</div>
		</div>
	);
}
