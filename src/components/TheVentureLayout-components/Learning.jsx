import img1 from '../../assets/images/TheVenturLayout-Images/image2.png'
import img2 from '../../assets/images/TheVenturLayout-Images/image (1).png'
import learningbg from '../../assets/images/TheVenturLayout-Images/Subtract4.png'
import learningbg2 from '../../assets/images/TheVenturLayout-Images/Subtract5.png'

const Learning = () => {
    return (
        <div className="w-11/12 mx-auto md:grid grid-cols-12 gap-6 md:my-24 md:pt-8">
            {/**sm device learning bg */}
<div className="col-span-6 md:hidden block mt-8 h-[514px]   px-10 pb-6
 text-left" style={{background: `url(${learningbg2})`}}>
<h2 className="text-[28px] font-bold pt-16  text-white">Empowering Your Journey Through Learning</h2>
<p className='text-white text-[14px] pt-3'>
Our program bridges the gap between theory and practice by combining insights from seasoned industry professionals with the fresh, innovative perspectives of student entrepreneurs. Learn practical skills, strategies, and tools to succeed in finance and entrepreneurship.
</p>
<p className='text-white text-[14px] pt-2'>
Gain knowledge directly from industry leaders who have years of experience and success, as well as student entrepreneurs who bring relatable, real-time insights into launching and managing businesses.
</p>
<p className='underline text-[#FF922E] text-[18px] pt-2'>Learn More</p>
</div>

           <div className="col-span-6 md:mt-0 mt-6">
            <img className='w-[344px] h-[340px] md:w-[635px] md:h-[516px]' src={img1} alt="" />
            <div className="flex md:mt-6 mt-3 gap-3 md:gap-6">
                <img className='w-[238px] h-[(234px] md:w-[415px] md:h-[234px]' src={img2} alt="" />
                <div className="border-1 md:rounded-4xl rounded-2xl
                 border-[#D9D9D9] py-4 md:py-8 px-2 md:px-7 text-center">
<h2 className='text-[28px] md:text-[40px] font-bold md:font-semibold'>10K+</h2>
<p className='text-[14px] md:text-[16px] text-[#A9A9A9] '>Happy Student</p>
<h2 className='text-[28px] md:text-[40px] font-bold  md:font-semibold pt-4'>50+</h2>
<p className='text-[14px] md:text-[16px] text-[#A9A9A9] '>Expert Teacher</p>

                </div>
            </div>
            </div> 
            {/**md device learning bg */}
<div className="col-span-6 hidden md:block  px-16 text-left w-[635px] h-[778px]" style={{background: `url(${learningbg})`}}>
<h2 className="md:text-[50px] font-bold pt-30  text-white">Empowering Your Journey Through Learning</h2>
<p className='text-white md:text-[18px] pt-6'>
Our program bridges the gap between theory and practice by combining insights from seasoned industry professionals with the fresh, innovative perspectives of student entrepreneurs. Learn practical skills, strategies, and tools to succeed in finance and entrepreneurship.
</p>
<p className='text-white md:text-[18px] pt-4'>
Gain knowledge directly from industry leaders who have years of experience and success, as well as student entrepreneurs who bring relatable, real-time insights into launching and managing businesses.
</p>
<p className='underline text-[#FF922E] text-[20px] pt-12'>Learn More</p>
</div>

        </div>
    );
};

export default Learning;