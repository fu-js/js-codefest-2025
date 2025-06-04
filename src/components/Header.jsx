import { cn } from "../lib/utils";
import font from "../assets/images/font.png";
import fontNoGlow from "../assets/images/font_noglow.png";
import { useState } from "react";
import useScroll from "./hooks/use-scroll";
const navItems1 = [
	{ to: "#homepage", label: "Trang chủ" },
	{ to: "#intro", label: "Giới thiệu" },
	{ to: "#information", label: "Thông tin" },
];

const navItems2 = [
	{ to: "#reason", label: "Quyền lợi" },
	{ to: "#timeline", label: "Timeline" },
	{ to: "#question", label: "Câu hỏi thường gặp" },
];
const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const scroll = useScroll();

	const handleOpen = () => setIsOpen(!isOpen);

	return (
		<>
			<header
				id="header"
				className={cn(
					"fixed top-0 left-0 right-0 p-4 z-[1000] uppercase font-bold text-xl transition-all duration-300",
					scroll > 100
						? "bg-white text-[#1D2C48] shadow-xs"
						: "bg-gradient-to-b from-[#0b1424] to-transparent text-white"
				)}
			>
				{/* Desktop header  */}
				<div className="hidden lg:block container mx-auto px-0 xl:px-6 font-HP tracking-wider">
					<nav className="flex items-center justify-between">
						{navItems1.map((item, index) => (
							<a
								key={index}
								href={item.to}
								className=" flex items-center justify-center stroke-2 stroke-primary cursor-pointer hover:text-secondary text-nowrap transition-colors duration-300 text-center"
							>
								{item.label}
							</a>
						))}

						<Logo glow={true} />
						{navItems2.map((item, index) => (
							<a
								key={index}
								href={item.to}
								className=" flex items-center justify-center stroke-2 stroke-primary cursor-pointer hover:text-secondary text-nowrap transition-colors duration-300 text-center"
							>
								{item.label}
							</a>
						))}
					</nav>
				</div>
				{/* Mobile header  */}
				<div className="lg:hidden container mx-auto flex justify-between items-center font-HP tracking-wider">
					<Logo glow={true} />
					<button className="btn btn-ghost" onClick={handleOpen}>
						{isOpen ? <CloseIcon /> : <MenuIcon />}
					</button>
				</div>

				{isOpen && (
					<nav
						className="flex flex-col items-center justify-center gap-4 font-HP tracking-wider z-10"
						onClick={handleOpen}
					>
						{navItems1.map((item, index) => (
							<a
								key={index}
								href={item.to}
								className=" flex items-center justify-center stroke-2 stroke-primary cursor-pointer hover:text-secondary transition-colors duration-300 text-center text-nowrap"
								onClick={handleOpen}
							>
								{item.label}
							</a>
						))}
						{navItems2.map((item, index) => (
							<a
								key={index}
								href={item.to}
								className=" flex items-center justify-center stroke-2 stroke-primary cursor-pointer hover:text-secondary transition-colors duration-300 text-nowrap"
								onClick={handleOpen}
							>
								{item.label}
							</a>
						))}
					</nav>
				)}
			</header>
		</>
	);
};

export default Header;

const Logo = ({ className, glow = true }) => {
	return (
		<div
			className={`flex items-center justify-center ${
				className ? className : ""
			}`}
		>
			<img src={glow ? font : fontNoGlow} alt="logo" className="w-24 md:w-36" />
		</div>
	);
};

const MenuIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="size-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
			/>
		</svg>
	);
};

const CloseIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="size-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M6 18 18 6M6 6l12 12"
			/>
		</svg>
	);
};
