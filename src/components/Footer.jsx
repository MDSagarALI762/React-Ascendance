import { FaArrowRight } from "react-icons/fa";
import star from '../assets/images/Group 51.png'
import star2 from '../assets/images/Group 52.png'
import frame from '../assets/images/Frame 299.png'
import star3 from '../assets/images/Group 64.png'
import star4 from '../assets/images/Group 65.png'
const Footer = () => {
    return (
        <div className="bg-[#000000] pt-16 py-10">
          <div className="w-11/12 md:w-10/12 mx-auto">
          <div className="bg-[#00275A] rounded-xl relative">
            <img className="absolute hidden md:block top-8 -left-12" src={star} alt="" />
            <img className="absolute block md:hidden -top-9 left-4" src={star3} alt="" />
            <div className="md:grid grid-cols-12 justify-center
             items-center pt-8 ps-2  md:p-8 md:ps-14">
            <div className="col-span-5">
            <h2 className="text-[20px] md:text-[30px] text-white 
             font-bold">Kickstart your journey with Ascendance Venture
            </h2>  
                </div>
                <div className="col-span-7">
<div className="md:flex gap-6 justify-center items-center">
<button className="text-[12px] flex items-center mt-5 mb-6 py-2 px-5 bg-[#E1AF7E] rounded-full 
font-semibold">Submit Application <FaArrowRight></FaArrowRight></button>
  <h2 className="font-bold text-2xl md:text-[40px] pb-6 text-white">+1 415 910 3879</h2>
</div>
              </div>
                </div> 
                <img className="absolute hidden md:block -bottom-13 -right-17" src={star2} alt="" />
                <img className="absolute block md:hidden 
                -bottom-13 -right-4" src={star4} alt="" />
            
            </div>
          </div>
        <div className="w-11/12 mx-auto mt-8 md:mt-16">
        <div className="md:grid grid-cols-12 gap-16">
<div className="col-span-6">
<img className="w-77px h-[65.11px] md:w-149px] md:h-[126px]" src={frame} alt="" />
<div className="md:grid grid-cols-6 mt-4 md:mt-8 gap-4">
   <div className="col-span-4">
   <input className="border-[0.75px] border-[#ABABAB] 
   placeholder-white rounded-full text-white w-full py-1 ps-4 placeholder:text-[10px]"
    type="text" placeholder="Your E-mail here" />
   </div>
   <div className="hidden md:block col-span-2">
    <button className="bg-[#E1AF7E] flex items-center gap-1 py-2 px-6 rounded-full text-[12px]">
        Send Message
    <FaArrowRight></FaArrowRight>    </button>
   </div>
</div>
</div>
<div className="col-span-6 mt-10 md:mt-0">
    <div className="grid md:grid-cols-6 grid-cols-2 gap-8">
{/**footer list item 1 */}
<div className="md:col-span-2 col-span-1 flex flex-col gap-2 md:gap-6">
<h2 className="text-[16px] font-bold text-[#E1AF7E]">Contact Us</h2>
    <p className="text-white md:text-[14px] text-[12.76px] pt-2">
    123 Quired Street Vectoria
    Road, New York
    </p>
    <p className="text-white md:text-[14px] text-[12.76px]">
    +180 385 2854
    +758 6987 478
    </p>
    <p className="text-white md:text-[14px] text-[12.76px]">
    Ascendance@gmail.com
    </p>
</div>
{/**footer list item 2 */}
<div className="md:col-span-2 col-span-1">
<h2 className="text-[16px] font-bold text-[#E1AF7E]">Use Full Links</h2>
  <div className="pt-4 md:pt-8 flex flex-col gap-2">
  <a href="" className="text-white md:text-[14px] text-[12.76px]">About Us</a>
  <a href="" className="text-white  md:text-[14px] text-[12.76px]">Faq Questions</a>
  <a href="" className="text-white md:text-[14px] text-[12.76px]">Privacy Policy</a>
  <a href="" className="text-white md:text-[14px] text-[12.76px]">Contact Us</a>
  </div>
</div>
{/**footer list item 3 */}
<div className="md:col-span-2 col-span-1">
<h2 className="text-[16px] font-bold text-[#E1AF7E]">Pages</h2>
  <div className="pt-4 md:pt-8 flex flex-col gap-2">
  <a href="" className="text-white md:text-[14px] text-[12.76px]">Basics</a>
  <a href="" className="text-white  md:text-[14px] text-[12.76px]">Timeline</a>
  <a href="" className="text-white md:text-[14px] text-[12.76px]">Testimonials</a>
  <a href="" className="text-white md:text-[14px] text-[12.76px]">Details</a>
  <a href="" className="text-white md:text-[14px] text-[12.76px]">Join Us</a>
  </div>
</div>

    </div>
</div>
        </div>
<hr className="text-[#484848] border-[0.75px] mt-12 mb-2 md:mb-7" />
<div className="flex justify-between gap-4 md:gap-0">
  <p className="text-white text-[10.5px] flex-1">Copyright © 2025. All Rights Reserved | Ascendance</p>
<p className="text-white text-[10.5px] justify-end flex-1 flex tracking-[2px] md:tracking-[5px]">FB | TW | YU | IN</p>
</div>
        </div> 
        </div>
    );
};

export default Footer;