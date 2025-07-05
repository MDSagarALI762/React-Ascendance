import Footer from "../components/Footer";
import ApplicationDetails from "../components/TheVentureLayout-components/ApplicationDetails";
import Banner from "../components/TheVentureLayout-components/Banner";
import Basics from "../components/TheVentureLayout-components/Basics";
import GrandPrize from "../components/TheVentureLayout-components/GrandPrize";
import Join from "../components/TheVentureLayout-components/Join";
import Learning from "../components/TheVentureLayout-components/Learning";
import Navbar from "../components/TheVentureLayout-components/Navbar";
import Questions from "../components/TheVentureLayout-components/Questions";
import SMDApplicationDetails from "../components/TheVentureLayout-components/SMDApplicationDetails";
import SMDGrandPrize from "../components/TheVentureLayout-components/SMDGrandPrize";
import SMDTimeline from "../components/TheVentureLayout-components/SMDTimeline";
import Testimonials from "../components/TheVentureLayout-components/Testimonials";
import Timeline from "../components/TheVentureLayout-components/Timeline";

const TheVentureLayout = () => {
    return (
        <div className="w-full max-w-screen-xl mx-auto lg:mx-0">
        <header style={{background:'linear-gradient(to right, #00AAEB0D, #E1AF7E40)'}} 
        className=" md:py-8">
           
            <Navbar></Navbar>
            <Banner></Banner>
        </header>
        <main>
         <Learning></Learning>  
         <Join></Join> 
         <Basics></Basics>
         <div className="md:block hidden">
         <Timeline></Timeline>

         </div>
         <div className="block md:hidden">
        <SMDTimeline></SMDTimeline>

         </div>
        <div className="md:block hidden">
        <GrandPrize></GrandPrize>
        </div>
        <div className="block md:hidden">
           <SMDGrandPrize></SMDGrandPrize> 
        </div>
        <div className="md:block hidden">
        <ApplicationDetails></ApplicationDetails>
        </div>
        <div className="block md:hidden">
         <SMDApplicationDetails></SMDApplicationDetails>
        </div>
        <Testimonials></Testimonials>
        <Questions></Questions>
        </main>
<footer>
<Footer></Footer>
</footer>
        </div>
    );
};

export default TheVentureLayout;
