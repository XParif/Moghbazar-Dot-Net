import Connection from "@components/homepage/Connection"
import FeatureSection from "@components/homepage/FeatureSection"
import HeroSection from "@components/homepage/HeroSection"
import OurService from "@components/homepage/OurService"
import Stats from "@components/homepage/Stats"

const Homepage = () => {
    return (
        <>
            <HeroSection />
            <FeatureSection />
            <Connection />
            <OurService />
            <Stats />
        </>
    )
}

export default Homepage