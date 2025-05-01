import checkbox from '../../assets/images/teenyicons_tick-circle-solid.png'
import img1 from '../../assets/images/communication-technology-woman-with-backpack-chat-laptop-buy-online-b (1).png'
import star from '../../assets/images/Group 1171274816.png'
import circle1 from '../../assets/images/Ellipse 3508.png'
import circle2 from '../../assets/images/Ellipse 50.png'
import img2 from '../../assets/images/Ellipse 3500.png'
const Boost = () => {
    return (
        <div className="bg-[#012555] pb-10 pt-4 md:py-10 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-12
              gap-1  w-11/12 mx-auto">

{/**laptop Image */}
<div className="flex col-span-6 md:mt-0 relative z-10 mt-12 order-2 md:order-1 flex-col gap-10 items-center justify-center">
    <img className='hidden md:block' src={circle1} alt="" />
<div className=" flex flex-col rounded-lg items-center justify-center z-10 relative bg-[#E1AF7E] border-[22px] shadow-lg pt-6 border-white overflow-hidden">
<div className="absolute w-[550px] h-[600px] rounded-full border border-[#eecfab]"></div>
                    <div className="absolute w-[420px] h-[420px] rounded-full border border-[#eecfab]"></div>
                    <div className="absolute w-[250px] h-[250px] rounded-full border border-[#eecfab]"></div>

   <img className='relative z-20 top-0 right-0' src={img1} alt="" />
   
</div>
</div>
{/**text description */}
<div className="flex col-span-6 relative
 order-1 md:order-2 flex-col gap-2 md:gap-10 items-center ">
    <div className='w-full'>
    <img className='float-end md:w-[51.66px] md:h-[51.66px] 
    w-[37.87px] h-[37.87px]' src={circle2} alt="" />

    </div>
<div className=" flex flex-col gap-4">
<h2 className="text-[20px] md:text-2xl text-[#9E7758]">Stand Out Among The Crowd</h2>
<div className="flex gap-2 items-center">
<h2 className='md:text-4xl text-2xl text-white'>
Boost Your College <br></br>
 Applications With <br />
<span className='text-[#E1AF7E]'>Ascendance+</span>
</h2>
<img className='md:mt-6 mt-16' src={star} alt="" />
</div>
<div className='space-y-4 mt-4'>
<div className="flex gap-2 items-center"><img src={checkbox} alt="" />
<p className='text-white'>Secure a Competitive Edge</p></div>
<div className="flex gap-2 items-center"><img src={checkbox} alt="" />
<p className='text-white'>Launch Your Finance & Entrepreneurship Career</p></div>
<div className="flex gap-2 items-center"><img src={checkbox} alt="" />
<p className='text-white'>Build a Global Network</p></div>
<div className="flex gap-2 items-center"><img src={checkbox} alt="" />
<p className='text-white'>Receive Expert Mentorship</p></div>
<div className="flex gap-2 items-center"><img src={checkbox} alt="" />
<p className='text-white'>Completed Mock Stock Portfolio</p></div>
<div className="flex gap-2 items-center"><img src={checkbox} alt="" />
<p className='text-white'>Start-up Business Plan & Prototype</p></div>

</div>
<button className='bg-white mt-4 relative z-20 py-2 md:py-3 w-full px-6 md:w-40
 shadow-lg rounded-full font-bold uppercase'>Subscribe</button>
   
            </div>
    <img className='absolute md:block hidden  top-114 right-25' src={img2} alt="" />
    <img className='absolute block md:hidden  top-133 z-0 right-2' src={img2} alt="" />
            
            </div>
           </div>
           <div className='flex hidden md:block justify-center mt-4'>
    <img className='ms-18' src={circle1} alt="" />

    </div>    
        </div>
    );
};

export default Boost;