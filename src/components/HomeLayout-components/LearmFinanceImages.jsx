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
import Marquee from 'react-fast-marquee';

const LearnFinanceImages = () => {
    return (
        
        <div >
       <Marquee  direction='left'>
            <div className="flex gap-6 mt-8  flex-shrink-0">
                <img className= 'object-cover' src={img1} alt="" />
                <img className=' object-cover top-4' src={img2} alt="" />
                <img className='  object-cover' src={img3} alt="" />
                <img className=' object-cover' src={img4} alt="" />
                <img className=' object-cover' src={img5} alt="" />
                <img className='object-cover' src={img6} alt="" />
            </div>
            </Marquee>
            <Marquee  direction='right'>
            <div className="flex gap-6 mt-6  flex-shrink-0">
                <img className= ' object-cover' src={img7} alt="" />
                <img className='object-cover' src={img8} alt="" />
                <img className=' object-cover' src={img9} alt="" />
                <img className=' object-cover' src={img10} alt="" />
                <img className='object-cover' src={img11} alt="" />
                <img className='  object-cover' src={img12} alt="" />
            </div>
            </Marquee>
        </div>
         
    
    );
};

export default LearnFinanceImages;
