import { Link } from "react-router-dom"
import heroImage from '@public/hero.jpg'

const HeroSection = () => {
    return (
        <section className="relative mx-auto px-4 md:px-8 py-4 max-w-screen-xl">
            <div className="top-0 left-0 absolute bg-white opacity-40 w-full h-full"></div>
            <div className="relative z-10 lg:flex items-center gap-5">
                <div className="flex-1 sm:mx-auto py-5 max-w-lg lg:max-w-max sm:text-center lg:text-left">
                    <h3 className="font-semibold text-3xl text-gray-800 md:text-4xl">
                        You deserve ultra  fast internet for <span className="text-indigo-600">high performance</span>
                    </h3>
                    <p className="mt-3 text-gray-500 leading-relaxed">
                        Best internet service provider in Moghbazar which provides fully dedicated, super fast, cost-effective, secured internet connection. We’re promised to meeting your needs and delivering industry-leading customer service.
                    </p>
                    <Link
                        className="inline-flex items-center bg-indigo-50 mt-5 px-4 py-2 rounded-full font-medium text-indigo-600"
                        to="/packages">
                        See All Plans
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-6 h-6 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
                <div className="flex-1 mx-auto mt-5 lg:mt-0 rounded-tl-[400px] rounded-bl-[100px] sm:w-9/12 lg:w-auto overflow-hidden">
                    <img
                        src={heroImage}
                        alt=""
                        className="w-full"
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection