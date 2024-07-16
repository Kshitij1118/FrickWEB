import React from "react";
import HeroSlider, {Slide} from 'hero-slider';

const banner = "https://www.frickweb.com/images/banner.jpg";
const banner1 = "https://www.frickweb.com/images/banner2.jpg"
const banner2 = "https://www.frickweb.com/images/banner3.jpg"

const Home = () => {
    return (
        <HeroSlider
            slidingAnimation="left_to_right"
            orientation="horizontal"
            initialSlide={1}
            onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange", previousSlide, nextSlide)}
            onChange={nextSlide => console.log("onChange", nextSlide)}
            onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
            style={{
             backgroundColor: "rgba(0, 0, 0, 0.33)"
            }}
            settings={{
                slidingDuration: 250,
                slidingDelay: 100,
                shouldAutoplay: true,
                shouldDisplayButtons: true,
                autoplayDuration: 5000,
                height: "100vh"
            }}
        >
            <Slide background={{
                backgroundImage: banner,
                backgroundAttachment: "fixed"
            }}
            />
            <Slide background={{
                backgroundImage: banner1,
                backgroundAttachment: "fixed"
            }}
            />
            <Slide background={{
                backgroundImage: banner2,
                backgroundAttachment: "fixed"
            }}
            />
        </HeroSlider>
    )
}

export default Home;