import applicationImg from '../../assets/images/TheVenturLayout-Images/applicationImg.png'
import circle from '../../assets/images/TheVenturLayout-Images/Ellipse 3510.svg'
import ring from '../../assets/images/TheVenturLayout-Images/Ellipse 28.svg'

const ApplicationDetails = () => {
    return (
        <div className="pt-14 pb-36" style={{
            background:'linear-gradient(to left, #8A7CDB30,#FF922E1A)',
        }}>
           <div className="w-11/12 mx-auto">
           <h2 className="font-bold md:text-[50px] text-center">Application Details</h2>
          <div className="md:grid grid-cols-12 gap-12 mt-12">
            <div className="col-span-6 relative z-10">
            <img className='absolute w-[263.9306px] h-[268.5px] 
            -left-12 -top-32 z-0' src={ring} alt="" />
  <img className='absolute -right-0 top-[231px] z-30' src={circle} alt="" />
               
<img className='relative z-20' src={applicationImg} alt="" />
<img className='absolute -right-9 -bottom-22 z-0' src={ring} alt="" />
            </div>
            <div className="col-span-6 flex flex-col gap-3">
                {/**div1 */}
                <div className="bg-white rounded-xl pt-4 pb-3 ps-6 pr-4">
                    <h2 className="md:text-[18px] text-[#E1AF7E] font-bold">
                        Eligibility</h2>
                        <p className="text-[15px] pt-2">This competition is open to high schoolers (grades 9-12 ) from anywhere in the United States or Canada. No prior entrepreneurship experience required.

                        </p>
                </div>
                 {/**div2 */}
                 <div className=" rounded-xl pt-4 pb-3 ps-6 pr-4
                border-[0.75px] border-[#B7B7B7]">
                    <h2 className="md:text-[18px]  font-bold">
                    Application Fee: $150</h2>
                        <p className="text-[15px] pt-2">Helps cover competition materials, mentorship programs, and resources provided throughout the 6 months.
                        </p>
                </div>
                {/**div3 */}
                <div className=" rounded-xl pt-4 pb-3 ps-6 pr-4
                border-[0.75px] border-[#B7B7B7]">
                    <h2 className="md:text-[18px]  font-bold">
                    Expectations</h2>
                        <p className="text-[15px] pt-2">Commitment to monthly Challenges over 6 months. A passion for finance, innovation and making a real impact. Driven, Curious, and ready to hustle.
                            
                        </p>
                </div>
                {/**div4 */}
                <div className=" rounded-xl pt-4 pb-3 ps-6 pr-4
                border-[0.75px] border-[#B7B7B7]">
                    <h2 className="md:text-[18px]  font-bold">
                    Registration Deadline</h2>
                        <p className="text-[15px] pt-2">All applicants must submit the registration form below by sept 30th, 2025 at 11:59pm ET
                              </p>
                </div>
 {/**div5 */}
 <div className=" rounded-xl pt-4 pb-3 ps-6 pr-4
                border-[0.75px] border-[#B7B7B7]">
                    <h2 className="md:text-[18px]  font-bold">
                    Content & Access</h2>
                        <p className="text-[15px] pt-2">Participants also receive 6 month access to Ascendance’s platform where all challenges and points will be released.
                                 </p>
                </div>

            </div>
            </div> 
           </div>
        </div>
    );
};

export default ApplicationDetails;