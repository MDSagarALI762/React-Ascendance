import box1 from '../../assets/images/TheVenturLayout-Images/Rectangle 65.png'
import box2 from '../../assets/images/TheVenturLayout-Images/Rectangle 65 (1).png'
import box3 from '../../assets/images/TheVenturLayout-Images/Rectangle 67.png'
import box4 from '../../assets/images/TheVenturLayout-Images/Rectangle 69.png'
import box5 from '../../assets/images/TheVenturLayout-Images/Rectangle 69 (1).png'
import boxTop1 from '../../assets/images/TheVenturLayout-Images/Rectangle 66.png'
import boxTop2 from '../../assets/images/TheVenturLayout-Images/Rectangle 66 (1).png'
import boxTop3 from '../../assets/images/TheVenturLayout-Images/Rectangle 68.png'
import boxTop4 from '../../assets/images/TheVenturLayout-Images/Rectangle 70.png'
import boxTop5 from '../../assets/images/TheVenturLayout-Images/Rectangle 70 (1).png'
import mukut from '../../assets/images/TheVenturLayout-Images/Group 1000004890.png'


import one from '../../assets/images/TheVenturLayout-Images/1.png'
import two from '../../assets/images/TheVenturLayout-Images/2.png'
import three from '../../assets/images/TheVenturLayout-Images/3.png'
import four from '../../assets/images/TheVenturLayout-Images/4.png'
import five from '../../assets/images/TheVenturLayout-Images/5.png'


const GrandPrize = () => {
    return (
        <div className="w-11/12 mx-auto ms-33 md:pt-10 md:mb-16">
         <h2 className="text-[50px] font-bold text-center">Ultimate Grand Prize <br />Unmatched Rewards Await!</h2>   
    <div className="relative flex items-end  mt-16">
        {/**box1 */}
       <div className="flex gap-0 relative pr-0 mr-0 flex-col  ">
        <div className='mb-4 space-y-4 text-center pr-8'>
            <h2 className="font-bold text-[32px]">Top 50</h2>
            <button className='bg-[#012555] text-white text-2xl px-2 rounded-full py-2'>Summer Crew</button>
        </div>
        <img  src={boxTop1} alt="" />
        <img className='absolute top-44 left-16' src={four} alt="" />
      <p className='text-[13px] absolute top-68 text-center left-6 right-2 text-[#4D4D4D] '>
        Exclusive Summer Internship with Lvy League Entrepreneurship & Finance Clubs
        </p>
       <img className='-mt-[1.7px]' src={box1} alt="" /> 
       </div>
       {/**box2 */}
       <div className="relative flex flex-col -left-9">
       <div className='mb-4 space-y-4 text-center pr-8'>
            <h2 className="font-bold text-[32px]">Top 10</h2>
            <button className='bg-[#012555] text-white text-2xl px-2 rounded-full py-2'>
            Campus Crew</button>
        </div>
       <img className='mt-[1px]' src={boxTop2} alt="" />
       <img className='absolute top-48 left-20' src={two} alt="" />
      <p className='text-[13px] absolute top-80 text-center right-4 left-8 text-[#4D4D4D] '>
      Invitation for finance and entrepreneurship workshops and campus tours of Harvard and UPenn by student leaders.
      </p>
       <img className='-mt-[1.7px]' src={box2} alt="" /> 
       </div>
       {/**box3 */}
      <div className="relative flex flex-col -left-18 z-30">
      <div className='mb-4 space-y-4 flex flex-col justify-center items-center pr-8'>
        <img src={mukut} alt="" />
            <h2 className="font-bold text-[32px]">Top 5</h2>
            <button className='bg-[#012555] px-7 text-white text-2xl px-2 rounded-full py-2'>
            Grand Prize</button>
        </div>
       <img src={boxTop3} alt="" />
       <img className='absolute top-86 left-28' src={one} alt="" />
      <p className='text-[13px] absolute top-128 right-6 text-center left-7 text-white '>
      Free Trip to Visit Ascendance and the Matley Fool in NYC and Invitation to attend NGENs Invite only LVY League Entrepreneurship Conference
       </p>
       <img className='-mt-[1.7px]' src={box3} alt="" /> 
       </div>
       {/**box4 */}
      <div className="relative flex flex-col -left-28 z-20">
      <div className='mb-4 space-y-4 text-center pr-8'>
            <h2 className="font-bold text-[32px]">Top 25</h2>
            <button className='bg-[#012555] text-white text-2xl px-8 ml-4 rounded-full py-2'>
            NYC Crew</button>
        </div>
       <img src={boxTop4} alt="" />
       <img className='absolute top-46 left-26' src={three} alt="" />
      <p className='text-[13px] absolute top-68 text-center left-4 right-9 text-[#4D4D4D] '>
      Invitation to join us for an exclusive founders & funders trek as we meet VCs and entrepreneurs in their offices across NYCI 
      </p>
       <img className='-mt-[1.7px]' src={box4} alt="" /> 
       </div>
       {/**box5*/}
      <div className="relative flex flex-col -left-37 z-10">
      <div className=' mb-4 space-y-4 text-center pr-8'>
            <h2 className="font-bold text-[32px]">Top 100</h2>
            <button className='bg-[#012555] ml-4 text-white text-2xl px-4 rounded-full py-2'>
            The X Pack</button>
        </div>
       <img src={boxTop5} alt="" />
       <img className='absolute top-45 left-18' src={five} alt="" />
      <p className='text-[13px] absolute top-64 text-center left-4 right-9 text-[#4D4D4D] '>
      Free Ascendance Merch & Swag, delivered to your doorstep! 
      </p>
       <img className='-mt-[1.7px]' src={box5} alt="" /> 
       </div>
       
        </div>   
        
        </div>
    );
};

export default GrandPrize;