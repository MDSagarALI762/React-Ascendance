import circle1 from '../../assets/images/Ellipse 3509.png'
import img1 from '../../assets/images/Ellipse 3500.png'
import frame1 from '../../assets/images/Frame 390.png'
import frame2 from '../../assets/images/Frame 391.png'
import frame3 from '../../assets/images/Frame 391 (1).png'
import frame4 from '../../assets/images/Frame 391 (2).png'
import frame5 from '../../assets/images/Frame 391 (3).png'
import rightangle from '../../assets/images/Vector.png'
import rightangle2 from '../../assets/images/Vector2.png'
import star from '../../assets/images/Group 1171274816.png'
import circle2 from '../../assets/images/Ellipse 56.png'

const LearnInvest = () => {
    return (
        <div className="w-11/12 mx-auto mb-16">
            {/**text description */}
            <div className="md:flex justify-evenly items-center">
<div>
<img src={circle1} alt="" />
</div>
<div className='text-center'>
    <h2 className="text-5xl font-bold">Learn. Invest. Build</h2>
    <p className="pt-5  font-semibold">Gamified Learning, Expert-Curated Content, and a Supportive <br /> Community to Help You Succeed</p>
</div>
<div>
    <img src={img1} alt="" />
</div>
            </div>
            {/**cards */}

            <div className='md:grid grid-cols-12 gap-8 mt-10'>
                {/**card 1 */}
<div className="col-span-4 flex flex-col gap-8 p-8 bg-[#012555] rounded-lg shadow-sm">
<div className='flex gap-4 items-center'>
    <img src={frame1} alt="" /> 
    <h2 className="text-xl font-bold text-white">Pilot Cohort Registration</h2>
</div>
<p className=" text-white">Join the Pilot Cohort of Asendance+ by Signing up Today!

</p>
<div className="flex gap-4 items-center"><p className=" text-[#E1AF7E]">Until 30 September 2025
</p>
<img src={rightangle} alt="" />
</div>
</div>

   {/**card 2 */}
   <div className="col-span-4 flex flex-col border-[#D8D8D8] gap-8 p-8 border-1 rounded-lg shadow-sm">
<div className='flex gap-4 items-center'>
    <img src={frame2} alt="" /> 
    <h2 className="text-xl font-bold ">Video And written Content</h2>
</div>
<p className=" text-[#838383]">Read And Watch Educational Content Curated by lvy league Students Featuring Industry Experts.

</p>
<div className="flex gap-4 items-center">
    <p className=" text-[#E1AF7E]">October 2025 to March 2026
</p>
<div>
<img  src={rightangle2} alt="" />
</div>
</div>
</div>
 {/**card 3 */}
 <div className="col-span-4 flex flex-col border-[#D8D8D8] gap-8 p-8 border-1 rounded-lg shadow-sm">
<div className='flex gap-4 items-center'>
    <img src={frame3} alt="" /> 
    <h2 className="text-xl font-bold ">Monthly Challenges</h2>
</div>
<p className=" text-[#838383]"> 
Take part in the monthly challenges and collect points to secure your spot a the top of the Leaderboard.
</p>
<div className="flex gap-4 items-center">
    <p className=" text-[#E1AF7E]">October 2025 to March 2026
</p>
<div>
<img  src={rightangle2} alt="" />
</div>
</div>
</div>



            </div>
{/**star */}
            <div className="md:grid grid-cols-12 gap-8 mt-10">
                <div className="col-span-2">
<img className='mt-[160px] ms-[70px]' src={star} alt="" />
                </div>
        {/**card 4 */}
 <div className="col-span-4 flex flex-col border-[#D8D8D8] gap-8 p-8 border-1 rounded-lg shadow-sm">
<div className='flex gap-4 items-center'>
    <img src={frame4} alt="" /> 
    <h2 className="text-xl font-bold ">Final Leaderboard Announced</h2>
</div>
<p className=" text-[#838383]"> 
Final Challenge completes and the Top 100 Winners of the 6 month challenge are announced.
</p>
<div className="flex gap-4 items-center">
    <p className=" text-[#E1AF7E]">October 2025 to March 2026
</p>
<div>
<img  src={rightangle2} alt="" />
</div>
</div>
</div>

{/**card 5 */}
<div className="col-span-4 flex flex-col border-[#D8D8D8] gap-8 p-8 border-1 rounded-lg shadow-sm">
<div className='flex gap-4 items-center'>
    <img src={frame5} alt="" /> 
    <h2 className="text-xl font-bold ">Monthly Challenges</h2>
</div>
<p className=" text-[#838383]"> 
The prizes for top 100 Winners are released gradually with a tentative schedule as below.
</p>
<div className="flex gap-4 items-center">
    <p className=" text-[#E1AF7E]">May 2026 to October 2026
</p>
<div>
<img  src={rightangle2} alt="" />
</div>
</div>
</div>
{/**circle */}
<div className="col-span-2">
<img className='mt-[240px] ms-[60px]' src={circle2} alt="" />
                </div>



            </div>
        </div>
    );
};

export default LearnInvest;