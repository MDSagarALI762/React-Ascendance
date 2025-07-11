import { useState } from 'react';
import { useEffect } from 'react';
import Marquee from 'react-fast-marquee';

const Future = () => {
  const [futureImages,setFutureImages] = useState([]);

  const imgButtonText =[
 
  "TASNIA","KAL S","AHMED ALI","OLA","OLIVIA" ,
   "JESNIA", "SMITH K", "DAVID", "CHAN LEE"
    
  ];
  useEffect(()=>{
fetch('FutureImage.json')
.then(res => res.json())
.then(data => setFutureImages(data))
  },[])
  
    return (
        <div className="  bg-[#02265A] pt-10 pb-8">
         <h2 className="hidden md:block text-center text-4xl font-bold text-white">
         Your Future Starts Here - Join Our <br /> Community of
         <span className="text-[#E1AF7E]"> Gen Zs</span>  Leading the World
            </h2> 
            <h2 className="text-center block md:hidden text-[20px] md:text-4xl font-bold text-white">
         Your Future Starts Here - Join Our Community of
         <span className="text-[#E1AF7E]"> Gen Zs</span>  Leading the World
            </h2>   
            <div className="text-center">
            <button className="font-bold uppercase bg-white rounded-full
            md:py-3 py-2 w-full md:w-[164px] md:px-8 text-[16px] mt-4 mb-10  md:my-8">Subscribe</button> 
      </div>
      {/**Future section image */}
      <div className="flex flex-col gap-6 max-w-[375px] md:max-w-none">
  {/* First Row */}
  <Marquee direction="left">
  <div className="flex gap-6 justify-center">
    {futureImages.slice(0, 5).map((futureImage, index) => (
      <div key={futureImage.id} className="flex-shrink-0 relative group
       hover:border-purple-600 hover:border-4">
        <img
          className="w-[376px] h-[208px] object-cover"
          src={futureImage.image}
          alt=""
        />
          <button className='bg-white rounded-full py-1 px-5 text-[12px] 
    text-[#626978] absolute top-5 left-5'>
        {imgButtonText[index]}
       </button>  
       <h1 className='bg-purple-600 text-white  px-2 absolute
 hidden group-hover:inline-block rounded-lg -top-12 
  mt-2 text-2xl'>cards/streamer-card</h1>
     
      </div>
    ))}
  </div>
  </Marquee>

  {/* Second Row */}
  <Marquee direction="right">
  <div className="flex gap-6 justify-center">
    {futureImages.slice(5, 9).map((futureImage, index) => (
      <div key={futureImage.id} className="flex-shrink-0 relative group hover:border-purple-600 
hover:border-4">
        <img
          className="w-[376px] h-[208px] object-cover"
          src={futureImage.image}
          alt=""
        />
      <button className='bg-white rounded-full py-1 px-5 text-[12px] 
    text-[#626978] absolute top-5 left-5'>
     {imgButtonText[index + 5]}
       </button>
       <h1 className='bg-purple-600 text-white  px-2 absolute
 hidden group-hover:inline-block rounded-lg -top-12 
  mt-2 text-2xl'>cards/streamer-card</h1>
      </div>
    ))}
  </div>
  </Marquee>
</div>

       

        </div>
    );
};

export default Future;