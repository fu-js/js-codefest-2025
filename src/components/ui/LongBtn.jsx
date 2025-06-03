import nut from "../../assets/images/khung.png";

const LongBtn = ({ children }) => {
	return (
		<div className="relative w-64 font-HP text-2xl text-[#ffffff] font-bold uppercase">
			<img src={nut} alt="nut" />
			<span className="absolute text-center top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 z-10">
				{children}
			</span>
		</div>
	);
};

export default LongBtn;
