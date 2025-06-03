import { useEffect, useState } from "react";
import { Search, Phone, Video, Info } from "lucide-react";

const faqs = [
	{
		id: 1,
		user: {
			name: "Tuyền Nhân Minh Quang",
			avatar: "/logo.webp",
			lastSeen: "2 phút trước",
			isOnline: true,
		},
		question: "Chủ đề cuộc thi CODEFEST 2025 là gì?",
		answers: [
			"CODEFEST 2025 được tổ chức với chủ đề: Từ thuở xa xưa, nơi rừng rậm hoang vu và thăm thẳm, lưu truyền một truyền thuyết kỳ bí về một mê cung cổ xưa, được che phủ bởi những tán cây ngàn năm bất diệt.",
			"Theo lời các bộ lạc bản địa, mê cung ấy không phải do con người dựng nên, mà là do những thế lực siêu nhiên kiến tạo để canh giữ một bí mật vĩ đại.",
			"Khát vọng khám phá đã thôi thúc một nhóm nhà thám hiểm trên khắp bốn phương dấn thân đi tìm lời giải. Thế nhưng khi bước vào mê cung, họ nhận ra mỗi bước đi là một thực tại khác, mỗi ngã rẽ là một thử thách của tâm trí và ý chí – bởi mê cung không ngừng biến hóa theo nỗi sợ và lòng người của những kẻ dám bước vào.",
			"Trải qua hành trình dài đầy thử thách, họ đã tìm thấy chiếc chìa khóa để thoát khỏi mê cung và giải mã điều được cất giấu bấy lâu. Bí mật ấy không phải kho báu hay tri thức cổ xưa – mà là chân lý: vũ khí mạnh nhất giúp loài người vượt qua mọi mê cung, chính là sức mạnh của sự đồng lòng.",
		],
	},
	{
		id: 2,
		user: {
			name: "Uchiha Sakana",
			avatar: "/logo.webp",
			lastSeen: "5 phút trước",
			isOnline: true,
		},
		question: "Không biết code có thể tham gia không?",
		answers: [
			"Cuộc thi không đặt ra yêu cầu cho người tham gia về việc phải có kiến thức về nền tảng hoặc ngôn ngữ lập trình cụ thể. Tuy nhiên, để tham gia, thí sinh nên có kiến thức Java căn bản (đây là ngôn ngữ chính dùng để điều khiển bot trong các vòng thi đấu).",
			"Trong quá trình tham gia cuộc thi, các đội sẽ được giới thiệu và hướng dẫn những kiến thức chuyên môn cần thiết để điều khiển những bot của mình.",
		],
	},
	{
		id: 3,
		user: {
			name: "Goku",
			avatar: "/logo.webp",
			lastSeen: "10 phút trước",
			isOnline: false,
		},
		question: "Các đội thi sẽ được training như thế nào?",
		answers: [
			"Trong quá trình tham gia cuộc thi, các đội sẽ được giới thiệu và hướng dẫn những kiến thức chuyên môn cần thiết để điều khiển những bot của mình. Những buổi training sẽ diễn ra online.",
			"Những buổi training đều vô cùng cần thiết để đảm bảo các đội chơi có thể phát huy được khả năng tốt nhất của mỗi đội. Vì vậy BTC khuyến khích tất cả đội chơi nên tham dự đầy đủ.",
		],
	},
	{
		id: 4,
		user: {
			name: "Thuý Kiều",
			avatar: "/logo.webp",
			lastSeen: "15 phút trước",
			isOnline: false,
		},
		question:
			"Các đội thi làm thế nào khi gặp khó khăn trong quá trình dự thi?",
		answers: [
			"Các đội sẽ được hướng dẫn và giải đáp thắc mắc bởi những mentor dày dặn kinh nghiệm. Mỗi đội cũng sẽ có 1 takecare là người bạn đồng hành, nhắc nhở và đốc thúc tinh thần để đảm bảo mọi thí sinh đều có thể tiếp cận và hoàn thành tốt các thử thách của cuộc thi.",
			"Khi có bất cứ vấn đề gì, các đội thi có thể liên hệ trực tiếp qua takecare team hoặc qua kênh hỗ trợ đội thi của BTC.",
		],
	},
	{
		id: 5,
		user: {
			name: "Quân đội Hoa Kỳ",
			avatar: "/logo.webp",
			lastSeen: "1 giờ trước",
			isOnline: false,
		},
		question: "Thí sinh tham gia có quyền lợi gì?",
		answers: [
			"Tham gia CODEFEST 2025, thí sinh đến từ khắp các trường đại học trên toàn miền Bắc sẽ có cơ hội làm quen và phát triển tư duy lập trình, tìm hiểu sâu về các thuật toán điều khiển bot trong môi trường cạnh tranh sáng tạo và đầy cảm hứng.",
			"Với quy mô mở rộng, CODEFEST 2025 hứa hẹn mang đến một sân chơi công nghệ đa dạng và chuyên nghiệp hơn bao giờ hết, giúp thí sinh không chỉ giao lưu, học hỏi với các bạn cùng đam mê từ nhiều tỉnh thành, mà còn được dẫn dắt bởi đội ngũ cố vấn dày dặn kinh nghiệm từ BTC.",
			"Bên cạnh những trải nghiệm lập trình thú vị, thí sinh còn được trau dồi kỹ năng làm việc nhóm và tích lũy những kỷ niệm đáng nhớ trong hành trình khám phá bản thân qua từng thử thách của cuộc thi.",
			"Các đội xuất sắc lọt vào vòng Chung kết sẽ nhận được nhiều quyền lợi hấp dẫn từ Ban Tổ Chức như: hỗ trợ đưa đón hoàn toàn miễn phí tới Trường Đại học FPT Hà Nội, một bữa ăn miễn phí và phần quà đặc biệt dành cho mỗi đội tham gia.",
			"Bên cạnh những trận đấu kịch tính, các đội còn có cơ hội hòa mình vào không gian sự kiện sôi động với các gian hàng độc đáo, hoạt động tương tác thú vị và những tiết mục văn nghệ đặc sắc. Đây không chỉ là nơi để thi đấu, mà còn là dịp để trải nghiệm, kết nối và tạo nên những kỷ niệm khó quên cùng cộng đồng đam mê công nghệ.",
		],
	},
];

