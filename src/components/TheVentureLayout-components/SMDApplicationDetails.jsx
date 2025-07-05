import applicationImg from '../../assets/images/TheVenturLayout-Images/applicationImg.png'
import circle from '../../assets/images/TheVenturLayout-Images/Ellipse 3510.svg'
import ring from '../../assets/images/TheVenturLayout-Images/Ellipse 28.svg'
import dotted from '../../assets/images/TheVenturLayout-Images/Group 77.svg'
import star from '../../assets/images/TheVenturLayout-Images/Group 87.svg'


const SMDApplicationDetails = () => {
    return (
        <div>
             <div className="pt-10 pb-18" style={{
                        background:'linear-gradient(to right, #8A7CDB30,#FF922E1A)',
                    }}>
                       <div className="w-10/12 mx-auto">
                       <h2 className="font-bold text-[28px] text-center">
                        Application Details</h2>
                       
                        <div className=" flex flex-col gap-5 mt-4">
                            {/**div1 */}
                            <div className="bg-white rounded-xl pt-4 pb-3 ps-6 pr-4">
                                <h2 className="text-[16px] text-[#E1AF7E] font-bold">
                                    Eligibility</h2>
                                    <p className="text-[14px] pt-2">This competition is open to high schoolers (grades 9-12 ) from anywhere in the United States or Canada. No prior entrepreneurship experience required.
            
                                    </p>
                            </div>
                             {/**div2 */}
                             <div className=" rounded-xl pt-4 pb-3 ps-6 pr-4
                            border-[0.75px] border-[#B7B7B7]">
                                <h2 className="text-[16px]  font-bold">
                                Application Fee: $150</h2>
                                    <p className="text-[14px] pt-2">Helps cover competition materials, mentorship programs, and resources provided throughout the 6 months.
                                    </p>
                            </div>
                            {/**div3 */}
                            <div className=" rounded-xl pt-4 pb-3 ps-6 pr-4
                            border-[0.75px] border-[#B7B7B7]">
                                <h2 className="text-[16px]  font-bold">
                                Expectations</h2>
                                    <p className="text-[14px] pt-2">Commitment to monthly Challenges over 6 months. A passion for finance, innovation and making a real impact. Driven, Curious, and ready to hustle.
                                        
                                    </p>
                            </div>
                            {/**div4 */}
                            <div className=" rounded-xl pt-4 pb-3 ps-6 pr-4
                            border-[0.75px] border-[#B7B7B7]">
                                <h2 className="text-[16px]  font-bold">
                                Registration Deadline</h2>
                                    <p className="text-[14px] pt-2">All applicants must submit the registration form below by sept 30th, 2025 at 11:59pm ET
                                          </p>
                            </div>
             {/**div5 */}
             <div className=" rounded-xl pt-4 pb-3 ps-6 pr-4
                            border-[0.75px] border-[#B7B7B7]">
                                <h2 className="text-[16px]  font-bold">
                                Content & Access</h2>
                                    <p className="text-[14px] pt-2">Participants also receive 6 month access to Ascendance’s platform where all challenges and points will be released.
                                             </p>
                            </div>
            
                        </div>
                        <div className=" relative z-10 mt-10">
                        <img className='absolute w-[120] h-[123px] 
                        -left-4 -top-13 z-0' src={ring} alt="" />
             <img className='absolute left-2 -top-3 z-30' src={dotted} alt="" />
            <img className='relative z-20' src={applicationImg} alt="" />
             <img className='absolute w-[61.4811px] h-[61.4811px] -right-6 top-36 z-30' src={circle} alt="" />
               <img className='absolute -left-5 -bottom-16 z-30' src={star} alt="" />      
                        </div>

                        </div> 
                       </div>
                    </div>
      
    );
};

export default SMDApplicationDetails;