import React, { useContext, useEffect, useState } from "react";
import styles from "./SliderPage.module.scss";
import { Link } from "react-router-dom";
import Academy from "../../ui/Academy/Academy";
import { SliderContext } from "../../App";
import SwiperCarousel from "../../components/SwiperCarousel/SwiperCarousel";

const SliderPage = () => {
    const { slideId, setSlideId } = useContext(SliderContext);

    return (
        <div className={styles.slider}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <Link to="/" className={styles.link}>
                        <Academy />
                    </Link>

                    <button>Skip</button>
                </header>

                <SwiperCarousel />
            </div>
        </div>
    );
};

export default SliderPage;
