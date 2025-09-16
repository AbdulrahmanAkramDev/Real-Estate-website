import CountUp from "react-countup";
import "./Hero.css";
import { HiLocationMarker } from 'react-icons/hi'
import { motion } from "framer-motion";
const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle" ></div>
                        <motion.h1
                            initial={{ y: "2rem", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 2, type: "spring" }}
                            className="hero-header">

                            Discover <br /> Most Suitable <br /> Property

                        </motion.h1>
                    </div>
                    <div className="flexColStart hero-des">
                        <span className="hero-para secondaryText">Find a variety of properties that suit you very easilty</span>
                        <span className="hero-para secondaryText">Forget all difficulties in finding a residence for you </span>
                    </div>
                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size={25} />
                        <input type="text" />
                        <button className="button">Search</button>
                    </div>
                    <div className="stats flexCenter">
                        <div className="stat flexColCenter">
                            <span>
                                <CountUp start={8800} end={9000} duration={3} />
                                <span>+</span>
                            </span>

                            <span className="secondaryText">Permium Products</span>

                        </div>
                        <div className="stat flexColCenter">
                            <span>
                                <CountUp start={1950} end={2000} duration={3} />
                                <span>+</span>
                            </span>

                            <span className="secondaryText">Happy customers</span>

                        </div>
                        <div className="stat flexColCenter">
                            <span>
                                <CountUp end={28} />
                                <span>+</span>
                            </span>

                            <span className="secondaryText">Award Winnings</span>

                        </div>

                    </div>
                </div>
                <motion.div
                    initial={{ x: "7rem", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2, type: "spring" }}
                    className="hero-right image-container flexCenter">
                    <img src="/heroimage.png" alt="" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
