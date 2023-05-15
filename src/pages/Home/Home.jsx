import About from "./About/About";
import Contact from "./Contact/Contact";
import Services from "./Services/Services";
import Slider from "./Slider/Slider";
import Team from "./Team/Team";
import WhyUs from "./WhyUs/WhyUs";


const Home = () => {
    return (
        <>
            <main className="mx-4 mb-10 md:mx-32 md:mb-32 md:my-0">
                <Slider></Slider>
                <About></About>
                <Services></Services>
                <Contact></Contact>
                <Team></Team>
                <WhyUs></WhyUs>
            </main>
        </>
    );
};

export default Home;