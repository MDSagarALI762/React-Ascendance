import star from '../../assets/images/star2.png'
import img1 from '../../assets/images/Frame 1376.png'
import img2 from '../../assets/images/Frame 1374.png'
import img3 from '../../assets/images/DSC00125.png'
import img4 from '../../assets/images/DSC06453.png'


const City = () => {
    return (
        <div style={{background:'linear-gradient(to bottom, #8A7CDB30, #FF922E1A'}} 
        className="md:py-16 py-10">
        <div className="w-11/12 mx-auto ">
        {/**City description */}
          <div className="md:grid grid-cols-12 gap-10">
            <div className="col-span-6">
            <h2 className="text-[#9E7758] text-[18px]">Stand A Chance To win A</h2>
           <h2 className="md:text-[56px] text-2xl pt-2 md:pt-0 font-bold">Free trip to new york city!</h2>
           <button className="py-3 px-4 text-[12px] mt-6 block md:hidden bg-white
           border-1 font-bold uppercase border-b-2 border-[#180F1F]
            rounded-full">Check out The Venture Challenge</button>
  
            </div>
            <div className="col-span-6 space-y-4 pt-6 md:pt-12">
<div className="flex md:gap-4 gap-2 md:items-center">
    <img className='w-[19px] h-[19px] mt-[4px] md:mt-0' src={star} alt="" />
    <h2 className="md:text-2xl text-[16px]  text-[#5B5B5B]">Visit Ascendance and The MF in New York City</h2>
</div>
<div className="flex md:gap-4 gap-2 md:items-center">
    <img className='w-[19px] h-[19px] mt-[4px] md:mt-0' src={star} alt="" />
    <h2 className="md:text-2xl text-[16px] text-[#5B5B5B]">Attend NGEN’s Invite only ivy league entrepreneurship conference</h2>
</div>
            </div>
            </div>  
            {/**city image */}
            <div className="grid md:grid-cols-12 grid-cols-1 mt-2 md:mt-8 ">
<div className="col-span-6 order-2 md:order-1 space-y-8">
    <button className="py-2 px-6 bg-white hidden md:block border-1 font-bold uppercase border-b-2 border-[#180F1F] rounded-full">Check out The Venture Challenge</button>
<div className='ms-0 md:ms-20'>
   <div className=' hidden md:block'>
     <img className='w-62 hidden md:block' src={img1} alt="" />
   </div>
   <div className=' md:hidden block mt-4'>
   <h2 className="text-[17px] font-bold pt-2 mb-2">Find Out More In Our Challenge Page</h2>
 
   <img  src={img4} alt="" />
   </div>
   <div>
   <h2 className="text-2xl font-bold pt-2 hidden md:block">Find Out More In Our <br /> Challenge Page</h2>

    </div></div>

</div>
<div className="col-span-6 mt-4 order-1 md:order-2">
    <img className=' hidden md:block' src={img2} alt="" />
    <img className=' md:hidden block' src={img3} alt="" />
</div>

            </div>
            </div>    
        </div>
    );
};

export default City;