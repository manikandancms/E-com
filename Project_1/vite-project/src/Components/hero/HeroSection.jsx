import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import ShimmerLayout from "../shimmer/Shimmer.jsx"

const HeroSection = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <ShimmerLayout />;
    }

    return (
        <>
            <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 mt-[calc(3.5rem+20px)] h-[calc(70vh+20px)] flex items-center justify-center w-[95%] mx-auto pt-5 pb-10 rounded-lg">
                <div className="2xl:container mx-auto grid max-w-screen-xl px-4 md:grid-cols-12 lg:gap-12 xl:gap-0">
                    <div className="w-full mx-auto content-center justify-self-start text-center md:col-span-7 md:text-start">
                        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight dark:text-white md:text-4xl lg:text-5xl xl:text-6xl">
                    Offer ends Soon!
                            <br />
                            Up to 50% OFF!
                        </h1>
                        <p className="mb-4 max-w-2xln font-bold text-pink-500 text-2xl dark:text-gray-400 md:mb-12 md:text-4xl  lg:mb-5 lg:text-xl">
                            Don't Wait - Make a Good feel & Enjoy it by clicking!
                        </p>
                        <div className="hidden md:flex md:justify-start">
                            <Link
                                to="/products"
                                className="inline-block w-auto rounded-full bg-gradient-to-r from-pink-500 via-violet-600 to-blue-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg transition-all duration-300 hover:from-pink-600 hover:to-blue-600 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:from-violet-700 dark:to-blue-700 dark:hover:from-pink-700 dark:hover:to-blue-800 md:px-4 md:py-2 md:text-sm lg:px-5 lg:py-2.5 lg:text-base"
                            >
                                Shop Now
                            </Link>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-center items-center md:col-span-5 md:mt-0">
                        <img
                            className="w-64 h-64 object-contain md:w-80 md:h-80 lg:w-96 lg:h-96"
                            src="https://ik.imagekit.io/mani2/image/131333.png?updatedAt=1750877289786"
                            alt="shopping illustration"
                        />
                    </div>
                </div>
                <div className="flex justify-center px-4 mt-auto md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <Link
                        to="/products"
                        className="inline-block w-auto rounded-full bg-gradient-to-r from-pink-500 via-violet-600 to-blue-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg transition-all duration-300 hover:from-pink-600 hover:to-blue-600 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:from-violet-700 dark:to-blue-700 dark:hover:from-pink-700 dark:hover:to-blue-800 md:px-4 md:py-2 md:text-sm lg:px-5 lg:py-2.5 lg:text-base"
                    >
                        Shop Now
                    </Link>
                </div>
            </section>
        </>
    )
}

export default HeroSection
