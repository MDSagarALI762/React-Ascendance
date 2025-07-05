import { useState } from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { FiCircle } from "react-icons/fi";
import card1 from '../../assets/images/TheVenturLayout-Images/goal_18747751 1.png';
import card2 from '../../assets/images/TheVenturLayout-Images/work-life_10243627 1.png';
import card3 from '../../assets/images/TheVenturLayout-Images/worldwide_6967834 1.png';
import card4 from '../../assets/images/TheVenturLayout-Images/consultant_8629029 1.png';
import card5 from '../../assets/images/TheVenturLayout-Images/approve_10802152 1.png';
import card6 from '../../assets/images/TheVenturLayout-Images/startup_2193188 1.png';

const cards = [
  {
    component: (
      <div className="col-span-4 bg-[#F8F8F8] rounded-2xl">
        <h1 className='text-[24px] font-bold pt-3 md:pt-4 pl-2 md:pl-6'>01</h1>
        <div className="flex flex-col items-center justify-center pb-6 md:pb-10 pt-2 px-12 md:px-14">
          <img className='w-[70px] h-[70px] md:w-[88px] md:h-[88px]' src={card1} alt="" />
          <h2 className="md:text-[24px] text-[20px] pt-4 text-center pb-3 font-bold">Secure a Competitive Edge</h2>
          <p className="md:text-[16px] text-[14px] text-center text-[#A9A9A9]">
            Stand out in your college applications and learn essential entrepreneurial and finance skills that will help you ace future projects.
          </p>
        </div>
      </div>
    ),
  },
  {
    component: (
      <div className="col-span-4 bg-[#F8F8F8] rounded-2xl">
        <h1 className='text-[24px] font-bold pt-3 md:pt-4 pl-2 md:pl-6'>02</h1>
        <div className="flex flex-col items-center justify-center pb-6 md:pb-10 pt-2 px-12 md:px-14">
          <img className='w-[70px] h-[70px] md:w-[88px] md:h-[88px]' src={card2} alt="" />
          <h2 className="md:text-[24px] text-[20px] pt-4 text-center pb-3 font-bold">Launch Your Finance & Entrepreneurship Career</h2>
          <p className="md:text-[16px] text-[14px] text-center text-[#A9A9A9]">
            We help walk you through every step of the way and connect you with the resources and individuals you need to launch your careers.
          </p>
        </div>
      </div>
    ),
  },
  {
    component: (
      <div className="col-span-4 bg-[#F8F8F8] rounded-2xl">
        <h1 className='text-[24px] font-bold pt-3 md:pt-4 pl-2 md:pl-6'>03</h1>
        <div className="flex flex-col items-center justify-center pb-6 md:pb-10 pt-2 px-12 md:px-14">
          <img className='w-[70px] h-[70px] md:w-[88px] md:h-[88px]' src={card3} alt="" />
          <h2 className="md:text-[24px] text-[20px] pt-4 px-6 text-center pb-3 font-bold">Build A Global Network</h2>
          <p className="md:text-[16px] text-[14px] text-center text-[#A9A9A9]">
            From driven peers to seasoned Ivy League entrepreneurs, your future circle of influence starts here.
          </p>
        </div>
      </div>
    ),
  },
  {
    component: (
      <div className="col-span-4 bg-[#F8F8F8] rounded-2xl">
        <h1 className='text-[24px] font-bold pt-3 md:pt-4 pl-2 md:pl-6'>04</h1>
        <div className="flex flex-col items-center justify-center pb-6 md:pb-10 pt-2 px-12 md:px-14">
          <img className='w-[70px] h-[70px] md:w-[88px] md:h-[88px]' src={card4} alt="" />
          <h2 className="md:text-[24px] text-[20px] pt-4 text-center pb-3 font-bold">Receive Expert Mentorship</h2>
          <p className="md:text-[16px] text-[14px] text-center text-[#A9A9A9]">
            Gain insider tips and advice from top finance professionals and startup founders—just like in the Ivy Leagues!
          </p>
        </div>
      </div>
    ),
  },
  {
    component: (
      <div className="col-span-4 bg-[#F8F8F8] rounded-2xl">
        <h1 className='text-[24px] font-bold pt-3 md:pt-4 pl-2 md:pl-6'>05</h1>
        <div className="flex flex-col items-center justify-center pb-6 md:pb-10 pt-2 px-12 md:px-14">
          <img className='w-[70px] h-[70px] md:w-[88px] md:h-[88px]' src={card5} alt="" />
          <h2 className="md:text-[24px] text-[20px] pt-4 px-6 text-center pb-3 font-bold">Completed Mock Stock Portfolio</h2>
          <p className="md:text-[16px] text-[14px] text-center text-[#A9A9A9]">
            Learn the basics of finance and investing and win the competition with a mock stock portfolio to use in interview and internship applications.
          </p>
        </div>
      </div>
    ),
  },
  {
    component: (
      <div className="col-span-4 bg-[#F8F8F8] rounded-2xl">
        <h1 className='text-[24px] font-bold pt-3 md:pt-4 pl-2 md:pl-6'>06</h1>
        <div className="flex flex-col items-center justify-center pb-6 md:pb-10 pt-2 px-12 md:px-14">
          <img className='w-[70px] h-[70px] md:w-[88px] md:h-[88px]' src={card6} alt="" />
          <h2 className="md:text-[24px] text-[20px] pt-4 px-2 text-center pb-3 font-bold">Start-Up Business Plan & Prototype</h2>
          <p className="md:text-[16px] text-[14px] text-center text-[#A9A9A9]">
            We’ll walk you step by step in developing your own startup business plan and materials to kickstart your entrepreneurial journey.
          </p>
        </div>
      </div>
    ),
  },
];

export default function SMDJoinCard() {
  const [activeIndex, setActiveIndex] = useState(0);

 

  return (
    <div className="w-11/12 mx-auto mt-8">
      {/* Card with fade transition */}
      <div className="relative">
        <div key={activeIndex}>
          {cards[activeIndex].component}
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="mt-4 flex justify-center gap-2">
        {cards.map((_, index) =>
          index === activeIndex ? (
            <BsFillCircleFill
              key={index}
              className="text-neutral-900 w-4 h-4 cursor-pointer"
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
    </div>
  );
}
