import nut from "/images/khung.png";

const LongBtn = ({ children }) => {
	return (
		<div className="relative w-44 sm:w-52 md:w-64 font-HP text-lg md:text-2xl text-[#ffffff] font-bold uppercase animate-bounce-linear">
			<img src={nut} alt="nut"/>
			<span className="sm:text-lg text-[16px] absolute text-center top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 z-10 ">
				{children}
			</span>
		</div>
	);
};

export default LongBtn;
