import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import data from '../../utils/slider.json'
import './Residencies.css'
import { sliderSettings } from '../../utils/common'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";





const Residencies = () => {
    return (
        <section className="r-wrapper">
            <div className="padding innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className='orangeText'>Best Choices</span>
                    <span className='primaryText'>Popular Residencies</span>
                </div>
                <Swiper {...sliderSettings}>
                    <SliderButtons />
                    {data.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className="flexColStart r-card">
                                <img src={card.image} alt="" />
                                <span className='secondaryText r-price'>
                                    <span style={{ color: "orange" }}>$</span>
                                    <span>{card.price}</span>
                                </span>
                                <span className='primaryText'>{card.name}</span>
                                <span className='secondaryText'>{card.detail}</span>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Residencies


const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-button">
            <button onClick={() => swiper.slidePrev()}><IoIosArrowBack /></button>

            <button onClick={() => swiper.slideNext()}><IoIosArrowForward /></button>
        </div>
    );
};



