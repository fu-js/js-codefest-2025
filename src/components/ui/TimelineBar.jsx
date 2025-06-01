export default function TimelineBar() {
	return (
		<div className="md:px-60">
			<ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical z-[2]">
				<li>
					<div className="timeline-middle btn btn-circle btn-accent">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="size-5"
						>
							<path
								fillRule="evenodd"
								d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z"
								clipRule="evenodd"
							/>
						</svg>
					</div>

					<div
						className="timeline-start mb-14 mr-6 md:text-end text-xl"
						style={{ lineHeight: 2 }}
					>
						<time className="font-HP text-secondary md:text-2xl mb-2">
							13/08 - 31/08
						</time>
						<div
							className="text-4xl font-black text-primary font-Treacherous mb-6"
							style={{ lineHeight: 1.5 }}
						>
							Mở đơn đăng ký
						</div>
						<ul className="pl-5 space-y-3 list-disc marker:text-accent hidden lg:block md:text-l leading-[2rem] font-sans">
							<li>
								Các thí sinh đăng ký cá nhân hoặc theo đội (3 - 4 thành
								viên/đội).
							</li>
							<li>
								Đối với các thí sinh đăng ký tự do, BTC sẽ hỗ trợ ghép đội cho
								phù hợp.
							</li>
						</ul>
					</div>
					<hr className="bg-accent" />
				</li>
				<li>
					<hr className="bg-accent" />

					<div className="timeline-middle btn btn-circle btn-accent">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="size-5"
						>
							<path
								fillRule="evenodd"
								d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div
						className="timeline-end mb-14 ml-6 text-xl"
						style={{ lineHeight: 2 }}
					>
						<time className="font-HP text-secondary md:text-2xl mb-2">
							01/09 - 14/09
						</time>
						<div
							className="text-4xl font-black text-primary font-Treacherous mb-6"
							style={{ lineHeight: 1.5 }}
						>
							Giai đoạn Training
						</div>
						<ul className="pl-5 space-y-3 list-disc marker:text-accent hidden lg:block text-xl leading-[1.75rem] font-sans">
							<li>
								Sau khi kết thúc vòng đăng ký, các đội thi bước vào vòng
								training với sự hướng dẫn của những mentor dày dặn kinh nghiệm.
							</li>
							<li>
								Các đội thi sẽ được cung cấp hướng dẫn chi tiết về cách thức lập
								trình và tối ưu hóa con bot, cũng như chiến lược thu thập vật
								phẩm, và chiến đấu trên các bản đồ.
							</li>
							<li>
								Đồng thời các đội thi sẽ phát triển và tối ưu con bot của riêng
								mình.
							</li>
						</ul>
					</div>
					<hr className="bg-accent" />
				</li>
				<li>
					<hr className="bg-accent" />
					<div className="timeline-middle btn btn-circle btn-accent">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 26 24"
							fill="currentColor"
							className="size-5"
						>
							<path
								fillRule="evenodd"
								d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div
						className="timeline-start mr-6 md:text-end text-xl"
						style={{ lineHeight: 2 }}
					>
						<time className="font-HP text-secondary md:text-2xl mb-2">
							15/09/2024
						</time>
						<div
							className="text-4xl font-black text-primary font-Treacherous mb-6"
							style={{ lineHeight: 1.5 }}
						>
							Vòng Chung kết
						</div>
						<p className="pl-5 space-y-3 list-disc marker:text-accent font-sans hidden lg:block leading-[1.75rem]">
							<li>
								Các đội chơi tham gia thi đấu chính thức tại trường Đại học FPT
								Hà Nội.
							</li>
							<li>
								Đây là lúc các đội đem những con bot mình đã chuẩn bị để tranh
								tài cùng nhau trên chiến trường khốc liệt.
							</li>
						</p>
					</div>
					<hr className="bg-accent" />
				</li>
			</ul>
			{/* Mobile timeline
			<ul className="md:hidden timeline timeline-horizontal text-lg">
				<li>
					<div className="timeline-start">13/08 - 31/08</div>
					<div className="timeline-middle btn btn-circle btn-accent">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="size-5"
						>
							<path
								fillRule="evenodd"
								d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div className="timeline-end timeline-box">Mở đơn đăng ký</div>
					<hr className="bg-accent" />
				</li>
				<li>
					<hr className="bg-accent" />
					<div className="timeline-start">01/09 - 14/09</div>
					<div className="timeline-middle btn btn-circle btn-accent">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="size-5"
						>
							<path
								fillRule="evenodd"
								d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div className="timeline-end timeline-box">Giai đoạn Training</div>
					<hr className="bg-accent" />
				</li>
				<li>
					<hr className="bg-accent" />
					<div className="timeline-start">15/09/2024</div>
					<div className="timeline-middle btn btn-circle btn-accent">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 26 24"
							fill="currentColor"
							className="size-5"
						>
							<path
								fillRule="evenodd"
								d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div className="timeline-end timeline-box">Vòng chung két</div>
				</li>
			</ul> */}
		</div>
	);
}
