import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";
const ChevronDown = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className={cn("w-6 h-6", className)}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m19.5 8.25-7.5 7.5-7.5-7.5"
		/>
	</svg>
);

const faqData = [
	{
		id: 1,
		question: "Chủ đề cuộc thi CodeFest là gì?",
		answer: `		<ul class="pl-5 space-y-3 list-disc marker:text-secondary">
			<li>
				CODEFEST 2024 được tổ chức với chủ đề: Nhất quỷ, nhì ma, thứ ba học trò!
				Mùa hè đã tới, cũng là lúc những cuộc vui chơi bắt đầu.
				<br />
				Đám trẻ nhỏ hiếu động nghịch ngợm khởi động chuỗi ngày quậy phá không
				hồi kết của mình.
			</li>

			<li>
				Bạn sẽ hóa thân thành đứa trẻ hồn nhiên, ngây thơ, cùng chúng bạn đắm
				chìm vào những ngày hè sôi động,
				<br />
				đưa con bot của mình tham gia chiến đấu và thu thập vật phẩm, vượt qua
				các bản đồ, và giành chiến thắng.
			</li>
			<li>
				Cuộc thi CODEFEST 2024 mở cửa chào đón tất cả mọi người, dù bạn là người
				dày dặn kinh nghiệm hay chỉ mới bắt đầu học lập trình, <br />
				chỉ cần có kiến thức cơ bản về lập trình và tư duy chiến thuật là đã có
				thể tự tin tham gia chinh phục cuộc thi.
			</li>
		</ul>`,
	},
	{
		id: 2,
		question: "Không biết code có thể tham gia không?",
		answer: `		<ul class="pl-5 space-y-3 list-disc marker:text-secondary">
			<li>
				Cuộc thi không đặt ra yêu cầu cho người tham gia về việc phải có kiến
				thức về nền tảng hoặc ngôn ngữ lập trình cụ thể.
			</li>
			<li>
				Tuy nhiên, để tham gia, thí sinh nên có kiến thức Java căn bản <br />
				(đây là ngôn ngữ chính dùng để điều khiển bot trong các vòng thi).
			</li>
		</ul>`,
	},
	{
		id: 3,
		question: "Các đội sẽ được training như thế nào?",
		answer: `		<ul class="pl-5 space-y-3 list-disc marker:text-secondary">
			<li>
				Trong quá trình tham gia cuộc thi, các đội sẽ được giới thiệu và hướng
				dẫn <bt />
				những kiến thức chuyên môn cần thiết để điều khiển những con bot của
				mình.
			</li>
			<li>
				Những buổi training đều vô cùng cần thiết để đảm bảo các thí sinh có thể
				phát huy được khả năng tốt nhất của mình.
				<br /> Vì vậy BTC khuyến khích tất cả đội chơi nên tham dự đầy đủ.
			</li>
		</ul>`,
	},
	{
		id: 4,
		question: "Làm thế nào khi gặp khó khăn trong quá trình dự thi?",
		answer: `		<ul class="pl-5 space-y-3 list-disc marker:text-secondary">
			<li>
				Các đội sẽ được hướng dẫn và giải đáp thắc mắc bởi những mentor dày dặn
				kinh nghiệm. <br />
				Mỗi đội cũng sẽ có 1 takecare là người bạn đồng hành, nhắc nhở và đốc
				thúc tinh thần để đảm bảo mọi thí sinh đều có thể
				<br />
				tiếp cận và hoàn thành tốt các thử thách của cuộc thi.
			</li>
			<li>
				Khi có bất cứ vấn đề gì, các đội thi có thể liên hệ trực tiếp qua
				takecare team <br />
				hoặc qua kênh hỗ trợ đội thi của BTC.
			</li>
		</ul>`,
	},
	{
		id: 5,
		question: "Thí sinh tham gia có quyền lợi gì?",
		answer: `		<ul class="pl-5 space-y-3 list-disc marker:text-secondary">
			<li>
				CODEFEST là một trải nghiệm chưa từng có tại Đại học FPT, nơi các thí
				sinh sẽ được tiếp xúc với một cuộc thi theo phong cách mới
			</li>
			<li>
				Lập trình bot để tham gia vào những “đấu trường”, chiến đấu, thu thập
				vật phẩm để tích lũy điểm và giành chiến thắng.
			</li>
			<li>
				Đến với cuộc thi, các thí sinh sẽ có cơ hội làm quen và nâng cao hiểu
				biết, mở rộng tư duy lập trình, <br />
				tìm hiểu thêm về các thuật toán và cách điều khiển bot.
			</li>
			<li>
				Với sự hướng dẫn tận tình từ đội ngũ BTC giàu kinh nghiệm, CODEFEST
				không chỉ là nơi để các thí sinh tạo dựng những kỷ niệm đáng nhớ
				<br /> và rèn luyện kỹ năng làm việc nhóm mà còn là cơ hội tuyệt vời để
				nâng cao kiến thức chuyên môn.
			</li>
		</ul>`,
	},
];

function FAQItem({ item, isOpen, onToggle }) {
	return (
		<motion.div
			className="border border-primary rounded-lg overflow-hidden"
			initial={false}
			animate={{
				backgroundColor: isOpen
					? "var(--color-base-100)"
					: "var(--color-base-300)",
			}}
			transition={{ duration: 0.2 }}
		>
			<motion.button
				className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-primary transition-colors duration-200"
				onClick={onToggle}
				whileHover={{ backgroundColor: "var(--color-base-200)" }}
				whileTap={{ scale: 0.995 }}
			>
				<h3 className="text-md md:text-lg font-semibold font-HP tracking-wider text-secondary pr-4 uppercase">
					{item.question}
				</h3>
				<motion.div
					animate={{ rotate: isOpen ? 180 : 0 }}
					transition={{ duration: 0.3, ease: "easeInOut" }}
					className="flex-shrink-0"
				>
					<ChevronDown className="w-5 h-5 text-primary" />
				</motion.div>
			</motion.button>

			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{
							height: { duration: 0.3, ease: "easeInOut" },
							opacity: { duration: 0.2, ease: "easeInOut" },
						}}
						className="overflow-hidden"
					>
						<div className="px-6 pb-4">
							<motion.p
								initial={{ y: -10 }}
								animate={{ y: 0 }}
								exit={{ y: -10 }}
								transition={{ duration: 0.2 }}
								className="text-base-content text-sm md:text-lg leading-relaxed font-DenkOne"
								dangerouslySetInnerHTML={{ __html: item.answer }}
							></motion.p>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}

export default function FAQ() {
	const [openItems, setOpenItems] = useState(new Set());

	const toggleItem = (id) => {
		setOpenItems((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(id)) {
				newSet.delete(id);
			} else {
				newSet.add(id);
			}
			return newSet;
		});
	};

	return (
		<div className="min-w-sm max-w-sm md:max-w-md lg:min-w-2xl lg:max-w-2xl xl:min-w-4xl xl:max-w-4xl mx-auto z-[1000]">
			<motion.div
				className="space-y-4"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.2 }}
			>
				{faqData.map((item, index) => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: index * 0.1 }}
					>
						<FAQItem
							item={item}
							isOpen={openItems.has(item.id)}
							onToggle={() => toggleItem(item.id)}
						/>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}
