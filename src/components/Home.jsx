import React from "react";
import styles from "../styles";
import { homeImage } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                        Intelligent <br className="sm:block hidden" />{" "}
                        <span className="text-gradient">Mobile Arm</span>{" "}
                    </h1>
                    <div className="ss:flex hidden md:mr-4 mr-0">
                        <GetStarted />
                    </div>
                </div>

                <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                    Robot
                </h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    This is our graduation project.... Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aliquid porro qui odio placeat facilis.
                </p>
            </div>

            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative xl:px-0 sm:px-16`}>
                <img src={homeImage} alt="robot" className="w-[100%] h-[75%] relative z-[5]" />

                {/* gradient start */}
                <div className="absolute z-[1] w-[75%] h-[75%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[75%] h-[75%] right-20 bottom-20 blue__gradient border" />
                {/* gradient end */}
            </div>

            <div className={`ss:hidden ${styles.flexCenter}`}>
                <GetStarted />
            </div>
        </section>
    )
}

export default Hero;