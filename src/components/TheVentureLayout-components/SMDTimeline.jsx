import circle from '../../assets/images/TheVenturLayout-Images/Ellipse 1.png'
import underline1 from '../../assets/images/TheVenturLayout-Images/Line 2.png'

const SMDTimeline = () => {
     return (
 <div style={{
            background:'linear-gradient(to bottom, #8A7CDB30, #FF922E1A)'}}
         className=" pt-8 pb-12  md:mb-16 mt-10">
         <div className="w-11/12 mx-auto">
         <h2 className="text-center text-[28px] font-bold">Competition Timeline</h2>
         {/**cards */}
         <div className="grid relative grid-cols-12 gap-4">
         <div className="absolute  top-18 left-3  flex items-center">
                    <img className='w-[22px] h-[22px]' src={circle} alt="" />
                    <img className='w-[158px]' src={underline1} alt="" /> 
                    <img className='w-[22px] h-[22px]' src={circle} alt="" />
                   
                </div>
            {/**card 1 */}
            <div className="col-span-6   mt-5 border-[#E1AF7E] bg-white
             rounded-2xl border-1 px-2 py-4">
               
                <h2 className=" text-[16px] font-bold">September 2025</h2>
            <p className="text-[13px]  pt-10">Sept 20th: Application Deadline</p>
            <p className="text-[13px] ">Sept 30th: Acceptances Notified</p>
            </div>
              {/**card 2 */}
              <div className="col-span-6   mt-5 border-[#E1AF7E] bg-white
             rounded-2xl border-1 px-2 py-4">
                 
                <h2 className=" text-[16px] font-bold">October 2025</h2>
            <p className="text-[13px]  pt-10">Oct 1st: Round 1 Begins</p>
            <p className="text-[13px] ">Oct 31st: Round 1 Submission Classes</p>
            </div>
              {/**card 3 */}
              <div className="col-span-6 relative mt-1 border-[#E1AF7E] bg-white
             rounded-2xl border-1 px-2 py-4">
                 <div className="absolute  top-12 left-3  flex items-center">
                    <img className='w-[22px] h-[22px]' src={circle} alt="" />
                    <img className='w-[160px]' src={underline1} alt="" /> 
                    <img className='w-[22px] h-[22px]' src={circle} alt="" />
                   
                </div>
                <h2 className=" text-[16px] font-bold">November 2025</h2>
            <p className="text-[13px]  pt-10">Nov 1st: Round 2 Begins</p>
            <p className="text-[13px] ">Nov 30th: Round 2 Submission clases</p>
            </div>
              {/**card 4 */}
              <div className="col-span-6 mt-1 border-[#E1AF7E] bg-white
             rounded-2xl border-1 px-2 py-4">
                <h2 className=" text-[16px] font-bold">December 2025</h2>
            <p className="text-[13px]  pt-10">Dec 1st: Round 3 Begins</p>
            <p className="text-[13px] ">Dec 31st: Round 3 Submission Classes</p>
            </div>

         </div>
     {/**cards */}
     <div className="grid relative grid-cols-12 gap-4 ">
     <div className="absolute  top-18 left-3  flex items-center">
                    <img className='w-[22px] h-[22px]' src={circle} alt="" />
                    <img className='w-[158px]' src={underline1} alt="" /> 
                    <img className='w-[22px] h-[22px]' src={circle} alt="" />
                   
                </div>
            {/**card 5 */}
            <div className="col-span-6 mt-5 border-[#E1AF7E] bg-white
             rounded-2xl border-1 px-2 py-4">
                <h2 className=" text-[16px] font-bold">March 2026</h2>
            <p className="text-[13px]  pt-10">April 1st: Competition Classes</p>
            <p className="text-[13px] ">April 25th: Competition Results Announced</p>
            </div>
              {/**card 6 */}
              <div className="col-span-6 mt-5 border-[#E1AF7E] bg-white
             rounded-2xl border-1 px-2 py-4">
                <h2 className=" text-[16px] font-bold">April 2026</h2>
            <p className="text-[13px]  pt-10">Mar 1st: Round 6 Begins</p>
            <p className="text-[13px] ">Mar 31st: Round 6 Ends</p>
            </div>
              {/**card 7 */}
              <div className="col-span-6 relative mt-1 border-[#E1AF7E] bg-white
             rounded-2xl border-1 px-2 py-4">
                 <div className="absolute  top-12 left-3  flex items-center">
                    <img className='w-[22px] h-[22px]' src={circle} alt="" />
                    <img className='w-[158px]' src={underline1} alt="" /> 
                    <img className='w-[22px] h-[22px]' src={circle} alt="" />
                   
                </div>
                <h2 className=" text-[16px] font-bold">February 2026</h2>
            <p className="text-[13px]  pt-10">Feb 1st: Round5 Begins</p>
            <p className="text-[13px] ">Feb 29th: Round 5 Classes</p>
            </div>
              {/**card 8 */}
              <div className="col-span-6 mt-1 border-[#E1AF7E] bg-white
             rounded-2xl border-1 px-2 py-4">
                <h2 className=" text-[16px] font-bold">January 2026</h2>
            <p className="text-[13px]  pt-10">Jan 1st: Round 4 Begins</p>
            <p className="text-[13px]  pr-10">Jan 31st: Round 4 Classes</p>
            </div>

         </div>
             
         </div>   
        </div>
           );
};

export default SMDTimeline;