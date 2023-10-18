import React, { useContext, useEffect } from "react";
import { SliderContext } from "../../App";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import styles from "./SwiperCarousel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/photo2.png";
import photo3 from "../../assets/photo3.png";
import photo4 from "../../assets/photo4.png";
import photo5 from "../../assets/photo5.png";
import photo6 from "../../assets/photo6.png";
import photo7 from "../../assets/photo7.png";
import photo8 from "../../assets/photo8.png";
import ArrowBlock from "../../ui/ArrowBlock/ArrowBlock";
const SwiperCarousel = () => {
    const { slideId, setSlideId } = useContext(SliderContext);
    return (
        <>
            <Swiper
                effect={"coverflow"}
                initialSlide={slideId - 1}
                grabCursor={true}
                spaceBetween={150}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                navigation={{
                    nextEl: styles.nextArrow,
                    prevEl: styles.prevArrow,
                }}
                breakpoints={{
                    1250: {
                        spaceBetween: 150,
                    },
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className={styles.swiper}
            >
                <SwiperSlide className={styles.swiperSlide}>
                    {({ isActive, isPrev, isNext }) => (
                        <div
                            style={{
                                backgroundImage: `url( ${photo1})`,
                                backgroundRepeat: "no-repeat",
                                height: `${isNext || isPrev ? 70 : 80}vh`,
                                width: `${isNext || isPrev ? 70 : 100}%`,
                            }}
                            className={
                                (isPrev && styles.prev) ||
                                (isNext && styles.next) ||
                                (isActive && styles.active)
                            }
                        >
                            <span>Introduction</span>
                            {isActive && <ArrowBlock />}
                        </div>
                    )}
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    {({ isActive, isPrev, isNext }) => (
                        <div
                            style={{
                                backgroundImage: `url( ${photo2})`,
                                backgroundRepeat: "no-repeat",
                                height: `${isNext || isPrev ? 70 : 80}vh`,
                                width: `${isNext || isPrev ? 70 : 100}%`,
                            }}
                            className={
                                (isPrev && styles.prev) ||
                                (isNext && styles.next) ||
                                (isActive && styles.active)
                            }
                        >
                            <span>Introduction</span>
                            {isActive && <ArrowBlock />}
                        </div>
                    )}
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    {({ isActive, isPrev, isNext }) => (
                        <div
                            style={{
                                backgroundImage: `url( ${photo3})`,
                                backgroundRepeat: "no-repeat",
                                height: `${isNext || isPrev ? 70 : 80}vh`,
                                width: `${isNext || isPrev ? 70 : 100}%`,
                            }}
                            className={
                                (isPrev && styles.prev) ||
                                (isNext && styles.next) ||
                                (isActive && styles.active)
                            }
                        >
                            <span>Introduction</span>
                            {isActive && <ArrowBlock />}
                        </div>
                    )}
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    {({ isActive, isPrev, isNext }) => (
                        <div
                            style={{
                                backgroundImage: `url( ${photo4})`,
                                backgroundRepeat: "no-repeat",
                                height: `${isNext || isPrev ? 70 : 80}vh`,
                                width: `${isNext || isPrev ? 70 : 100}%`,
                            }}
                            className={
                                (isPrev && styles.prev) ||
                                (isNext && styles.next) ||
                                (isActive && styles.active)
                            }
                        >
                            <span>Introduction</span>
                            {isActive && <ArrowBlock />}
                        </div>
                    )}
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    {({ isActive, isPrev, isNext }) => (
                        <div
                            style={{
                                backgroundImage: `url( ${photo5})`,
                                backgroundRepeat: "no-repeat",
                                height: `${isNext || isPrev ? 70 : 80}vh`,
                                width: `${isNext || isPrev ? 70 : 100}%`,
                            }}
                            className={
                                (isPrev && styles.prev) ||
                                (isNext && styles.next) ||
                                (isActive && styles.active)
                            }
                        >
                            <span>Introduction</span>
                            {isActive && <ArrowBlock />}
                        </div>
                    )}
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    {({ isActive, isPrev, isNext }) => (
                        <div
                            style={{
                                backgroundImage: `url( ${photo6})`,
                                backgroundRepeat: "no-repeat",
                                height: `${isNext || isPrev ? 70 : 80}vh`,
                                width: `${isNext || isPrev ? 70 : 100}%`,
                            }}
                            className={
                                (isPrev && styles.prev) ||
                                (isNext && styles.next) ||
                                (isActive && styles.active)
                            }
                        >
                            <span>Introduction</span>
                            {isActive && <ArrowBlock />}
                        </div>
                    )}
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    {({ isActive, isPrev, isNext }) => (
                        <div
                            style={{
                                backgroundImage: `url( ${photo7})`,
                                backgroundRepeat: "no-repeat",
                                height: `${isNext || isPrev ? 70 : 80}vh`,
                                width: `${isNext || isPrev ? 70 : 100}%`,
                            }}
                            className={
                                (isPrev && styles.prev) ||
                                (isNext && styles.next) ||
                                (isActive && styles.active)
                            }
                        >
                            <span>Introduction</span>
                            {isActive && <ArrowBlock />}
                        </div>
                    )}
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    {({ isActive, isPrev, isNext }) => (
                        <div
                            style={{
                                backgroundImage: `url( ${photo8})`,
                                backgroundRepeat: "no-repeat",
                                height: `${isNext || isPrev ? 70 : 80}vh`,
                                width: `${isNext || isPrev ? 70 : 100}%`,
                            }}
                            className={
                                (isPrev && styles.prev) ||
                                (isNext && styles.next) ||
                                (isActive && styles.active)
                            }
                        >
                            <span>Introduction</span>
                            {isActive && <ArrowBlock />}
                        </div>
                    )}
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SwiperCarousel;
