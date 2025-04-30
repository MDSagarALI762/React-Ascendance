import star from '../../assets/images/Group 1171274816.png'
import circle from '../../assets/images/Ellipse 35010.png'
import circle2 from '../../assets/images/Ellipse 3508.png'
import circle3 from '../../assets/images/Ellipse 3499.png'
import card1 from '../../assets/images/Image (2).png'
import card2 from '../../assets/images/Image (3).png'
import card3 from '../../assets/images/Image (4).png'
import SMDPartnershipCard from './SMDPartnershipCard'
const Partnership = () => {
    return (
        <div className="md:mt-6 mt-0 md:mb-16">
            <hr className=" md:block hidden text-[#E4E4E4]" />
            <div className="w-10/12 mx-auto relative">
            <div className="flex md:justify-between justify-center items-center mt-16">
<img className='hidden md:block' src={star} alt="" />
<h2 className='text-[#9E7758]  font-bold text-[16px] md:text-2xl'>Partnership</h2>
<img className='hidden md:block' src={circle} alt="" />
            </div>
           {/**small device image star start*/}
           <img className='absolute md:hidden block right-0 -top-5
            ' src={star} alt="" />
            {/**small device image star end*/}
            <div className=" md:flex justify-center gap-24 items-center pt-2 md:pt-8">
<img className='hidden md:block' src={circle2} alt="" />
           
            <h2 className='md:text-[56px] text-2xl font-bold'>In Partnership With</h2>
            <img className='hidden md:block' src={circle3} alt="" />
            </div>
            {/**cards */}
            {/**small device card */}
            <div className='block md:hidden'>
<SMDPartnershipCard></SMDPartnershipCard>
            </div>
            {/**md device card */}
            <div className="hidden md:block md:grid grid-cols-12 gap-12">
{/**card 1 */}
<div className="col-span-4 shadow-sm  border-1  border-[#DFDFDF] mt-6 md:mt-10 rounded-2xl">
<div className="p-8 pb-5">
    <img src={card1} alt="" />
   <div>
     <h2 className="text-2xl font-bold pt-4">
    Ascendance SA
    </h2>
   </div>
</div>
<div className="bg-[#E1AF7EB8]  border-1 shadow-sm border-[#DFDFDF] rounded-b-2xl ">
    <p className='p-8'>Gamified course for teens that builds essential financial literacy and entrepreneurship skills.

    </p>
</div>

</div>
{/**card2 */}
<div className="col-span-4 shadow-sm  border-1  border-[#DFDFDF] mt-10 rounded-2xl">
<div className="p-8 pb-5">
    <img src={card2} alt="" />
   <div>
     <h2 className="text-2xl font-bold pt-4">
     Ascendance MENA
    </h2>
   </div>
</div>
<div className="bg-[#E1AF7EB8]  border-1 shadow-sm border-[#DFDFDF] rounded-b-2xl ">
    <p className='p-8'>Gamified course for teens that builds essential financial literacy and entrepreneurship skills.

    </p>
</div>

</div>
{/**card 3 */}
<div className="col-span-4 shadow-sm  border-1  border-[#DFDFDF] mt-10 rounded-2xl">
<div className="p-8 pb-5">
    <img src={card3} alt="" />
   <div>
     <h2 className="text-2xl font-bold pt-4">
     Ascendance APAC
    </h2>
   </div>
</div>
<div className="bg-[#E1AF7EB8]  border-1 shadow-sm border-[#DFDFDF] rounded-b-2xl ">
    <p className='p-8'>Gamified course for teens that builds essential financial literacy and entrepreneurship skills.

    </p>
</div>

</div>



            </div>
{/**section footer */}
<div className="flex justify-center md:justify-between mt-6 md:mt-10 items-center">
    <img className='text-[#B27804] hidden md:block'  src={circle} alt="" />
    <button className='bg-[#062A44] w-full text-white font-bold 
    md:py-3 md:px-9 py-2 md:w-[164px] rounded-full'>SUBSCRIBE</button>
<img className='md:block hidden'  src={star} alt="" />
</div>

            </div>
        </div>
    );
};

export default Partnership;