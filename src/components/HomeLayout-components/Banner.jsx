import img1 from '../../assets/images/Vector 1.png'
import img2 from '../../assets/images/Vector 2.png'
const Banner = () => {
    return (
      <div style={{background:'linear-gradient(to top, #F8F9F4), #FFFFFF00'}}
       className="relative bg-[#F7F8F9] md:pb-24 pb-[150px] pt-16 overflow-hidden">
        {/* Top-right label */}
        <div className="absolute top-[450px] left-3 md:top-20 md:left-270">
          <button className="bg-[#BADFFA]  md:text-[16px] text-[10.29px]
           text-[#1C1C1C] border border-[#3FAEFF] rounded-r-full
            rounded-bl-full md:px-6 md:py-2 py-1 px-4 shadow-md
            ">
            College Readiness
          </button>
        </div>
  
        {/* Bottom-right label */}
        <div className="absolute bottom-37 right-10">
          <button className="bg-[#F4D06F] hidden md:block text-[#1C1C1C] border border-[#D6B33D] rounded-r-full rounded-bl-full px-6 py-2 shadow-md">
            Startup Launchpad
          </button>
        </div>
        <img className='mr-20 absolute md:h-[61.5px] md:w-[171.px] w-[122.7px] h-[44px]
          md:top-90 md:left-280 top-[400px] left-12 ' src={img1} alt="" />
        <img className='left-54 absolute   hidden md:block 
         bottom-36 ' src={img2} alt="" />
  
        {/* Center content */}
        <div className="text-center px-4">
          <h2 className="md:text-[70px] text-[26px] sm:text-6xl font-bold text-[#1C1C1C]">
            Launch Your Teens’
            <br />
            Entrepreneurship Journey
          </h2>
          <p className="text-[#475466] hidden md:block mt-6 text-[20px]">
            The gamified platform and community for high schoolers looking to launch
            <br />     
            their entrepreneurship and finance journeys..
          </p>
          <p className="text-[#475466] block md:hidden  mt-6 text-[16px] ">
            The gamified platform and community for high schoolers looking to launch
                
            their entrepreneurship and finance journeys..
          </p>
  
          {/* Buttons */}
          <div className="md:mt-10 mt-8 md:flex justify-center items-center gap-6">
            <button className="bg-[#04364A] text-white  font-semibold rounded-full 
            md:px-10 md:py-3 py-2  px-12 hover:bg-[#032c3f] transition">
              SUBSCRIBE
            </button>
            <button className="border mt-4 border-[#000] text-black font-semibold 
             rounded-full md:px-14 md:py-3 px-16 py-2 hover:bg-gray-100 transition">
              LOGIN
            </button>
          </div>
         <div className='absolute md:-left-205 md:top-100 top-3 right-1'>
         <button className="bg-[#E1AF7E]  text-[#1C1C1C] md:text-[16px] text-[10.8px]
         border border-[#9E7758] rounded-r-full rounded-bl-full 
         px-3 py-1 shadow-md">
          Investing Essentials
          </button>
         </div>
        </div>
  
        {/* Optional: Curved Arrow Decorations (add as <img src="..." /> or inline SVGs) */}
      </div>
    );
  };
  
  export default Banner;
  