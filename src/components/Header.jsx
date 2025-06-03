import { cn } from "../lib/utils"; // Assuming you have a utility function for classnames
import font from "../assets/images/font.png";
// import { motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";
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
						: "bg-gradient-to-b from-[#1D2C48] to-transparent text-white"
				)}
			>
				{/* Desktop header  */}
				<div className="hidden md:block container mx-auto font-HP tracking-wider">
					<nav className="grid grid-cols-7">
						{navItems1.map((item, index) => (
							<a
								key={index}
								href={item.to}
								className="col-span-1 flex items-center justify-center stroke-2 stroke-primary cursor-pointer hover:text-secondary transition-colors duration-300 text-center"
							>
								{item.label}
							</a>
						))}

						<Logo className={"md:col-span-1"} />
						{navItems2.map((item, index) => (
							<a
								key={index}
								href={item.to}
								className="col-span-1 flex items-center justify-center stroke-2 stroke-primary cursor-pointer hover:text-secondary transition-colors duration-300 text-center"
							>
								{item.label}
							</a>
						))}
					</nav>
				</div>
				{/* Mobile header  */}
				<div className="md:hidden container mx-auto flex justify-between items-center font-HP tracking-wider">
					<Logo />
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
								className="col-span-1 flex items-center justify-center stroke-2 stroke-primary cursor-pointer hover:text-secondary transition-colors duration-300 text-center"
								onClick={handleOpen}
							>
								{item.label}
							</a>
						))}
						{navItems2.map((item, index) => (
							<a
								key={index}
								href={item.to}
								className="col-span-1 flex items-center justify-center stroke-2 stroke-primary cursor-pointer hover:text-secondary transition-colors duration-300"
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

const Logo = ({ className }) => {
	return (
		<div
			className={`flex items-center justify-center ${
				className ? className : ""
			}`}
		>
			<img src={font} alt="logo" className="w-36 md:w-[256px]" />
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
