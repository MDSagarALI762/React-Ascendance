import img1 from '../../assets/images/image.png'
import img2 from '../../assets/images/image (1).png'
import circle from '../../assets/images/Ellipse 18.png'
import circle2 from '../../assets/images/Ellipse.png'
import circle3 from '../../assets/images/circle 10.png'
import speaker from '../../assets/images/Group 60.png'
import img3 from '../../assets/images/podium_11783321 1.png'
import img4 from '../../assets/images/writing_7628769 1.png'
import img5 from '../../assets/images/team_13886868 1.png'
import img6 from '../../assets/images/SVG.png'
import img7 from '../../assets/images/podium 1.png'

const Potential = () => {
    return (
        <div className=" bg-[#F6F7F2] pb-24">
            
            <div className="md:grid grid-cols-13 pt-10 md:pt-24 pb-12 gap-4 w-11/12 mx-auto">
<div className="hidden md:block col-span-6 md:mt-16 "> 
    <h2 className="text-4xl font-bold">Unlock Your Potential <br /> with Engaging <br /> Challenges & Rewards</h2>
<p className="pt-8">Gamified Learning, Expert-Curated Content, and a <br /> Supportive Community to Help You Succeed

</p>
<p className='text-[#403685] text-2xl font-bold pt-16'>50k+ Students Impacted by <br /> Ascendance</p>

</div>
{/**small device description */}
<div className="md:hidden block col-span-6 md:mt-16 "> 
    <h2 className=" text-[24px] font-bold">Unlock Your Potential  with Engaging Challenges & Rewards</h2>
<p className="pt-2 text-[16px] font-semibold">Gamified Learning, Expert-Curated Content, and a Supportive Community to Help You Succeed

</p>
<p className='text-[#403685] text-[22px] font-bold pt-2'>50k+ Students Impacted by Ascendance</p>

</div>
 {/* Center Image with Circle + Speaker */}
<div className="col-span-4 hidden md:block relative md:mt-0 mt-7">
<img className='w-full relative z-10' src={img1} alt="" />
<div className='absolute top-70 right-70 h-32 w-32  z-20 transform translate-y-8 translate-y-10 bg-white rounded-full p-5 shadow-2xl'>
<img className='' src={speaker} alt="" />

</div>
<img className='absolute top-63 z-0 right-52 ' src={circle} alt="" />

</div>
{/**small device center image with circle + speaeker */}
<div className="col-span-4 block md:hidden relative md:mt-0 mt-7">
<img className='w-full relative z-10' src={img1} alt="" />
<div className='absolute top-50 right-50 w-[77px] h-[77px]  z-20 transform translate-y-8 translate-y-10 bg-white rounded-full p-5 shadow-2xl'>
<img className='w-[45.97px] h-[32.62px]' src={speaker} alt="" />

</div>
<img className='absolute top-52 z-0 right-43 ' src={circle3} alt="" />

</div>
{/**Right image */}
<div className="col-span-3 pt-16 md:pt-8 relative">
<div className=' flex gap-3 ms-6  md:ms-8 '>
{[...Array(12)].map((_, i) => (
    
    
        <img key={i} src={circle2} alt={`circle-${i}`} className="mb-2" />
  ))}
  </div>
  <div className='space-y-3 absolute right-3'>
{[...Array(12)].map((_, i) => (
    
        <img key={i} src={circle2} alt={`circle-${i}`} className="mb-2" />
    
  ))}
  </div>
<img className='pr-4' src={img2} alt="" />
</div>

            </div>

            {/**component footer */}
            <div className='w-11/12 mx-auto mt-16'>
<div className='md:grid md:grid-cols-12 gap-6 md:block hidden'>
    {/**comprehensive challanges */}
<div className='col-span-3 flex items-center'>
<div className="bg-white border-[#D4D7C8] rounded-full 
border-2 p-4">
<img className='w-30' src={img3} alt="" />
</div>
<p className='ps-3'>
Comprehensive Challenges with Exclusive Rewards & Prizes
</p> 
<div className="divider lg:divider-horizontal"></div>
</div>
{/** educational  content */}
<div className='col-span-3 flex items-center'>
<div className="bg-white border-[#D4D7C8] rounded-full 
border-2 p-4">
<img className='w-30' src={img4} alt="" />
</div>
<p className='ps-3'>
Educational Content Curated By Lvy League Students
</p> 
<div className="divider lg:divider-horizontal"></div>
</div>
{/**supportive community */}
<div className='col-span-3 flex items-center'>
<div className="bg-white border-[#D4D7C8] rounded-full 
border-2 p-4">
<img className='w-30' src={img5} alt="" />
</div>
<p className='ps-3'>
Supportive community to Encourage Learning
</p> 
<div className="divider lg:divider-horizontal"></div>
</div>
{/**gamifed learn */}
<div className='col-span-3 flex items-center'>
<div className="bg-white border-[#D4D7C8] rounded-full 
border-2 p-4">
<img className='w-30' src={img6} alt="" />
</div>
<p className='ps-3'>
Gamified Learning Experience
</p> 
<div className="divider lg:divider-horizontal"></div>
</div>

</div>
{/**small device component footer */}
<div className='grid grid-cols-6 gap-6 block md:hidden text-[14px] font-semibold'>
    {/**comprehensive challanges */}
<div className='col-span-3 flex items-center '>
<div className="bg-white border-[#D4D7C8] -mt-16  rounded-full 
border-2 p-2">
<img className='min-w-[22px] max-[22px] min-h-[22px] max-h-[22px]' src={img7} alt="" />
</div>
<p className='ps-2 flex-2'>
Comprehensive Challenges with Exclusive Rewards & Prizes
</p> 
<div className="divider lg:divider-horizontal"></div>
</div>
{/** educational  content */}
<div className='col-span-3 flex items-center'>
<div className="bg-white border-[#D4D7C8] -mt-16  rounded-full 
border-2 p-2">
<img className='min-w-[22px] max-[22px] min-h-[22px] max-h-[22px] ' src={img4} alt="" />
</div>
<p className='ps-2'>
Educational Content Curated By Lvy League Students
</p> 
<div className="divider lg:divider-horizontal"></div>
</div>
{/**supportive community */}
<div className='col-span-3 flex items-center'>
<div className="bg-white -mt-16  border-[#D4D7C8] rounded-full 
border-2 p-2">
<img className='min-w-[22px] max-[22px] min-h-[22px] max-h-[22px]' src={img5} alt="" />
</div>
<p className='ps-2'>
Supportive community to Encourage Learning
</p> 
<div className="divider lg:divider-horizontal"></div>
</div>
{/**gamifed learn */}
<div className='col-span-3 flex items-center'>
<div className="bg-white -mt-16  border-[#D4D7C8] rounded-full 
border-2 p-2">
<img className='min-w-[22px] max-[22px] min-h-[22px] max-h-[22px]' src={img6} alt="" />
</div>
<p className='ps-2 -mt-12'>Gamified Learning Experience
</p> 
<div className="divider lg:divider-horizontal"></div>
</div>

</div>

            </div>
            
        </div>
    );
};

export default Potential;