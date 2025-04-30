import img1 from '../../assets/images/image (7).png'
import img2 from '../../assets/images/image (6).png'
import img3 from '../../assets/images/image (5).png'
import img5 from '../../assets/images/image (8).png'
import img6 from '../../assets/images/image (9).png'
import img7 from '../../assets/images/image (10).png'


const Student = () => {
    return (
        <div className="my-16 mt-12 md:pt-16">
         <h2 className="text-center text-4xl font-bold">We’re Helping High School
            <br /> Students Launch their Start-Up <br /> & Finance Stories
         </h2>  
         <h2 className="text-center w-11/12 mx-auto block 
         md:hidden text-[20px] font-bold">We’re Helping High School
            Students Launch their Start-Up & Finance Stories
         </h2>  
         {/**cards */}
         <div className="flex gap-4 mt-16 animate-marquee">
            {/**Card 1 */}
            <div className=" min-w-[459.6px]  max-w-[459.6px] h-[213.57px]  flex gap-4 border-1 border-[#FF922E] py-4 pr-6 ps-4 rounded">
<div className='flex-1' >
    <img className='w-full' src={img1} alt="" />

</div>
<div className=' ps-0 flex-2 '>
<p className="text-[14px]">Suspendisse id ullamcorper leo. Nam consequat arcu a lorem convallis, ultricies tristique elit biben dumaecenas fermentum, miut ullam corper lobo rtisnibh augue ultrices odio.

</p>
<h2 className="text-[#FF922E] text-[16px] pt-2 font-bold"> Kimberly Michelle</h2>
<p className="text-[#676767]">Sr. Product Designer</p>
</div>
            </div>
              {/**card 2 */}
              <div style={{background:'linear-gradient(to left, #8A7CDB30, #FF922E1A'}}
               className=" min-w-[459.6px] max-w-[459.6px] h-[213.57px] flex gap-4   py-4 pr-6 ps-4 rounded">
<div className='flex-1' >
    <img className='w-full' src={img2} alt="" />

</div>
<div className=' ps-0 flex-2 '>
<p className="text-[14px] text-[#434343]">Fermentum justo turpis in justo. Pellentesque fringilla eget nisl eget interdum. Vivamus semper enim at nunc fringilla faucibus. Suspendisse mattis nunc quis lorem faucibus molestie.
</p>
<h2 className=" text-[16px] pt-2 font-bold"> Sam Jhone Geroage</h2>
<p className="text-[#676767]">Sr. Product Designer</p>
</div>
            </div>
             {/**card 3 */}
             <div className=" min-w-[459.6px] max-w-[459.6px] h-[213.57px] flex gap-4  border-1 border-[#FF922E] p-4 pr-6  rounded">
<div className='flex-1' >
    <img className='w-full' src={img3} alt="" />

</div>
<div className=' ps-0 flex-2 '>
<p className="text-[14px]">Nulla nec viverra enim. Nullam rutrum rutrum sem sed lacinia. Proin elit urna, pharetra non luctus eu, mattis eu magna. Maecenas eu tincidunt metus. Integer suscipit sodales leo nec vestibulum.
</p>
<h2 className="text-[#FF922E] text-[16px] pt-2 font-bold"> Anthony Mark</h2>
<p className="text-[#676767]">Sr. Product Designer</p>
</div>
            </div>
            {/**card 4 */}
            <div className=" min-w-[459.6px]  max-w-[459.6px] h-[213.57px]  flex gap-4  border-l-0 border-1 border-[#FF922E] py-4 pr-6 ps-0 rounded">
<div className='flex-1' >
    <img className='w-full' src={img1} alt="" />

</div>
<div className=' ps-0 flex-2 '>
<p className="text-[14px]">Suspendisse id ullamcorper leo. Nam consequat arcu a lorem convallis, ultricies tristique elit biben dumaecenas fermentum, miut ullam corper lobo rtisnibh augue ultrices odio.

</p>
<h2 className="text-[#FF922E] text-[16px] pt-2 font-bold"> Kimberly Michelle</h2>
<p className="text-[#676767]">Sr. Product Designer</p>
</div>
            </div>

         </div>

   {/**card row 2 */}    
   <div className="flex  gap-4 mt-4 animate-marquee">
    {/**card 5 */}
    <div className=" min-w-[459.6px] max-w-[459.6px] h-[213.57px] flex gap-4  border-1 border-[#FF922E] p-4 pr-6  rounded">
<div className='flex-1' >
    <img className='w-full' src={img3} alt="" />

</div>
<div className=' ps-0 flex-2 '>
<p className="text-[14px]">Nulla nec viverra enim. Nullam rutrum rutrum sem sed lacinia. Proin elit urna, pharetra non luctus eu, mattis eu magna. Maecenas eu tincidunt metus. Integer suscipit sodales leo nec vestibulum.
</p>
<h2 className="text-[#FF922E] text-[16px] pt-2 font-bold"> Anthony Mark</h2>
<p className="text-[#676767]">Sr. Product Designer</p>
</div>
            </div>
 {/**card 6 */}
 <div className=" min-w-[459.6px] max-w-[459.6px] h-[213.57px] flex gap-4  border-1 border-[#FF922E] p-4 pr-6  rounded">
<div className='flex-1' >
    <img className='w-full' src={img5} alt="" />

</div>
<div className=' ps-0 flex-2 '>
<p className="text-[14px]">Aliquam non tellus et nibh faucibus gravida quis nec ligula. Maecenas ut luctus velit. Fusce at ligula faucibus, luctus erat sit amet, convallis sapien. Integer faucibus quis massa facilisis.
</p>
<h2 className="text-[#FF922E] text-[16px] pt-2 font-bold"> George Nicholas</h2>
<p className="text-[#676767]">Sr. Product Designer</p>
</div>
            </div>
           {/**card 7*/}
 <div className=" min-w-[459.6px] max-w-[459.6px] h-[213.57px] flex gap-4  border-1 border-[#FF922E] p-4 pr-6  rounded">
<div className='flex-1' >
    <img className='w-full' src={img6} alt="" />

</div>
<div className=' ps-0 flex-2 '>
<p className="text-[14px]">Fringilla Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In at placerat tellus, ut iaculis mauris. Vestibulum dignissim quam ac justo.</p>
<h2 className="text-[#FF922E] text-[16px] pt-2 font-bold"> Kathleen Angela</h2>
<p className="text-[#676767]">Sr. Product Designer</p>
</div>
            </div>
    {/**card 8 */}
    <div style={{background:'linear-gradient(to left, #8A7CDB30, #FF922E1A'}}
     className=" min-w-[459.6px] max-w-[459.6px] h-[213.57px] flex gap-4   py-4 pr-6 ps-4 rounded">
<div className='flex-1' >
    <img className='w-full' src={img7} alt="" />

</div>
<div className=' ps-0 flex-2 '>
<p className="text-[14px] text-[#434343]">Etiam ut sem tortor. Praesent laoreet massa a lectus viverra, vitae facilisis turpis aliquet. Donec est ante, molestie sit amet dignissim sed, fringilla vel eros.

</p>
<h2 className=" text-[16px] pt-2 font-bold"> Christine Janet</h2>
<p className="text-[#676767]">Sr. Product Designer</p>
</div>
            </div>        

        

    </div>  
        </div>
    );
};

export default Student;