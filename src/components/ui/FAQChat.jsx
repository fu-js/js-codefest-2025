import { useEffect, useState } from "react";
import hero from "../../assets/images/hero2.webp";
import logo from "/logo.webp";

const faqs = [
	{
		question: `Chủ đề cuộc thi CODEFEST 2025 là gì?`,
		answers: [
			`CODEFEST 2025 được tổ chức với chủ đề: Từ thuở xa xưa, nơi rừng rậm hoang vu và thăm thẳm, lưu truyền một truyền thuyết kỳ bí về một mê cung cổ xưa, được che phủ bởi những tán cây ngàn năm bất diệt.`,
			`Theo lời các bộ lạc bản địa, mê cung ấy không phải do con người dựng nên, mà là do những thế lực siêu nhiên kiến tạo để canh giữ một bí mật vĩ đại.`,
			`Khát vọng khám phá đã thôi thúc một nhóm nhà thám hiểm trên khắp bốn phương dấn thân đi tìm lời giải. Thế nhưng khi bước vào mê cung, họ nhận ra mỗi bước đi là một thực tại khác, mỗi ngã rẽ là một thử thách của tâm trí và ý chí – bởi mê cung không ngừng biến hóa theo nỗi sợ và lòng người của những kẻ dám bước vào.`,
			`Trải qua hành trình dài đầy thử thách, họ đã tìm thấy chiếc chìa khóa để thoát khỏi mê cung và giải mã điều được cất giấu bấy lâu. Bí mật ấy không phải kho báu hay tri thức cổ xưa – mà là chân lý: vũ khí mạnh nhất giúp loài người vượt qua mọi mê cung, chính là sức mạnh của sự đồng lòng.`,
		],
	},
	{
		question: `Không biết code có thể tham gia không?`,
		answers: [
			`Cuộc thi không đặt ra yêu cầu cho người tham gia về việc phải có kiến thức về nền tảng hoặc ngôn ngữ lập trình cụ thể. Tuy nhiên, để tham gia, thí sinh nên có kiến thức Java căn bản (đây là ngôn ngữ chính dùng để điều khiển bot trong các vòng thi đấu).`,
			`Trong quá trình tham gia cuộc thi, các đội sẽ được giới thiệu và hướng dẫn những kiến thức chuyên môn cần thiết để điều khiển những bot của mình.`,
		],
	},
	{
		question: `Các đội thi sẽ được training như thế nào?`,
		answers: [
			`Trong quá trình tham gia cuộc thi, các đội sẽ được giới thiệu và hướng dẫn những kiến thức chuyên môn cần thiết để điều khiển những bot của mình. Những buổi training sẽ diễn ra online.`,
			`Những buổi training đều vô cùng cần thiết để đảm bảo các đội chơi có thể phát huy được khả năng tốt nhất của mỗi đội. Vì vậy BTC khuyến khích tất cả đội chơi nên tham dự đầy đủ.`,
		],
	},
	{
		question: `Các đội thi làm thế nào khi gặp khó khăn trong quá trình dự thi?`,
		answers: [
			`Các đội sẽ được hướng dẫn và giải đáp thắc mắc bởi những mentor dày dặn kinh nghiệm. Mỗi đội cũng sẽ có 1 takecare là người bạn đồng hành, nhắc nhở và đốc thúc tinh thần để đảm bảo mọi thí sinh đều có thể tiếp cận và hoàn thành tốt các thử thách của cuộc thi.`,
			`Khi có bất cứ vấn đề gì, các đội thi có thể liên hệ trực tiếp qua takecare team hoặc qua kênh hỗ trợ đội thi của BTC.`,
		],
	},
	{
		question: `Thí sinh tham gia có quyền lợi gì?`,
		answers: [
			`Tham gia CODEFEST 2025, thí sinh đến từ khắp các trường đại học trên toàn miền Bắc sẽ có cơ hội làm quen và phát triển tư duy lập trình, tìm hiểu sâu về các thuật toán điều khiển bot trong môi trường cạnh tranh sáng tạo và đầy cảm hứng.`,
			`Với quy mô mở rộng, CODEFEST 2025 hứa hẹn mang đến một sân chơi công nghệ đa dạng và chuyên nghiệp hơn bao giờ hết, giúp thí sinh không chỉ giao lưu, học hỏi với các bạn cùng đam mê từ nhiều tỉnh thành, mà còn được dẫn dắt bởi đội ngũ cố vấn dày dặn kinh nghiệm từ BTC.`,
			`Bên cạnh những trải nghiệm lập trình thú vị, thí sinh còn được trau dồi kỹ năng làm việc nhóm và tích lũy những kỷ niệm đáng nhớ trong hành trình khám phá bản thân qua từng thử thách của cuộc thi.`,
			`Các đội xuất sắc lọt vào vòng Chung kết sẽ nhận được nhiều quyền lợi hấp dẫn từ Ban Tổ Chức như: hỗ trợ đưa đón hoàn toàn miễn phí tới Trường Đại học FPT Hà Nội, một bữa ăn miễn phí và phần quà đặc biệt dành cho mỗi đội tham gia.`,
			`Bên cạnh những trận đấu kịch tính, các đội còn có cơ hội hòa mình vào không gian sự kiện sôi động với các gian hàng độc đáo, hoạt động tương tác thú vị và những tiết mục văn nghệ đặc sắc. Đây không chỉ là nơi để thi đấu, mà còn là dịp để trải nghiệm, kết nối và tạo nên những kỷ niệm khó quên cùng cộng đồng đam mê công nghệ.`,
		],
	},
];

