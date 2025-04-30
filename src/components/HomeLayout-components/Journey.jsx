import { FaStar } from "react-icons/fa";
import miniCircle from '../../assets/images/mini circle.png'
import check from '../../assets/images/SVG1.png'
import cross from '../../assets/images/SVG (1).png'
import check2 from '../../assets/images/SVG4.png'
import cross2 from '../../assets/images/SVG (3).png'

const Journey = () => {
    return (
        <div style={{background:'linear-gradient(to bottom,  #8A7CDB30, #FF922E1A'}}>
          <div className="w-11/12 mx-auto md:mb-16 pt-10">
          <h2 className="text-[#9E7758] text-[16px] md:text-2xl">Pricing</h2>
          <div className="md:flex gap-16">
            <div className="flex-2">
           
         <h2 className="text-2xl md:text-[56px] py-3 md:py-0 font-bold">Kickstart Your Journey Today</h2>
           
            </div>
            <div className="flex-1">
                <p className="text-[#5B5B5B] ">Choose from 3 plans Starting at $20 B4/month, billed annually.

                </p>
                <p className="font-bold text-[15px] py-2">Trusted by 70k+ students

                </p>
                <div className="flex items-center gap-1">
                <p className="flex text-[#FFCC00] gap-1">
                    <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar>
                    
                </p>
                <p className="text-[13px] ">4.8/5</p>
                <p className="text-[13px] ps-4 flex items-center">
                    <img src={miniCircle} alt="" />
                    5,467 Reviews</p>
                </div>
               
            </div>
          </div>
           {/**cards */}
           <div className="md:grid space-y-8 md:space-y-0
            grid-cols-3 mt-8 pb-14 md:pb-24 gap-8">
{/**card 1 */}
<div className="col-span-1 shadow-2xl rounded-2xl py-8 px-6  bg-white">
<p className="text-center font-semibold">Monthly plan</p>
<div className="bg-[#EAECDF] mt-5  border-[#00000040] py-4 
shadow-sm border-t-1 rounded-xl">
    <div className="flex justify-center items-center gap-3">
        <h2 className="text-2xl">$29.99</h2>
        <p className="text-[16px]">/mo</p>
    </div>
    <p className="text-center text-[16px] pt-2">Billed annually</p>

</div>
{/**checked and cross */}
<div className="flex mt-6 gap-2 flex-col">
    <div className="flex gap-2 items-center">
<img src={check} alt="" />
<p className="text-[14px] text-[#7D7D7D]">Limited Access to the platform</p>
    </div>
    <div className="flex gap-2 items-center">
<img src={check} alt="" />
<p className="text-[14px] text-[#7D7D7D]">10 Free Courses</p>
    </div>
    <div className="flex gap-2 items-center">
<img src={check} alt="" />
<p className="text-[14px] text-[#7D7D7D]">Limited Benefits</p>
    </div>
    <div className="flex gap-2 items-center">
<img src={cross} alt="" />
<p className="text-[14px] text-[#BEBDBE]">Agent</p>
    </div>
    <div className="flex gap-2 items-center text-[#BABABA]">
<img src={cross} alt="" />
<p className="text-[14px] ">Live Chat Support</p>
    </div>

</div>
{/**button */}
<button className="w-full mt-6 font-bold text-[16px] rounded-full py-2 border-[1.01px] border-[#062A44]">SUBSCRIBE</button>

</div>
{/**card 2 */}
<div className="col-span-1 shadow-2xl rounded-2xl py-8 px-6 bg-[#00275A] relative">
  {/* button */}
  <div className="absolute text-[16px] -top-1 -left-3 bg-[#FFAA00] text-white text-[12px] font-semibold px-4 py-1 rounded-xl rotate-[-20deg] shadow-md">
    Popular Plan
  </div>

  {/* Title */}
  <p className="text-center font-semibold text-white">Challenge Plan</p>

  {/* Price Section */}
  <div className="bg-white mt-5 py-4 shadow-sm border-t-1 rounded-xl">
    <div className="flex justify-center items-center gap-3">
      <h2 className="text-2xl font-semibold">$149.99</h2>
      <p className="text-[16px] text-gray-600">/ 6 mo</p>
    </div>
    <p className="text-center text-[16px] pt-2 text-gray-500">Billed annually</p>
  </div>

  {/* Features */}
  <div className="flex mt-6 gap-2 flex-col">
    <div className="flex gap-2 items-center">
      <img src={check2} alt="" />
      <p className="text-[14px] text-[#99A9BD]">Full Access to the platform</p>
    </div>
    <div className="flex gap-2 items-center">
      <img src={check2} alt="" />
      <p className="text-[14px] text-[#99A9BD]">20 Free Courses</p>
    </div>
    <div className="flex gap-2 items-center">
      <img src={check2} alt="" />
      <p className="text-[14px] text-[#99A9BD]">Unlimited Benefits</p>
    </div>
    <div className="flex gap-2 items-center">
      <img src={check2} alt="" />
      <p className="text-[14px] text-[#99A9BD]">Agent</p>
    </div>
    <div className="flex gap-2 items-center">
      <img src={cross2} alt="" />
      <p className="text-[14px] text-[#405D83]">Live Chat Support</p>
    </div>
  </div>

  {/* Subscribe Button */}
  <button className="w-full mt-6 bg-white font-bold text-[16px] rounded-full py-2 border-[1.01px] border-[#062A44]">
    SUBSCRIBE
  </button>
</div>
{/**card 3 */}
<div className="col-span-1 shadow-2xl rounded-2xl py-8 px-6  bg-white">
<p className="text-center font-semibold">Annual Plan</p>
<div className="bg-[#EAECDF] mt-5  border-[#00000040] py-4 
shadow-sm border-t-1 rounded-xl">
    <div className="flex justify-center items-center gap-3">
        <h2 className="text-2xl">$249.99</h2>
        <p className="text-[16px]">/Year</p>
    </div>
    <p className="text-center text-[16px] pt-2">Billed annually</p>

</div>
{/**checked and cross */}
<div className="flex mt-6 gap-2 flex-col">
    <div className="flex gap-2 items-center">
<img src={check} alt="" />
<p className="text-[14px] text-[#7D7D7D]">Limited Access to the platform</p>
    </div>
    <div className="flex gap-2 items-center">
<img src={check} alt="" />
<p className="text-[14px] text-[#7D7D7D]">30 Free Courses</p>
    </div>
    <div className="flex gap-2 items-center">
<img src={check} alt="" />
<p className="text-[14px] text-[#7D7D7D]">Unlimited Benefits</p>
    </div>
    <div className="flex gap-2 items-center">
<img src={cross} alt="" />
<p className="text-[14px] text-[#BEBDBE]">Agent</p>
    </div>
    <div className="flex gap-2 items-center text-[#BABABA]">
<img src={cross} alt="" />
<p className="text-[14px] ">Live Chat Support</p>
    </div>

</div>
{/**button */}
<button className="w-full mt-6 font-bold text-[16px] rounded-full py-2 border-[1.01px] border-[#062A44]">SUBSCRIBE</button>

</div>


                </div>


          </div>
        </div>
    );
};

export default Journey;