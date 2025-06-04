// src/components/footer.jsx
const Footer = () => {
	return (
		<footer className="bg-base-100 bg-cover bg-center font-DenkOne px-4 py-8 overflow-hidden border-t-2 border-primary text-white stroke-1 stroke-primary z-[1000]">
			<div className="flex flex-col lg:flex-row gap-6 lg:gap-16 justify-center items-center container mx-auto">
				<a
					href="https://www.facebook.com/fu.jsclub"
					target="_blank"
					rel="noreferrer"
					className="mb-3 md:mb-0"
					title="Fanpage"
				>
					<img
						src="/logo.webp"
						alt="logo"
						className="aspect-square rounded-full object-cover w-32 shadow-lg"
					/>
				</a>
				<div className="flex flex-col gap-4">
					<div className="flex lg:flex-row flex-col items-center gap-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="size-9"
						>
							<path
								fillRule="evenodd"
								d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
								clipRule="evenodd"
							/>
						</svg>
						<a
							href="https://goo.gl/maps/AYC7XBBsCnfwXKQj9"
							target="_blank"
							rel="noreferrer"
							className="text-nowrap lg:text-left text-center"
						>
							Đại học FPT, Khu Công nghệ cao Hòa Lạc, <br />
							KM 29 Đại lộ Thăng Long, Hà Nội, Việt Nam
						</a>
					</div>
					<div className="flex lg:flex-row flex-col items-center gap-3 lg:ms-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="size-8"
						>
							<path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
							<path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
						</svg>
						<a href="mailto:jsclub.fpt@gmail.com">jsclub.fpt@gmail.com</a>
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<div className="flex lg:flex-row flex-col items-center gap-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="size-8"
						>
							<path
								fillRule="evenodd"
								d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
								clipRule="evenodd"
							/>
						</svg>
						<div className="lg:text-left text-center">
							<p>Trưởng ban tổ chức:</p>
							<p>Lý Ngọc Mai</p>
						</div>
					</div>
					<div className="flex lg:flex-row flex-col items-center gap-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="size-8"
						>
							<path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
							<path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
						</svg>
						<a href="mailto:mail@jsclub.dev">ngmai23.work@gmail.com</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
