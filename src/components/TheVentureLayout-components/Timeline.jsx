import circle from '../../assets/images/TheVenturLayout-Images/Ellipse 1.png'
import circle2 from '../../assets/images/TheVenturLayout-Images/Ellipse 1 (1).png'
import underline1 from '../../assets/images/TheVenturLayout-Images/Line 2.png'
import underline2 from '../../assets/images/TheVenturLayout-Images/Line 4.png'
import line from '../../assets/images/TheVenturLayout-Images/Line 7.png'


const Timeline = () => {
    return (
        <div style={{
            background:'linear-gradient(to bottom, #8A7CDB30, #FF922E1A)'}}
         className=" pt-8 pb-12 mb-16">
         <div className="w-11/12 mx-auto">
         <h2 className="text-center md:text-[50px] font-bold">Competition Timeline</h2>
         {/**cards */}
         <div className="md:grid relative md:grid-cols-12 gap-16">
         <div className="absolute  top-27 left-9  flex items-center">
                    <img src={circle2} alt="" />
                    <img className='w-[295px]'  src={underline1} alt="" /> 
                    <img src={circle} alt="" />
                    <img className='w-[295px]' src={underline1} alt="" /> 
                    <img src={circle2} alt="" />
                    <img className='w-[295px]'  src={underline1} alt="" /> 
                    <img src={circle} alt="" />
                </div>
            {/**card 1 */}
            <div className="col-span-3   mt-10 border-[#E1AF7E] bg-white
             rounded-4xl border-1 pt-6 pb-10 px-8 shadow-xl">
               
                <h2 className="md:text-[20px] text-[16px] font-bold">September 2025</h2>
            <p className="md:text-[16px]  pt-14">Sept 20th: Application Deadline</p>
            <p className="md:text-[16px] ">Sept 30th: Acceptances Notified</p>
            </div>
              {/**card 2 */}
              <div className="col-span-3   mt-10 border-[#E1AF7E] bg-white
             rounded-4xl border-1 pt-6 pb-10 px-8 shadow-xl">
                 
                <h2 className="md:text-[20px] text-[16px] font-bold">October 2025</h2>
            <p className="md:text-[16px]  pt-14">Oct 1st: Round 1 Begins</p>
            <p className="md:text-[16px] ">Oct 31st: Round 1 Submission Classes</p>
            </div>
              {/**card 3 */}
              <div className="col-span-3 mt-10 border-[#E1AF7E] bg-white
             rounded-4xl border-1 pt-6 pb-10 px-8 shadow-xl">
                <h2 className="md:text-[20px] text-[16px] font-bold">November 2025</h2>
            <p className="md:text-[16px]  pt-14">Nov 1st: Round 2 Begins</p>
            <p className="md:text-[16px] ">Nov 30th: Round 2 Submission clases</p>
            </div>
              {/**card 4 */}
              <div className="col-span-3 mt-10 border-[#E1AF7E] bg-white
             rounded-4xl border-1 pt-6 pb-10 px-8 shadow-xl">
                <h2 className="md:text-[20px] text-[16px] font-bold">December 2025</h2>
            <p className="md:text-[16px]  pt-14">Dec 1st: Round 3 Begins</p>
            <p className="md:text-[16px] ">Dec 31st: Round 3 Submission Classes</p>
            </div>

         </div>
     {/**cards */}
     <div className="md:grid mt-7 relative grid-cols-12 gap-16 ">
        <img className='absolute right-13 bottom-63 h-[60px]' src={line} alt="" />
     <div className="absolute  top-27 left-9  flex items-center">
     <img src={circle2} alt="" />
                    <img className='w-[295px]'  src={underline2} alt="" /> 
                    <img src={circle} alt="" />
                    <img className='w-[295px]' src={underline2} alt="" /> 
                    <img src={circle2} alt="" />
                    <img className='w-[295px]'  src={underline2} alt="" /> 
                    <img src={circle} alt="" />
                </div>
            {/**card 5 */}
            <div className="col-span-3 mt-10 border-[#E1AF7E] bg-white
             rounded-4xl border-1 pt-6 pb-10 px-8 shadow-xl">
                <h2 className="md:text-[20px] text-[16px] font-bold">March 2026</h2>
            <p className="md:text-[16px]  pt-14">April 1st: Competition Classes</p>
            <p className="md:text-[16px] ">April 25th: Competition Results Announced</p>
            </div>
              {/**card 6 */}
              <div className="col-span-3 mt-10 border-[#E1AF7E] bg-white
             rounded-4xl border-1 pt-6 pb-10 px-8 shadow-xl">
                <h2 className="md:text-[20px] text-[16px] font-bold">April 2026</h2>
            <p className="md:text-[16px]  pt-14">Mar 1st: Round 6 Begins</p>
            <p className="md:text-[16px] ">Mar 31st: Round 6 Ends</p>
            </div>
              {/**card 7 */}
              <div className="col-span-3 mt-10 border-[#E1AF7E] bg-white
             rounded-4xl border-1 pt-6 pb-10 px-8 shadow-xl">
                <h2 className="md:text-[20px] text-[16px] font-bold">February 2026</h2>
            <p className="md:text-[16px]  pt-14">Feb 1st: Round5 Begins</p>
            <p className="md:text-[16px] ">Feb 29th: Round 5 Classes</p>
            </div>
              {/**card 8 */}
              <div className="col-span-3 mt-10 border-[#E1AF7E] bg-white
             rounded-4xl border-1 pt-6 pb-10 px-8 shadow-xl">
                <h2 className="md:text-[20px] text-[16px] font-bold">January 2026</h2>
            <p className="md:text-[16px]  pt-14">Jan 1st: Round 4 Begins</p>
            <p className="md:text-[16px]  pr-10">Jan 31st: Round 4 Classes</p>
            </div>

         </div>
             
         </div>   
        </div>
    );
};

export default Timeline;