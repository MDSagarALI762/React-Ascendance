import { useState } from 'react';
import card1 from '../../assets/images/Image (2).png'
import card2 from '../../assets/images/Image (3).png'
import card3 from '../../assets/images/Image (4).png'
import { FiCircle } from 'react-icons/fi';
import { BsFillCircleFill } from 'react-icons/bs';
const cards = [
  {
    //card 1
    component: (
     <div className="col-span-4 shadow-sm  border-1  border-[#DFDFDF] mt-6 md:mt-10 rounded-2xl">
     <div className="p-3 pb-2">
         <img src={card1} alt="" />
         </div>
        <div>
          <h2 className="text-[20px]  font-bold pb-2 flex ps-3">
         Ascendance SA
         </h2>
       
     </div>
     <div className="bg-[#E1AF7EB8]  border-1 shadow-sm border-[#DFDFDF] rounded-b-2xl ">
         <p className='p-2 text-[14px]'>Gamified course for teens that builds essential financial literacy and entrepreneurship skills.
     
         </p>
     </div>
     
     </div>
    ),
  },
      //card 2
     { component: (
        <div className="col-span-4 shadow-sm  border-1  border-[#DFDFDF] mt-6 md:mt-10 rounded-2xl">
        <div className="p-3 pb-2">
            <img src={card2} alt="" />
            </div>
           <div>
             <h2 className="text-[20px]  font-bold pb-2 flex ps-3">
             Ascendance MENA
            </h2>
          
        </div>
        <div className="bg-[#E1AF7EB8]  border-1 shadow-sm border-[#DFDFDF] rounded-b-2xl ">
            <p className='p-2 text-[14px]'>Gamified course for teens that builds essential financial literacy and entrepreneurship skills.
        
            </p>
        </div>
        
        </div>
       ),
     },
         //card 3
     { component: (
        <div className="col-span-4 shadow-sm  border-1  border-[#DFDFDF] mt-6 md:mt-10 rounded-2xl">
        <div className="p-3 pb-2">
            <img src={card3} alt="" />
            </div>
           <div>
             <h2 className="text-[20px]  font-bold pb-2 flex ps-3">
             Ascendance APAC
            </h2>
          
        </div>
        <div className="bg-[#E1AF7EB8]  border-1 shadow-sm border-[#DFDFDF] rounded-b-2xl ">
            <p className='p-2 text-[14px]'>Gamified course for teens that builds essential financial literacy and entrepreneurship skills.
        
            </p>
        </div>
        
        </div>
       ),
     },


];
const SMDPartnershipCard = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="w-11/12 mx-auto text-center mt-7">
             {/* Card */}
             <div className="relative h-64 transition-all duration-300">
               {cards[activeIndex].component}
             </div>
       
             {/* Carousel Dots */}
             <div className="mt-14 flex justify-center gap-2">
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
             <div className="text-center"></div>
           </div>
    );
};

export default SMDPartnershipCard;