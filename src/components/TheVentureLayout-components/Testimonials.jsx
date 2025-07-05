import { FaStar } from 'react-icons/fa';
import profile1 from '../../assets/images/TheVenturLayout-Images/Place your image here.png'
import profile2 from '../../assets/images/TheVenturLayout-Images/Place your image here (1).png'
import profile3 from '../../assets/images/TheVenturLayout-Images/Place your image here (2).png'
import profile4 from '../../assets/images/TheVenturLayout-Images/Place your image here (3).png'
import profile5 from '../../assets/images/TheVenturLayout-Images/Place your image here (4).png'
import profile6 from '../../assets/images/TheVenturLayout-Images/Place your image here (5).png'
import profile7 from '../../assets/images/TheVenturLayout-Images/Place your image here (6).png'
import profile8 from '../../assets/images/TheVenturLayout-Images/Place your image here (7).png'

const Testimonials = () => {
    return (
        <div className="bg-[#EAECDF]  pt-16 pb-10">
          <div className="w-11/12 mx-auto">
          <h2 className="text-[#9E7758] md:text-2xl text-[16px] text-center font-bold">Testimonials</h2>  
      <h2 className="md:text-[56px] text-[28px] font-bold text-center">What do the Users Of <br /> Ascendance Say?</h2>
<div className="md:grid grid-cols-12 gap-12 md:mt-0 mt-14">
    <div className="col-span-6">
<img className='rounded-full w-[99.6188px] h-[99px] md:w-[161px] md:h-[160px]' src={profile1} alt="" />
<h2 className="md:text-[36px] text-[22px] font-bold pt-2">Samuel Goodwin</h2>
<p className='md:text-[22px] text-[16px] text-[#5F5F5F] font-semibold'>Student </p>
   <div className="flex gap-2 pt-3 text-[#FFCC00]">
    <FaStar className='md:text-2xl text-[18px]'></FaStar>
    <FaStar className='md:text-2xl text-[18px]'></FaStar>
    <FaStar className='md:text-2xl text-[18px]'></FaStar>
    <FaStar className='md:text-2xl text-[18px]'></FaStar>
    <FaStar className='md:text-2xl text-[18px]'></FaStar>
   </div>
   <p className="md:text-[20px] text-[18px] pt-4 text-[#7E7F80]  md:pr-30">Great course! I have wasted a lot of time on a bunch of other courses before I took this one. If I knew how broad and good this course was…

   </p>
   <button className="text-[16px] mt-5 rounded-full border-[#062A44]
   border-1 border-b-4 border-r-4 py-3 px-12 uppercase font-bold">
    Join Us</button>
    </div>
    <div className="col-span-6 md:mt-10 mt-16">
        {/**users div 1 */}
<div className="flex md:ms-18 ms-8 items-end gap-10 md:gap-44">
    <div className='flex gap-2 md:gap-3 bg-white md:ps-4 md:pr-8 md:py-4 ps-2 pr-4 py-2 rounded-full'>
<img className='rounded-full md:w-[55px] md:h-[54px] w-[38.7366px] h-[38.0323px]' src={profile2} alt="" />
<div className="flex flex-col justify-center">
    <h4 className="md:text-[14px] text-[9.8602px] font-bold">Isabella Couvreur</h4>
    <p className='md:text-[10.08px] text-[7.6065px] text-[#A9B2B9]'>Student</p>
</div>
    </div>
    <div>
    <img className='ms-20 rounded-full md:w-[55px] md:h-[54px] w-[40.8495px] h-[40.8495px]'
     src={profile3} alt="" />

    </div>
</div>
 {/**users div 2 */}
 <div className="flex md:ms-7 ms-2 items-center gap-20 md:gap-34 mt-10 md:mt-12">
 <img className='rounded-full md:w-[55px] md:h-[54px] w-[43.6667px] h-[43.6667px]' src={profile4} alt="" />
 <img className='rounded-full md:w-[125px] md:h-[124px] w-[88.0376px] h-[87.3333px]' src={profile5} alt="" />
 </div>
   {/**users div 3 */}
<div className="flex md:-ms-16 items-end gap-20 md:gap-60 mt-10 md:mt-13">
    <div className='flex gap-2 md:gap-3 bg-white   rounded-full'>
<img className='rounded-full md:w-[74px]  md:h-[74px] w-[52.1183px] h-[52.1183px]' src={profile6} alt="" />
<div className="flex flex-col justify-center pr-4 py-2 md:pr-8 md:py-4">
    <h4 className="md:text-[14px] text-[9.8602px] font-bold">Brianna Boothman</h4>
    <p className='md:text-[10.08px] text-[7.6065px] text-[#A9B2B9]'>Student</p>
</div>
    </div>
    <div>
    <img className='rounded-full w-[41.5538px] ms-12 md:ms-0  h-[41.5538px] md:w-[55px] md:h-[54px]
   mb-3  md:mb-14 ' src={profile7} alt="" />

    </div>
</div>
{/**users div 4 */}
<div className='flex gap-2 md:gap-3 bg-white ms-40 pr-2 ps-2 py-2  md:ps-4 md:pr-4 md:py-4 mt-16 w-[161.2168px] 
h-[55.6398px] md:w-[228.9032px] md:h-[79px] rounded-full'>
<img className='rounded-full w-[38.0323px] h-[38.0323px] md:w-[55px] md:h-[54px]' src={profile8} alt="" />
<div className="flex flex-col justify-center">
    <h4 className="md:text-[14px] text-[9.8602px] font-bold">Harriet Bradshaw</h4>
    <p className='md:text-[10.08px] text-[7.6065px] text-[#A9B2B9]'>Student</p>
</div>
    </div>

    </div>
</div>
          </div>
            </div>
    );
};

export default Testimonials;