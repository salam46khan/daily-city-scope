
import Marque from "../../Shared/Marque";
import AllPublisher from "./AllPublisher";
import NewsSection from "./NewsSection";
import Statistic from "./Statistic";

const Home = () => {
    return (
        <div>
            <Marque></Marque>
            <NewsSection></NewsSection>
           <Statistic></Statistic>
           <AllPublisher></AllPublisher>
        </div>
    );
};

export default Home;