export function FAQChat() {
	const [messages, setMessages] = useState([]);
	const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

	useEffect(() => {
		// Create all messages from FAQs
		const allMessages = [];

		faqs.forEach((faq, faqIndex) => {
			// Add question
			allMessages.push({
				id: `q-${faqIndex}`,
				type: "question",
				content: faq.question,
			});

			// Add all answers for this question
			faq.answers.forEach((answer, answerIndex) => {
				allMessages.push({
					id: `a-${faqIndex}-${answerIndex}`,
					type: "answer",
					content: answer,
				});
			});
		});

		// Display messages progressively
		const displayMessages = () => {
			if (currentMessageIndex < allMessages.length) {
				setMessages((prev) => [...prev, allMessages[currentMessageIndex]]);
				setCurrentMessageIndex((prev) => prev + 1);
			}
		};

		// Start displaying messages after a short delay
		const timer = setTimeout(
			displayMessages,
			currentMessageIndex === 0 ? 100 : 500
		);

		return () => clearTimeout(timer);
	}, [currentMessageIndex]);

	return (
		<div className="w-xl mx-auto bg-base-100 shadow-lg card">
			{/* Chat Header */}
			<div className="border-b border-success p-4">
				<div className="flex items-center space-x-3">
					<img src={logo} alt="Dragon" className="w-12" />
					<div>
						<h3 className="font-semibold font-DenkOne">CODEFEST 2025 FAQ</h3>
						<p className="badge badge-outline badge-success">Online</p>
					</div>
				</div>
			</div>

			{/* Chat Messages */}
			<div className="h-[70vh] overflow-y-auto p-4 space-y-4">
				{messages.length === 0 && (
					<div className="text-center text-secondary py-8">
						<p className="text-lg font-medium mb-2">
							Chào mứng đến với CODEFEST 2025 FAQ!
						</p>
						<p className="text-sm">Đợi tớ tí...</p>
					</div>
				)}

				{messages.map((message) => (
					<div
						key={message.id}
						className={`chat font-sans ${
							message.type === "question" ? "chat-end" : "chat-start"
						}`}
					>
						<div className="chat-image avatar">
							<div className="w-10">
								<img
									alt="Chat Avatar"
									src={message.type === "question" ? hero : logo}
								/>
							</div>
						</div>
						<div
							className={`chat-bubble font-sans leading-relaxed ${
								message.type === "question"
									? "bg-primary text-primary-content"
									: "bg-success text-success-content"
							}`}
						>
							{message.content}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
