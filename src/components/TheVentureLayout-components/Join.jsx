import vector from '../../assets/images/TheVenturLayout-Images/Vector.png'
import card1 from '../../assets/images/TheVenturLayout-Images/goal_18747751 1.png'
import card2 from '../../assets/images/TheVenturLayout-Images/work-life_10243627 1.png'
import card3 from '../../assets/images/TheVenturLayout-Images/worldwide_6967834 1.png'
import card4 from '../../assets/images/TheVenturLayout-Images/consultant_8629029 1.png'
import card5 from '../../assets/images/TheVenturLayout-Images/approve_10802152 1.png'
import card6 from '../../assets/images/TheVenturLayout-Images/startup_2193188 1.png'
import SMDJoinCard from './SMDJoinCard'


const Join = () => {
    return (
        <div className="w-11/12 mx-auto md:pb-24 pb-8 pt-8 md:pt-0">
         <div className="md:flex gap-24">
          <div className="flex-2 text-left ">
          <h2 className="md:text-[50px] text-[28px] font-bold">Why You Should Join Us?</h2>
            <p className="md:text-[18px] text-[14px] text-[#A9A9A9] md:pr-47">Joining us is your gateway to an exceptional journey in entrepreneurship and finance. We offer a unique platform that empowers you to stand out, build essential skills, and prepare for your future success.
</p>
          </div>
          <div className="flex-1 mt-12 md:mt-0 relative pt-8 md:ml-24  px-3 border-1 border-[#E1AF7E] rounded-2xl">
<div className="bg-[#E1AF7E] flex items-center justify-center 
absolute md:w-[60px] md:w-[60px] -top-6 left-7 rounded-full px-2 py-[10px] md:py-4">
<img className=' md:w-[30px] md:h-[25px]
 object-cover' src={vector} alt="" />

</div>
<p className="md:text-[16px] text-[#A9A9A9] md:pt-5 pb-4 md:pb-0 text-[14px]">Secure a competitive edge by learning real-world skills and gaining valuable insights that will set you apart in your academic and professional endeavors.</p>

          </div>
            </div>  
            {/**cards */}
        <div className="md:grid md:block hidden grid-cols-12 mt-16 gap-8">
            {/**card 1 */}
          <div className="col-span-4 bg-[#F8F8F8] rounded-2xl">
            <h1 className='text-[24px] font-bold pt-3 md:pt-4 pl-2 md:pl-6'>01</h1>
            <div className="flex flex-col items-center
             justify-center pb-6 md:pb-10 pt-2 px-12 md:px-14">
<img className='w-[70px] h-[70px] md:w-[88px] md:h-[88px]' src={card1} alt="" />
<h2 className="md:text-[24px] text-[20px] pt-4 text-center pb-3 font-bold">
Secure a Competitive Edge
</h2>
<p className="md:text-[16px] text-[14px] text-center text-[#A9A9A9]">Stand out in your college applications and learn essential entrepreneurial and finance skills that will help you ace future projects.

</p>
            </div>
            </div>  
             {/**card 2 */}
          <div className="col-span-4 bg-[#F8F8F8] rounded-2xl">
            <h1 className='text-[24px] font-bold pt-3 
            md:pt-4 pl-2 md:pl-6'>02</h1>
            <div className="flex flex-col items-center
             justify-center pb-6 md:pb-10 pt-2 px-12 md:px-14">
<img className='w-[70px] h-[70px] md:w-[88px] md:h-[88px]' src={card2} alt="" />
<h2 className="md:text-[24px] text-[20px] pt-4 text-center pb-3 font-bold">
Launch Your Finance & Entrepreneurship Career
</h2>
<p className="md:text-[16px] text-[14px] text-center text-[#A9A9A9]">We help walk you through every step of the way and connect you with the resources and individuals you need to launch your careers.

</p>
            </div>
            </div> 
             {/**card 3 */}
          <div className="col-span-4 bg-[#F8F8F8] rounded-2xl">
            <h1 className='text-[24px] font-bold pt-3 
            md:pt-4 pl-2 md:pl-6'>03</h1>
            <div className="flex flex-col items-center
             justify-center pb-6 md:pb-10 pt-2 px-12 md:px-14">
<img className='w-[70px] h-[70px] md:w-[88px] md:h-[88px]' src={card3} alt="" />
<h2 className="md:text-[24px] text-[20px] pt-4 px-6 text-center pb-3 font-bold">
Build A Global Network
</h2>
<p className="md:text-[16px] text-[14px] text-center text-[#A9A9A9]">From driven peers to seasoned Ivy League entrepreneurs, your future circle of influence starts here.

</p>
            </div>
            </div> 
            
            </div>   
               {/**cards */}
        <div className="md:grid md:block hidden grid-cols-12 mt-8 gap-8">
            {/**card 4 */}
          <div className="col-span-4 bg-[#F8F8F8] rounded-2xl">
            <h1 className='text-[24px] font-bold pt-3 md:pt-4 
            pl-2 md:pl-6'>04</h1>
            <div className="flex flex-col items-center
             justify-center pb-6 md:pb-10 pt-2 px-12 md:px-14">
<img className='w-[70px] h-[70px] md:w-[88px] md:h-[88px]' src={card4} alt="" />
<h2 className="md:text-[24px] text-[20px] pt-4 text-center pb-3 font-bold">
Receive Expert Mentorship
</h2>
<p className="md:text-[16px] text-[14px] 
text-center text-[#A9A9A9]">Gain Insider tips and advice from top finance professionals and startup founders-just like in the lvy leagues!

</p>
            </div>
            </div>  
             {/**card 5 */}
          <div className="col-span-4 bg-[#F8F8F8] rounded-2xl">
            <h1 className='text-[24px] font-bold pt-3 
            md:pt-4 pl-2 md:pl-6'>05</h1>
            <div className="flex flex-col items-center
             justify-center pb-6 md:pb-10 pt-2 px-12 md:px-14">
<img className='w-[70px] h-[70px] md:w-[88px] md:h-[88px]' src={card5} alt="" />
<h2 className="md:text-[24px] text-[20px] pt-4 px-6 text-center pb-3 font-bold">
Completed Mack Stock Portfolio
</h2>
<p className="md:text-[16px] text-[14px] text-center 
text-[#A9A9A9]">Learn the basics of finance and investing and finance the competition with a mock stock portfolio to use in interview and internship applications

</p>
            </div>
            </div> 
             {/**card 6 */}
          <div className="col-span-4 bg-[#F8F8F8] rounded-2xl">
            <h1 className='text-[24px] font-bold pt-3 
            md:pt-4 pl-2 md:pl-6'>06</h1>
            <div className="flex flex-col items-center
             justify-center pb-6 md:pb-10 pt-2 px-12 md:px-14">
<img className='w-[70px] h-[70px] md:w-[88px] md:h-[88px]' src={card6} alt="" />
<h2 className="md:text-[24px] text-[20px] pt-4 px-2 text-center pb-3 font-bold">
Start-Up Business Plan & Prototype
</h2>
<p className="md:text-[16px] text-[14px] text-center 
text-[#A9A9A9]">We’ll walk you step by step in developing your own startup business plan and materials to kickstart your entrepreneurial journey.

</p>
            </div>
            </div> 
            
            </div> 
{/**sm join card */}
<div className="md:hidden block">
<SMDJoinCard></SMDJoinCard>
</div>
        </div>
    );
};

export default Join;