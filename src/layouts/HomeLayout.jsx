

import Footer from "../components/Footer";
import Banner from "../components/HomeLayout-components/Banner";
import Boost from "../components/HomeLayout-components/Boost";
import City from "../components/HomeLayout-components/City";
import Future from "../components/HomeLayout-components/Future";
import Journey from "../components/HomeLayout-components/Journey";
import LearnFinance from "../components/HomeLayout-components/LearnFinance";
import LearnInvest from "../components/HomeLayout-components/LearnInvest";
import Navbar from "../components/HomeLayout-components/Navbar";
import Partnership from "../components/HomeLayout-components/Partnership";
import Potential from "../components/HomeLayout-components/Potential";
import SMLearnInvest from "../components/HomeLayout-components/SMLearnInvest";
import SMLearnInvestCard from "../components/HomeLayout-components/SMLearnInvestCard";
import Student from "../components/HomeLayout-components/Student";




const HomeLayout = () => {
    return (
        <div>
         <Navbar></Navbar> 
         <Banner></Banner>
         <LearnFinance></LearnFinance> 
         <Potential></Potential> 
         <Boost></Boost>
        <div className="hidden md:block"> <LearnInvest></LearnInvest>
        </div>
        <div className="block md:hidden mb-10">
            <SMLearnInvest></SMLearnInvest>
            <SMLearnInvestCard></SMLearnInvestCard>
        </div>
         <City></City>
         <Partnership></Partnership>
         <Student></Student>
         <Journey></Journey>
         <Future></Future>
         <Footer></Footer>
        </div>
    );
};

export default HomeLayout;