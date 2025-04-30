import LearnFinanceImages from "./LearmFinanceImages";
const LearnFinance = () => {
    return (
        <div className='w-11/12 mx-auto my-16'>
            <div className="text-center">
                <h2 className="text-4xl font-bold hidden md:block text-center">
                    Learn Finance & Entrepreneurship from <br /> Industry Experts & Student Entrepreneurs
                </h2>
                <h2 className="text-2xl block md:hidden font-bold text-center">
                    Learn Finance & Entrepreneurship from Industry Experts & Student Entrepreneurs
                </h2>
                <p className="text-[#180F1F] md:text-[20px] text-[16px] text-center font-semibold mt-4">
                    Start Your Journey Towards new knowledge and skills.
                </p>
                <button className="bg-[#062A44] py-2 px-14 md:px-16 md:py-3 text-16px]  text-white font-bold md:py-2 md:px-6 rounded-full mt-4">
                    SUBSCRIBE
                </button>
            </div>
            
            {/* Render the image grid component below */}
            <LearnFinanceImages />
        </div>
    );
};

export default LearnFinance;
