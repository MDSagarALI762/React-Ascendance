import img1 from '../../assets/images/Frame 1393.png';
import img2 from '../../assets/images/Frame 1394.png';
import img3 from '../../assets/images/Frame 1397.png';
import img4 from '../../assets/images/Frame 1399.png';
import img5 from '../../assets/images/Frame 1401.png';
import img6 from '../../assets/images/Frame 1403.png';
import img7 from '../../assets/images/Frame 1395.png';
import img8 from '../../assets/images/Frame 1396.png';
import img9 from '../../assets/images/Frame 1398.png';
import img10 from '../../assets/images/Frame 1400.png';
import img11 from '../../assets/images/Frame 1402.png';
import img12 from '../../assets/images/Frame 1405.png';

const LearnFinanceImages = () => {
    return (
        <div>
        <div className="relative md:mt-6  mt-0 h-115 animate-marquee">
            <div className="flex gap-6 mt-8 absolute flex-shrink-0">
                <img className= 'object-cover' src={img1} alt="" />
                <img className='mt-4 object-cover' src={img2} alt="" />
                <img className='mt-8 object-cover' src={img3} alt="" />
                <img className='mt-4 object-cover' src={img4} alt="" />
                <img className='mt-6 object-cover' src={img5} alt="" />
                <img className='object-cover' src={img6} alt="" />
            </div>
            <div className="flex gap-6 absolute top-53 flex-shrink-0">
                <img className= 'mt-12 object-cover' src={img7} alt="" />
                <img className='mt-14 object-cover' src={img8} alt="" />
                <img className='mt-18 object-cover' src={img9} alt="" />
                <img className='mt-16 object-cover' src={img10} alt="" />
                <img className='mt-14 object-cover' src={img11} alt="" />
                <img className=' mt-12 object-cover' src={img12} alt="" />
            </div>
        </div>
         {/* Inline Style for Animation *1*/}
         <style jsx>{`
            @keyframes marquee {
              0% {
                transform: translateX(100%);
              }
              100% {
                transform: translateX(-100%);
              }
            }
            .animate-marquee {
              animation: marquee 30s linear infinite;
            }
          `}</style>
    </div>
    );
};

export default LearnFinanceImages;
