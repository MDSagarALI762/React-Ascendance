import female from '../../assets/images/TheVenturLayout-Images/image6.png'
import male from '../../assets/images/TheVenturLayout-Images/image (5).png'
import profile1 from '../../assets/images/TheVenturLayout-Images/image (2).png'
import profile2 from '../../assets/images/TheVenturLayout-Images/image (3).png'
import profile3 from '../../assets/images/TheVenturLayout-Images/image (4).png'
import basic1 from '../../assets/images/TheVenturLayout-Images/Frame 13.png'
import basic2 from '../../assets/images/TheVenturLayout-Images/Frame 13 (1).png'
import basic3 from '../../assets/images/TheVenturLayout-Images/Frame 13 (2).png'
import basic4 from '../../assets/images/TheVenturLayout-Images/Frame 13 (3).png'


const Basics = () => {
    return (
        <div className="w-11/12 mx-auto md:mb-16 mt-12 md:mt-0">
            <div className="md:grid grid-cols-12 gap-10">
<div className="col-span-6 grid grid-cols-6 gap-4">
<div className="col-span-3 relative">
    <img className='md:w-[329px] md:h-[424px]' src={female} alt="" />
    <div className="flex gap-2 items-center relative w-[211.18px] h-[93.65px]
      md:w-[427.48px] md:h-[188.95px] mt-5 px-2 bg-[#E1AF7E] rounded-xl">
    <div className="avatar-group -space-x-6">
  <div className="avatar">
    <div className="md:w-12 w-10">
      <img src={profile1} alt="" />
    </div>
  </div>
  <div className="avatar">
    <div className="md:w-12 w-10">
      <img  src={profile2} alt="" />
    </div>
  </div>
  <div className="avatar">
    <div className="md:w-12 w-10">
      <img  src={profile3} alt="" />
    </div>
  </div>
  </div>

<div>
<h2 className='font-bold md:text-[26px] text-[12.89px]'>1,000 Competitors</h2>
<p className="md:text-[18px] text-[8.92px]">Limited Seats! Only 1,000 applicants accepted
</p>
</div>
    </div>
    </div>
    

<div className="col-span-3">
    <img className='md:w-[339px] md:h-[713px]' src={male} alt="" />
    
</div>
</div> 

<div className="col-span-6 mt-10 md:mt-0 flex flex-col gap-6 pr-8 md:pr-50 ">
    <h2 className="md:text-[50px] text-[28px] font-bold">The Basics</h2>
<div className="flex gap-5 items-start">
    <img className='md:w-[53.88px] md:h-[53.88px]' src={basic1} alt="" />
   <div>
   <h2 className='md:text-[22px] text-[20px] font-bold'>Application</h2>
   <p className="md:text-[16px] text-[14px] text-[#222E48] pt-2">Students Register by 20th April on the Ascendance Platform.

   </p>
   </div>
</div>
<div className="flex gap-5 items-start">
    <img className='md:w-[53.88px] md:h-[53.88px]' src={basic2} alt="" />
   <div>
   <h2 className='md:text-[22px] text-[20px] font-bold'>Learning</h2>
   <p className="md:text-[16px] text-[14px] text-[#222E48] pt-2">No prior experience needed. We’ll teach you everything to need about entrepreneurship, investing and finance through webinars, videos, articles, reels and live Sessions.
   </p>
   </div>
</div>
<div className="flex gap-5 items-start">
    <img className='md:w-[53.88px] md:h-[53.88px]' src={basic3} alt="" />
   <div>
   <h2 className='md:text-[22px] text-[20px] font-bold'>Competition</h2>
   <p className="md:text-[16px] text-[14px] text-[#222E48] pt-2">Each month, you’ll receive a finance or entrepreneurship challenge,. You’ll earn points for completing tasks. After six months, the top scorers will be crowned-and rewarded big time.  </p>
   </div>
</div>
<div className="flex gap-5 items-start">
    <img className='md:w-[53.88px] md:h-[53.88px]' src={basic4} alt="" />
   <div>
   <h2 className='md:text-[22px] text-[20px] font-bold'>Prizes</h2>
   <p className="md:text-[16px] text-[14px] text-[#222E48] pt-2">Win a trip to MYC, attend invite-only LVY League conferences, workshops, campus tours, visit VCS and startup with us, and get exclusive merch and parks. </p>
   </div>
</div>
         
</div>

            </div>
            
        </div>
    );
};

export default Basics;