export function MessengerFAQ() {
	const [selectedChat, setSelectedChat] = useState(faqs[0]);
	const [searchTerm, setSearchTerm] = useState("");
	const [isMobileView, setIsMobileView] = useState(false);
	const [showChatList, setShowChatList] = useState(true);

	useEffect(() => {
		const checkScreenSize = () => {
			setIsMobileView(window.innerWidth < 768);
			if (window.innerWidth >= 768) {
				setShowChatList(true);
			}
		};

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);
		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	const filteredFaqs = faqs.filter(
		(faq) =>
			faq.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			faq.question.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleChatSelect = (faq) => {
		setSelectedChat(faq);
		if (isMobileView) {
			setShowChatList(false);
		}
	};

	return (
		<div className="flex h-[80vh] w-md md:w-3xl lg:w-4xl bg-base-100 shadow-2xl rounded-2xl overflow-hidden border border-primary">
			{/* Sidebar */}
			<div
				className={`${
					isMobileView ? (showChatList ? "w-full" : "hidden") : "w-80"
				} border-r border-primary flex flex-col md:w-80`}
			>
				{/* Sidebar Header */}
				<div className="p-3 md:p-4 border-b border-primary">
					<h2 className="text-lg md:text-xl font-semibold text-base-content mb-2 md:mb-3">
						CODEFEST 2025 FAQ
					</h2>
					<div className="relative">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/70 w-4 h-4" />
						<input
							type="text"
							placeholder="Tìm kiếm câu hỏi..."
							className="w-full pl-10 pr-4 py-2 bg-base-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</div>
				</div>

				{/* Chat List */}
				<div className="flex-1 overflow-y-auto">
					{filteredFaqs.map((faq) => (
						<div
							key={faq.id}
							className={`flex items-center p-3 md:p-4 hover:bg-base-300 cursor-pointer transition-colors active:bg-primary/70 ${
								selectedChat.id === faq.id
									? "bg-primary/50 border-r-2 border-primary"
									: ""
							}`}
							onClick={() => handleChatSelect(faq)}
						>
							<div className="relative">
								<img
									src={faq.user.avatar}
									alt={faq.user.name}
									className="w-12 h-12 rounded-full object-cover"
								/>
								{faq.user.isOnline && (
									<div className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-primary"></div>
								)}
							</div>
							<div className="ml-3 flex-1 min-w-0">
								<div className="flex items-center justify-between">
									<h3 className="text-sm font-medium text-base-content truncate">
										{faq.user.name}
									</h3>
									<span className="text-xs text-base-content/70">
										{faq.user.lastSeen}
									</span>
								</div>
								<p className="text-sm text-base-content truncate mt-1">
									{faq.question}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Chat Area */}
			<div
				className={`${
					isMobileView ? (showChatList ? "hidden" : "w-full") : "flex-1"
				} flex flex-col md:flex-1`}
			>
				{/* Chat Header */}
				<div className="p-3 md:p-4 border-b border-primary bg-base-100">
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							{isMobileView && (
								<button
									onClick={() => setShowChatList(true)}
									className="mr-3 p-1 text-gray-600 hover:text-gray-800"
								>
									<svg
										className="w-6 h-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M15 19l-7-7 7-7"
										/>
									</svg>
								</button>
							)}
							<div className="relative">
								<img
									src={selectedChat.user.avatar}
									alt={selectedChat.user.name}
									className="w-10 h-10 rounded-full object-cover"
								/>
								{selectedChat.user.isOnline && (
									<div className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-primary"></div>
								)}
							</div>
							<div className="ml-3">
								<h3 className="text-sm font-medium text-base-content">
									{selectedChat.user.name}
								</h3>
								<p className="text-xs text-base-content/70">
									{selectedChat.user.isOnline
										? "Đang hoạt động"
										: selectedChat.user.lastSeen}
								</p>
							</div>
						</div>
						<div className="flex items-center space-x-2">
							<button className="p-2 text-base-content/70 hover:text-primary-content rounded-full hover:bg-primary">
								<Phone className="w-5 h-5" />
							</button>
							<button className="p-2 text-base-content/70 hover:text-primary-content rounded-full hover:bg-primary">
								<Video className="w-5 h-5" />
							</button>
							<button className="p-2 text-base-content/70 hover:text-primary-content rounded-full hover:bg-primary">
								<Info className="w-5 h-5" />
							</button>
						</div>
					</div>
				</div>

				{/* Messages */}
				<div className="flex-1 overflow-y-auto p-4 space-y-4 bg-base-300">
					{/* User Question */}
					<div className="flex justify-end">
						<div className="flex items-end space-x-2 max-w-[280px] md:max-w-xs lg:max-w-md">
							<div className="text-primary-content bg-primary border border-primary rounded-2xl rounded-br-md px-3 md:px-4 py-2">
								<p className="text-sm leading-relaxed">
									{selectedChat.question}
								</p>
							</div>
							<img
								src={selectedChat.user.avatar}
								alt={selectedChat.user.name}
								className="w-5 h-5 md:w-6 md:h-6 rounded-full object-cover flex-shrink-0"
							/>
						</div>
					</div>

					{/* Admin Answers */}
					{selectedChat.answers.map((answer, index) => (
						<div key={index} className="flex justify-start">
							<div className="flex items-end space-x-2 max-w-[280px] md:max-w-xs lg:max-w-md">
								<img
									src="/logo.webp"
									alt="CODEFEST Admin"
									className="w-5 h-5 md:w-6 md:h-6 rounded-full object-cover flex-shrink-0"
								/>
								<div className="bg-base-100 border border-primary rounded-2xl rounded-bl-md px-3 md:px-4 py-2 shadow-sm">
									<p className="text-sm text-base-content leading-relaxed">
										{answer}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Message Input */}
				<div className="p-3 md:p-4 border-t border-primary bg-base-100">
					<div className="flex items-center space-x-2">
						<div className="flex-1 bg-base-300 rounded-full px-3 md:px-4 py-2">
							<input
								type="text"
								placeholder="Nhập câu hỏi của bạn..."
								className="w-full bg-transparent text-sm focus:outline-none"
								disabled
							/>
						</div>
						<button
							className="p-2 text-secondary hover:text-primary disabled:opacity-50 touch-manipulation"
							disabled
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
