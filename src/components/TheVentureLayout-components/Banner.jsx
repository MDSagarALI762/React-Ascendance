import profile from '../../assets/images/TheVenturLayout-Images/image.png'
import arrow from '../../assets/images/TheVenturLayout-Images/Frame 3.png'
import venturebg1 from '../../assets/images/TheVenturLayout-Images/Subtract.png'
import venturebg2 from '../../assets/images/TheVenturLayout-Images/Subtract (1).png'
import venturebg3 from '../../assets/images/TheVenturLayout-Images/Subtract (3).png'
import venture1 from '../../assets/images/TheVenturLayout-Images/standing-man-with-laptop 1.png'
import venture2 from '../../assets/images/TheVenturLayout-Images/female-model-digital-device-copy-space 1.png'
import venture3 from '../../assets/images/TheVenturLayout-Images/front-view-woman-holding-laptop 1.png'
import speaker from '../../assets/images/TheVenturLayout-Images/Group 60.png'

const Banner = () => {
    return (
        <div className="mt-8 md:grid grid-cols-12 gap-24 w-11/12 mx-auto">
           <div className="col-span-6">
          <h2 className="md:text-[74px] text-[44px] font-bold">The Venture</h2>  
            <h2 className="md:text-[34px] text-[28px] font-bold">Your <span className="text-[#9E7758]">
                SpringBoard </span> To The Ivy League & Beyond</h2>
                <p className="md:text-[18px] text-[16px] text-[#929292] py-4">You ‘ve excelled in your classes, dominated other competitions, and set the standard among your peers. Now its time to level up.
             </p>
             <p className="md:text-[18px] text-[16px] text-[#929292] pb-6">Ready to disrupt the status quo?
             </p>
               {/**registration deadline sm device*/}
               <div className="border-1 z-30 md:hidden block relative flex gap-4
              mt-4 rounded-2xl border-[#E1AF7E] py-2 px-2 pr-10">
                <img className='relative z-0 w-[50px] h-[50px] -top-8 ps-2' src={profile} alt="" />
              <div>
              <h2 className='font-bold md:text-[18px] text-[16px]'>Registration Deadline:</h2>
           <p className='pt-1  md:text-[14px] text-[13px] text-[#A9A9A9]'>Study anytime, anywhere with full access  to course materials 24/7.</p>
            
                </div>  
                
                 </div>
                 {/**button */}
             <div className="md:flex gap-4 mt-6 md:mt-0">
                <button className="bg-[#062A44] w-full md:w-[169px] md:h-[35px] md:text-[14px] 
                text-white px-12 py-2 rounded-full font-semibold">Apply Now</button>
           <button className="bg-white px-2 flex items-center 
           justify-center w-full md:w-[169px] md:h-[35px] mt-4 md:mt-0 border-1 border-[#062A44] py-2 font-semibold rounded-full">Checkout Prizes</button>
             </div>
             {/**registration deadline md device*/}
             <div className="border-1 z-30 hidden md:block relative md:flex gap-4
              mt-24 rounded-4xl border-[#E1AF7E] py-4 px-4">
                <img className='relative z-0 -top-12 ps-4' src={profile} alt="" />
              <div>
              <h2 className='font-bold md:text-[18px]'>Registration Deadline:</h2>
           <p className='pt-4 md:text-[14px] text-[#A9A9A9]'>Study anytime, anywhere with full access  to course materials 24/7.</p>
            
                </div>  
                <button className='bg-[#E1AF7E] mt-10 btn btn-sm md:text-[12px] font-bold 
                py-1 px-4 rounded-full'>Learn More</button>
                 </div>
            </div> 
            {/**md device grid -2 */}
            <div className="col-span-6 hidden md:block mt-12  ">
        <div className="flex gap-4">
        <div className='relative'>
            <img className='absolute -right-7 -top-7' src={arrow} alt="" />
            <img  src={venturebg1} alt="" />
            <img src={venture1} alt="" className="absolute h-[314px] top-0 left-12" />
          </div>
          <div className='mt-24 relative'>
            <img src={speaker} alt="" className="absolute -top-4 -right-8" />
            <img src={venturebg2} alt="" />
            <img src={venture2} alt="" className="absolute h-[282px] top-0 left-12" />
          </div>
        </div>
        <div className="flex gap-4">
        <div className=' relative -top-12 -left-14'>
            <button className='absolute -right-14 top-1 bg-[#9E7758] text-[22px] font-semibold text-white
           py-3 px-4 rounded-full '>The Venture</button>
            <img src={venturebg3} alt="" />
            <img src={venture3} alt="" className="absolute top-2 
            h-[227px] left-12" />
          </div>
          <div className="text-center mt-10 ">
            <h2 className='md:text-[48px] text-[#9E7758] font-bold'>50K+</h2>
        <p className="text-[16px] text-[#929292]">Students Impacted by Ascendance</p>
        </div>
        </div>
  </div>
  {/**sm device grid -2 */}
  <div className="col-span-6 md:hidden block mt-12  ">
        <div className="flex gap-2 ps-4">
        <div className='relative'>
            <img className='w-[161.84px] h-[182.2px]'  src={venturebg1} alt="" />
            <img src={venture1} alt="" className="absolute h-[176.67px]
            w-[105.14px] top-[6px] left-1" />
          </div>
          <div className='mt-16 relative'>
            <img src={speaker} alt="" className="absolute
            h-[29.56px] w-[41.65px] -top-1 -right-1" />
            <img className='h-[161.84px] w-[163.98px]' src={venturebg2} alt="" />
            <img src={venture2} alt="" className="absolute h-[153.73px]
            w-[108.79px] top-2 left-5" />
          </div>
        </div>
        <div className="flex gap-4">
        <div className=' relative -top-6 '>
            <button className='absolute -right-12 top- 
            bg-[#9E7758] text-[11.79px] font-semibold text-white
           py-2 px-3 rounded-full '>The Venture</button>
            <img className='h-[129.15px] w-[(174.17px]' src={venturebg3} alt="" />
            <img src={venture3} alt="" className="absolute top-1 
            h-[125.4] w-[103.43px] left-2" />
          </div>
          <div className="text-center mt-2 ">
            <h2 className='text-[32px] text-[#9E7758] font-bold'>50K+</h2>
        <p className="text-[14px] text-[#929292]">Students Impacted by Ascendance</p>
        </div>
        </div>
  </div>



</div>


            
            
    );
};

export default Banner;