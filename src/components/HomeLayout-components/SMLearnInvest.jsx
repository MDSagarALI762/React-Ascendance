import img1 from '../../assets/images/Ellipse 3500.png'

const SMLearnInvest = () => {
    return (
        <div className="w-11/12 mx-auto mt-10">
        <div className="relative z-10 pb-8">
        <div className='text-center'>
             <h2 className="text-2xl z-10 relative font-bold">Learn. Invest. Build</h2>
             <p className="pt-3 text-[16px] relative z-10 font-semibold">Gamified Learning, Expert-Curated <br /> Content, and a Supportive  Community <br /> to Help You Succeed</p>
         </div>
         <div>
             <img className='absolute z-0 -top-7 right-8' src={img1} alt="" />
         </div> 
         </div> 
        </div>
    );
};

export default SMLearnInvest;