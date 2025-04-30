import { useState } from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { FiCircle } from "react-icons/fi";
import frame1 from '../../assets/images/Frame 390.png'
import frame2 from '../../assets/images/Frame 391.png'
import frame3 from '../../assets/images/Frame 391 (1).png'
import frame4 from '../../assets/images/Frame 391 (2).png'
import frame5 from '../../assets/images/Frame 391 (3).png'
import rightangle from '../../assets/images/Vector.png'
import rightangle2 from '../../assets/images/Vector2.png'
import star from '../../assets/images/Group 1171274816.png'
import circle2 from '../../assets/images/Ellipse 56.png'


const cards = [
  {
    //card 1
    component: (
      <div className=" flex flex-col gap-8 p-4 py-8 bg-[#012555] rounded-lg shadow-sm ">
        <div className="flex gap-2 items-center">
          <img className="w-[34.56px] h-[36px]" src={frame1} alt="frame" />
          <h2 className="text-[16px] font-bold text-white">Pilot Cohort Registration</h2>
        </div>
        <p className="text-white text-[14px]">
          Join the Pilot Cohort of Asendance+ by Signing up Today!
        </p>
        <div className="flex gap-4 items-center">
          <p className="text-[#E1AF7E] text-[14px]">Until 30 September 2025</p>
          <img className="w-2" src={rightangle} alt="arrow" />
        </div>
      </div>
    ),
  },
  {
    //card-2
    component: (
       <div className=" flex flex-col border-[#D8D8D8] gap-8 px-4 py-8 border-1 rounded-lg shadow-sm">
      <div className='flex gap-2 items-center'>
          <img className="w-[34.56px] h-[36px]" src={frame2} alt="" /> 
          <h2 className="text-[15px] font-bold ">Video And written Content</h2>
      </div>
      <p className=" text-[#838383] text-[14px]">Read And Watch Educational Content Curated by lvy league Students Featuring Industry Experts.
      
      </p>
      <div className="flex gap-4 items-center">
          <p className=" text-[#E1AF7E] text-[14px]">October 2025 to March 2026
      </p>
      <div>
      <img className="w-2" src={rightangle2} alt="" />
      </div>
      </div>
      </div>
    ),
  },
  //card 3
  {
    component: (
      <div className=" flex flex-col border-[#D8D8D8] gap-8 px-4 py-8 border-1 rounded-lg shadow-sm">
     <div className='flex gap-2 items-center'>
         <img className="w-[34.56px] h-[36px]" src={frame3} alt="" /> 
         <h2 className="text-[16px] font-bold ">Monthly Challenges</h2>
     </div>
     <p className=" text-[#838383] text-[14px]"> 
     Take part in the monthly challenges and collect points to secure your spot a the top of the Leaderboard.
     </p>
     <div className="flex gap-4 items-center">
         <p className="text-[14px] text-[#E1AF7E]">October 2025 to March 2026
     </p>
     <div>
     <img className="w-2"  src={rightangle2} alt="" />
     </div>
     </div>
     </div>
     
     
    ),
  },
  //card 4
{
    component: (
<div className=" flex flex-col border-[#D8D8D8] gap-8 px-4 py-8 border-1 rounded-lg shadow-sm">
<div className='flex gap-2'>
    <img className="w-[34.56px] h-[36px]" src={frame4} alt="" /> 
    <h2 className="text-[16px] font-bold ">Final Leaderboard Announced</h2>
</div>
<p className="text-[14px] text-[#838383]"> 
Final Challenge completes and the Top 100 Winners of the 6 month challenge are announced.
</p>
<div className="flex gap-2 items-center">
    <p className="text-[14px] text-[#E1AF7E]">October 2025 to March 2026
</p>
<div>
<img className="w-2" src={rightangle2} alt="" />
</div>
</div>
</div>
    ),
},
//card 5
{
    component: (
<div className=" flex flex-col border-[#D8D8D8] gap-8 px-4 py-8 border-1 rounded-lg shadow-sm">
<div className='flex gap-2 items-center'>
    <img className="w-[34.56px] h-[36px]" src={frame5} alt="" /> 
    <h2 className="text-[16px] font-bold ">Monthly Challenges</h2>
</div>
<p className="text-[14px] text-[#838383]"> 
The prizes for top 100 Winners are released gradually with a tentative schedule as below.
</p>
<div className="flex gap-4 items-center">
    <p className=" text-[#E1AF7E] text-[14px]">May 2026 to October 2026
</p>
<div>
<img className="w-2" src={rightangle2} alt="" />
</div>
</div>
</div>
    ),
},


];

export default function SMLearnInvestCard() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-11/12 mx-auto text-center">
      {/* Card */}
      <div className="relative h-64 transition-all duration-300">
        {cards[activeIndex].component}
      </div>

      {/* Carousel Dots */}
      <div className="mt-4 flex justify-center gap-2">
        {cards.map((_, index) =>
          index === activeIndex ? (
            <BsFillCircleFill
              key={index}
              className="text-blue-600 w-4 h-4 cursor-pointer"
              onClick={() => setActiveIndex(index)}
            />
          ) : (
            <FiCircle
              key={index}
              className="text-gray-400 w-4 h-4 cursor-pointer hover:text-blue-600"
              onClick={() => setActiveIndex(index)}
            />
          )
        )}
      </div>
      <div className="flex justify-between items-center mt-2">
        <img src={star} alt="" />
        <img className="mb-4" src={circle2} alt="" />
      </div>
    </div>
  );
}
